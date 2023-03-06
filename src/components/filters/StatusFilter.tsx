import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface StatusFilterProps {
  status: string;
  onStatusChange: (status: string) => void;
}

const StatusFilter: React.FC<StatusFilterProps> = ({
  status,
  onStatusChange,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="status">Status</InputLabel>
      <Select
        labelId="status"
        id="status"
        value={status}
        label="Status"
        onChange={(event: SelectChangeEvent) =>
          onStatusChange(event.target.value)
        }
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="CAPTURED">CAPTURED</MenuItem>
        <MenuItem value="COMPLETED">COMPLETED</MenuItem>
        <MenuItem value="CREATED">CREATED</MenuItem>
        <MenuItem value="FAILED">FAILED</MenuItem>
        <MenuItem value="SETTLED">SETTLED</MenuItem>
      </Select>
    </FormControl>
  );
};

export default StatusFilter;
