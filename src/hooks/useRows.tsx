import React, { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { GridRowsProp } from "@mui/x-data-grid";
import { PaginatedDto } from "../types/index";

interface useRowsProps {
  paginate: PaginatedDto | undefined;
  transactionDate: Dayjs | null;
}

const useRows = ({ paginate, transactionDate }: useRowsProps) => {
  const [rows, setRows] = React.useState<GridRowsProp>([]);
  const [rowCountState, setRowCountState] = useState(
    paginate?.totalNumberOfItems || 0
  );

  // API client return undefined while loading
  // Following lines are here to prevent `rowCountState` and `rows` from being undefined during the loading
  useEffect(() => {
    setRowCountState((prevRowCountState) =>
      paginate?.totalNumberOfItems !== undefined
        ? paginate?.totalNumberOfItems
        : prevRowCountState
    );
  }, [paginate?.totalNumberOfItems, setRowCountState]);

  useEffect(() => {
    if (transactionDate && paginate) {
      setRows(
        paginate.items.filter((row) => {
          const createdAt = dayjs(row?.createdAt);
          const createdAtWithoutTime = createdAt.startOf("day");
          const transactionDateWithoutTime = transactionDate?.startOf("day");
          return createdAtWithoutTime.isSame(transactionDateWithoutTime);
        })
      );
    } else {
      setRows((prevRowsState) =>
        paginate?.items !== undefined ? paginate?.items : prevRowsState
      );
    }
  }, [paginate, transactionDate]);

  return {
    rows,
    rowCountState,
    setRows,
  };
};

export default useRows;
