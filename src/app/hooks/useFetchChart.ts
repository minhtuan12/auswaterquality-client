import { useCallback, useEffect, useState } from "react";

type QueriesResponse<T> = { data: { data: T[] } };

type UseQueriesProps<T, P> = {
  fnc: (params?: P) => Promise<QueriesResponse<T>>;
  params?: P;
  onSuccess?: (data: T[]) => void;
  onError?: (err: unknown) => void;
};

const useFetchChart = <T, P>({
  fnc,
  params,
  onSuccess,
  onError,
}: UseQueriesProps<T, P>) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setError(null);
    try {
      const response = await fnc(params);
      setData(response.data.data);
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
    data,
    loading,
    error,
    setData,
    setLoading,
    refetch: fetchData,
  };
};

export default useFetchChart;
