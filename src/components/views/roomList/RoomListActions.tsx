import { Stack } from "@mui/material";
import Sorting, { SortTypes } from "./Sorting";
import CheckboxControl from "../../ui/checkboxControl/CheckboxControl";

interface Props {
  sortCriteria: SortTypes;
  setSortCriteria: (val: SortTypes) => void;
  checkAllAvailabilities: boolean;
  setCheckAllAvailabilities: (val: boolean) => void;
}

export default function RoomListActions({
  sortCriteria,
  setSortCriteria,
  checkAllAvailabilities,
  setCheckAllAvailabilities,
}: Props) {
  return (
    <Stack flexDirection="row" justifyContent="space-between">
      <CheckboxControl
        label="Check availabilities for all rooms"
        checked={checkAllAvailabilities}
        setChecked={setCheckAllAvailabilities}
      />
      <Sorting sortCriteria={sortCriteria} setSortCriteria={setSortCriteria} />
    </Stack>
  );
}
