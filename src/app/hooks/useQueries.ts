import { useCallback, useEffect, useState } from "react";

type Meta = {
  page: number;
  limit: number;
  total: number;
};

type QueriesResponseData<T> = { data: T[]; meta?: Meta };

type QueriesResponse<T> = { data: QueriesResponseData<T> };

type UseQueriesProps<T, P> = {
  fnc: (params?: P) => Promise<QueriesResponse<T>>;
  params?: P;
  onSuccess?: (data: T[]) => void;
  onError?: (err: unknown) => void;
};

const useQueries = <T, P>({
  fnc,
  params,
  onSuccess,
  onError,
}: UseQueriesProps<T, P>) => {
  const [data, setData] = useState<QueriesResponseData<T>>({
    data: [],
    meta: { page: 0, limit: 10, total: 10 },
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setError(null);
    try {
      const response = await fnc(params);
      setData(response.data);
      onSuccess?.(response.data.data);
    } catch (error) {
      setError("Error");
      onError?.(error);
    } finally {
      setLoading(false);
    }
  }, [fnc, params, onError, onSuccess]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data: data?.data ?? [],
    meta: data?.meta ?? { page: 0, limit: 10, total: 10 },
    loading,
    error,
    setData,
    setLoading,
    refetch: fetchData,
  };
};

export default useQueries;
