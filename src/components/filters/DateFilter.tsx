import React from "react";
import { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormControl from "@mui/material/FormControl";

interface DateFilterProps {
  onTransactionDateChange: (date: Dayjs | null) => void;
  transactionDate: Dayjs | null;
}

const DateFilter: React.FC<DateFilterProps> = ({
  onTransactionDateChange,
  transactionDate,
}) => {
  return (
    <FormControl fullWidth>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Transaction date"
          value={transactionDate}
          onChange={(date) => {
            onTransactionDateChange(date);
          }}
        />
      </LocalizationProvider>
    </FormControl>
  );
};

export default DateFilter;
