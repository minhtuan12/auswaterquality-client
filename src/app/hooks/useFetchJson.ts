import { useCallback, useEffect, useState } from "react";

type UseQueriesProps<T> = {
  url: string;
  default?: any;
  onSuccess?: (data: T[]) => void;
  onError?: (err: unknown) => void;
};

const useFetchJson = <T>({
  url,
  default: defaultData,
  onSuccess,
  onError,
}: UseQueriesProps<T>) => {
  const [data, setData] = useState<T>(defaultData ?? null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setError(null);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        onSuccess?.(data);
      })
      .catch(() => {
        setError("Error");
        onError?.(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, onSuccess, onError, error]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    setData,
    setLoading,
    refetch: fetchData,
  };
};

export default useFetchJson;
