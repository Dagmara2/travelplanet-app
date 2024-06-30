import { Stack, Typography, styled } from "@mui/material";
import { AvailabilityStatus } from "../../../api";
import CheckboxControl from "../../ui/checkboxControl/CheckboxControl";

interface Props {
  checkIfAvailable: boolean;
  availabilityStatus: AvailabilityStatus;
  checkAvailability: boolean;
  setCheckAvailability: (val: boolean) => void;
}

const StyledWrapper = styled(Stack)({
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  gap: "2rem",
});

const availabilityColor: Record<AvailabilityStatus, string> = {
  available: "green",
  error: "red",
  onRequest: "blue",
  soldout: "gray",
};

export default function RoomAvailability({
  checkAvailability,
  availabilityStatus,
  checkIfAvailable,
  setCheckAvailability,
}: Props) {
  return (
    <StyledWrapper>
      <CheckboxControl
        label="check availability"
        checked={checkAvailability}
        setChecked={setCheckAvailability}
      />
      {checkIfAvailable && (
        <Typography
          variant="subtitle2"
          fontWeight={700}
          color={availabilityColor[availabilityStatus]}
        >
          {availabilityStatus}
        </Typography>
      )}
    </StyledWrapper>
  );
}
