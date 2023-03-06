import useSWR from "swr";
import { fetcher } from "../helpers/fetcher";
import { PaginatedDto } from "../types/index";

interface usePaginateProps {
  pageIndex: number;
  pageSize: number;
  status: string;
}

const usePaginate = ({ pageIndex, pageSize, status }: usePaginateProps) => {
  const { data, error, isLoading } = useSWR<PaginatedDto>(
    `http://localhost:8080/api/v1/payments/?page=${pageIndex}&size=${pageSize}&status=${status}`,
    fetcher
  );

  return {
    paginate: data,
    isLoading,
    isError: error,
  };
};

export default usePaginate;
