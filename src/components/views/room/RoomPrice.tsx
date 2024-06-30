import { Typography } from "@mui/material";
import { RoomAvailabilityProps, RoomProps } from "../../../api";

interface RenderPriceProps {
  room: RoomProps;
  data?: RoomAvailabilityProps;
  checkAvailability: boolean;
}

export default function RoomPrice({
  room,
  data,
  checkAvailability,
}: RenderPriceProps) {
  if (checkAvailability && data?.availabilityStatus === "available") {
    return (
      <>
        {data?.price.value} {data?.price.currencyCode}
        <Typography
          variant="caption"
          fontSize="1rem"
          fontWeight={700}
          sx={{ ml: "1rem" }}
        >
          Discount: {room.price.value - data?.price.value}{" "}
          {room.price.currencyCode}
        </Typography>
      </>
    );
  } else {
    return (
      <>
        {room.price.value} {room.price.currencyCode}
      </>
    );
  }
}
