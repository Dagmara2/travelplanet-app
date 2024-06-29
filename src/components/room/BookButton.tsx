import { Button } from "@mui/material";

interface Props {
  disabled: boolean;
  message: string;
}

export default function BookButton({ disabled, message }: Props) {
  return (
    <Button
      disabled={disabled}
      sx={{ ml: "auto" }}
      onClick={() => console.log(message)}
    >
      Book
    </Button>
  );
}
