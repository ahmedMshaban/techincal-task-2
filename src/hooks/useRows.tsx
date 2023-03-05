import React, { useState, useEffect } from "react";
import { GridRowsProp } from "@mui/x-data-grid";
import { PaginatedDto } from "../types/index";

interface useRowsProps {
  paginate: PaginatedDto | undefined;
}

const useRows = ({ paginate }: useRowsProps) => {
  const [rows, setRows] = React.useState<GridRowsProp>([]);
  const [rowCountState, setRowCountState] = useState(
    paginate?.totalNumberOfItems || 0
  );
  const [filteredRows, setFilteredRows] = useState<GridRowsProp>([]);


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
    setRows((prevRowsState) =>
      paginate?.items !== undefined ? paginate?.items : prevRowsState
    );
  }, [paginate]);

  return {
    rows,
    filteredRows,
    rowCountState,
    setRows,
    setFilteredRows
  };
};

export default useRows;
