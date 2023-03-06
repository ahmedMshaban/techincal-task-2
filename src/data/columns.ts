export const columns = [
  { field: "id", sortable: false, minWidth: 200 },
  { field: "amount", sortable: false,  minWidth: 120 },
  { field: "currency", sortable: false,  minWidth: 120  },
  { field: "status", sortable: false,  minWidth: 120  },
  { field: "description", sortable: false,  minWidth: 300  },
  {
    field: "createdAt",
    type: "dateTime",
    sortable: false,
    minWidth: 200 ,
    valueGetter: ({ value }: { value: string }) => value && new Date(value),
  },
];
