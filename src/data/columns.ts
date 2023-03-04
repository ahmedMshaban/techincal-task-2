export const columns = [
  { field: "id", sortable: false},
  { field: "amount", sortable: false },
  { field: "currency", sortable: false },
  { field: "status", sortable: false },
  { field: "description",sortable: false },
  {
    field: "createdAt",
    type: "dateTime",
    sortable: false,
    valueGetter: ({ value }: { value: string }) => value && new Date(value),
  },
];
