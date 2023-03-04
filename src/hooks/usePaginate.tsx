import useSWR from "swr";
import { fetcher } from "../helpers/fetcher";
import { PaginatedDto } from "../types/index";

interface usePaginateProps {
  pageIndex: number;
}

const usePaginate = ({ pageIndex }: usePaginateProps) => {
  const { data, error, isLoading } = useSWR<PaginatedDto>(
    `/api/v1/payments/?page=${pageIndex}`,
    fetcher
  );

  return {
    paginate: data,
    isLoading,
    isError: error,
  };
};

export default usePaginate;
