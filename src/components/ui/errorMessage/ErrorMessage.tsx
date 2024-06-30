import { Alert, Button } from "@mui/material";

export default function ErrorMessage({
  onTryAgainClick,
}: {
  onTryAgainClick: () => void;
}) {
  return (
    <Alert severity="error">
      Something went wrong. Please
      <Button onClick={onTryAgainClick} variant="text" size="small">
        try again.
      </Button>
    </Alert>
  );
}
