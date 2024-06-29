import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export type SortTypes = "nameAZ" | "nameZA" | "priceAsc" | "priceDesc";

interface Props {
  sortCriteria: SortTypes;
  setSortCriteria: (val: SortTypes) => void;
}

export default function Sorting({ sortCriteria, setSortCriteria }: Props) {
  const handleChange = (e: any) => {
    setSortCriteria(e.target.value as SortTypes);
  };
  return (
    <FormControl size="small">
      <InputLabel id="demo-select-small-label">Sort By</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={sortCriteria}
        label="Sort By"
        onChange={handleChange}
      >
        <MenuItem value="nameAZ">Name A-Z</MenuItem>
        <MenuItem value="nameZA">Name Z-A</MenuItem>
        <MenuItem value="priceAsc">Price low-high</MenuItem>
        <MenuItem value="priceDesc">Price high-low</MenuItem>
      </Select>
    </FormControl>
  );
}
