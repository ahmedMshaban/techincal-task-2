import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import dayjs from "dayjs";

import usePaginate from "../hooks/usePaginate";
import useRows from "../hooks/useRows";
import { columns } from "../data/columns";
import DateFilter from "../components/filters/DateFilter";
import useDate from "../hooks/useDate";

const Paginate: React.FC = () => {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });
  const { paginate, isError, isLoading } = usePaginate({
    pageIndex: paginationModel.page,
  });
  const { rows, filteredRows, rowCountState, setFilteredRows } = useRows({
    paginate,
  });
  const { transactionDate, handleTransactionDateChange } = useDate();

  useEffect(() => {
    if (transactionDate !== null) {
      console.log('whaat aabout here any loop?');

      setFilteredRows(
        rows.filter((row) => {
          const createdAt = dayjs(row?.createdAt);
          const createdAtWithoutTime = createdAt.startOf("day");
          const transactionDateWithoutTime = transactionDate?.startOf("day");
          return createdAtWithoutTime.isSame(transactionDateWithoutTime);
        })
      );
    }
  }, [rows, setFilteredRows, transactionDate]);

  useEffect(()=>{
    console.log('any loop?');
    console.log(filteredRows);
  }, [filteredRows])

  if (isError) return <div>failed to load</div>;

  // render data
  return (
    <Box sx={{ width: "100%", marginTop: "50px" }}>
      <DateFilter
        onTransactionDateChange={handleTransactionDateChange}
        transactionDate={transactionDate}
      />
      <DataGrid
        disableColumnFilter
        disableColumnSelector
        disableRowSelectionOnClick
        paginationMode="server"
        pagination
        autoHeight
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        columns={columns}
        rows={transactionDate !== null ? filteredRows: rows}
        pageSizeOptions={[5]}
        loading={isLoading}
        rowCount={rowCountState}
      ></DataGrid>
    </Box>
  );
};

export default Paginate;
