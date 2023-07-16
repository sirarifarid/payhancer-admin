import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useLayoutEffect } from "react";

export function useAppState<T>(
  key: string,
  p_options?: { enabled?: boolean; initial?: any }
): [T | undefined, (updater?: Partial<T>) => void] {
  const queryClient = useQueryClient();
  const options = {
    enabled: true,
    initial: undefined,
    ...p_options,
  };
  const { enabled, initial } = options || {};
  useLayoutEffect(() => {}, []);
  function setQuery(updater: any) {
    queryClient.setQueryData([key + "-cache"], updater);
  }
  useLayoutEffect(() => {}, [
    queryClient.getQueryData<AxiosResponse<T>>([key])?.data,
  ]);
  const data = useQuery<T>({
    queryKey: [key + "-cache"],
    queryFn: () =>
      queryClient.getQueryData([key + "-cache"]) ||
      queryClient.getQueryData<AxiosResponse<T>>([key])?.data ||
      (undefined as T) ||
      initial,
  }).data;
  return [data, setQuery];
}
