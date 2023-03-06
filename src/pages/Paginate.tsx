import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";

import usePaginate from "../hooks/usePaginate";
import useRows from "../hooks/useRows";
import useDate from "../hooks/useDate";
import useStatus from "../hooks/useStatus";

import { columns } from "../data/columns";
import DateFilter from "../components/filters/DateFilter";
import StatusFilter from "../components/filters/StatusFilter";
import { Container } from "@mui/system";

const Paginate: React.FC = () => {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });

  const { transactionDate, handleTransactionDateChange } = useDate();
  const { status, handleStatusChange } = useStatus();

  const { paginate, isError, isLoading } = usePaginate({
    pageIndex: paginationModel.page,
    pageSize: paginationModel.pageSize,
    status: status,
  });

  const { rows, rowCountState } = useRows({
    paginate,
    transactionDate,
  });

  if (isError) return <div>failed to load</div>;

  return (
    <Container className="page-container">
      <Grid container spacing={2} className="filters-container">
        <Grid item xs={12} md={8}>
          <StatusFilter status={status} onStatusChange={handleStatusChange} />
        </Grid>
        <Grid item xs={12} md={4}>
          <DateFilter
            onTransactionDateChange={handleTransactionDateChange} //
            transactionDate={transactionDate}
          />
        </Grid>
      </Grid>

      <DataGrid
        disableColumnFilter
        disableColumnSelector
        disableRowSelectionOnClick
        paginationMode="server"
        pagination
        autoHeight
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[paginationModel.pageSize]}
        columns={columns}
        rows={rows}
        loading={isLoading}
        rowCount={rowCountState}
      ></DataGrid>
    </Container>
  );
};

export default Paginate;
