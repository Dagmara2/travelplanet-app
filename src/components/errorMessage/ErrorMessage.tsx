import { Alert, Button } from "@mui/material";

export default function ErrorMessage({ refetch }: { refetch: () => void }) {
  return (
    <Alert severity="error">
      Something went wrong. Please
      <Button onClick={refetch} variant="text" size="small">
        try again.
      </Button>
    </Alert>
  );
}
