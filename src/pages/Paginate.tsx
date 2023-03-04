import React, { useState, useEffect } from "react";
import { DataGrid, GridRowsProp } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

import usePaginate from "../hooks/usePaginate";
import { columns } from "../data/columns";

const Paginate: React.FC = () => {
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 5,
    page: 0,
  });
  const { paginate, isError, isLoading } = usePaginate({
    pageIndex: paginationModel.page,
  });
  const [rows, setRows] = React.useState<GridRowsProp>([]);
  const [rowCountState, setRowCountState] = useState(
    paginate?.totalNumberOfItems || 0
  );

  // Some API clients return undefined while loading
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

  if (isError) return <div>failed to load</div>;

  // render data
  return (
    <Box sx={{ width: "100%" }}>
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
        rows={rows}
        pageSizeOptions={[5]}
        loading={isLoading}
        rowCount={rowCountState}
      ></DataGrid>
    </Box>
  );
};

export default Paginate;
