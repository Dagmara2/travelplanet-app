import { Checkbox, FormControlLabel } from "@mui/material";

interface Props {
  label: string;
  checked: boolean;
  setChecked: (val: boolean) => void;
}

export default function CheckboxControl({ label, checked, setChecked }: Props) {
  const handleOnChange = (event: any) => {
    setChecked(event.target.checked);
  };
  return (
    <FormControlLabel
      checked={checked}
      onChange={handleOnChange}
      control={<Checkbox />}
      label={label}
    />
  );
}
