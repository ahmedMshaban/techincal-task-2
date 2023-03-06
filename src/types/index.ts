export interface PaginatedDto {
  currentPage: number;
  hasNext: boolean;
  items: PaymentTransactionDto[];
  numberOfPages: number;
  pageSize: number;
  totalNumberOfItems: number;
  status: number;
}

interface PaymentTransactionDto {
  amount: number;
  createdAt: string;
  currency: string;
  description: string;
  id: string;
  status: string;
}

export interface ErrnoException extends Error {
  status?: number;
}
