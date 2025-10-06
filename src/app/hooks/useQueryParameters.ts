import { useCallback, useState } from "react";
import useUpdateEffect from "./useUpdateEffect";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const NUMBER_PATTERN = /^-?\d+$/;

const parseQueryParams = <T>(
  initial: T | undefined,
  queryInput: URLSearchParams | undefined
): T => {
  const data = queryInput && Object.fromEntries(queryInput);

  const result = {
    ...initial,
    ...data,
  } as {
    [key: string]: unknown;
  };

  for (const key in result) {
    if (typeof result[key] === "string") {
      const str = result[key].toLowerCase();
      if (str === "true") {
        result[key] = true;
      } else if (str === "false") {
        result[key] = false;
      } else if (NUMBER_PATTERN.test(str)) {
        result[key] = Number(str);
      } else if (DATE_PATTERN.test(str)) {
        result[key] = new Date(result[key]);
      }
    }
  }

  return result as T;
};

const useQueryParameters = <T>(initial: T | undefined) => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(parseQueryParams(initial, searchParams));

  useUpdateEffect(() => {
    setQuery(parseQueryParams(initial, searchParams));
  }, [searchParams]);

  const convertData = useCallback(
    (queryInput: Partial<T>) => {
      const data = { ...query, ...queryInput };

      for (const key in data) {
        if (
          data[key] === undefined ||
          data[key] === null ||
          data[key] === "" ||
          data[key] == initial?.[key]
        ) {
          delete data[key];
        } else if (
          Object.prototype.toString.call(data[key]) === "[object Date]"
        ) {
          const date = data[key] as (T & Partial<T>)[Extract<keyof T, string>] &
            Date;
          const offset = date.getTimezoneOffset();
          data[key] = new Date(date.getTime() - offset * 60 * 1000)
            .toISOString()
            .split("T")[0] as (T & Partial<T>)[Extract<keyof T, string>];
        }
      }
      return data;
    },
    [initial, query]
  );

  const convertQueryToString = useCallback(
    (queryInput: Partial<T>) => {
      const obj = convertData(queryInput);

      return Object.entries(obj)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
    },
    [convertData]
  );

  const addQuery = useCallback(
    (queryInput: Partial<T>) => {
      const params = new URLSearchParams(convertData(queryInput) as string[][]);
      return setSearchParams(params);
    },
    [convertData, setSearchParams]
  );

  return {
    query,
    search,
    addQuery,
    navigate,
    convertData,
    convertQueryToString,
  };
};

export default useQueryParameters;
