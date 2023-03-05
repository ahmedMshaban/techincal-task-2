import { useState } from "react";
import { Dayjs } from "dayjs";

const useDate = () => {
  const [transactionDate, setTransactionDate] = useState<Dayjs | null>(null);

  const handleTransactionDateChange = (date: Dayjs | null) => {
    setTransactionDate(date);
  };

  return {
    transactionDate,
    handleTransactionDateChange,
  };
};

export default useDate;
