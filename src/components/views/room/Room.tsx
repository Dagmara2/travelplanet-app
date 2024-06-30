import { ListItem, Typography, styled } from "@mui/material";
import { RoomProps, useGetRoomByIdQuery } from "../../../api";
import { useEffect, useState } from "react";
import RoomHeader from "./RoomHeader";
import BookButton from "./BookButton";
import RoomAvailability from "./RoomAvailability";
import RoomPrice from "./RoomPrice";
import Loading from "../../ui/loading";
import ErrorMessage from "../../ui/errorMessage";

interface Props {
  room: RoomProps;
  checkAllAvailabilities: boolean;
  setUncheckAllAvailabilities: (val: boolean) => void;
}

const StyledListItem = styled(ListItem)({
  border: "1px solid gray",
  borderRadius: "5px",
  alignItems: "baseline",
  gap: "1rem",
  marginBottom: "1.5rem",
  flexWrap: "wrap",
});

export default function Room({
  room,
  checkAllAvailabilities,
  setUncheckAllAvailabilities,
}: Props) {
  const { data, error, isLoading, refetch } = useGetRoomByIdQuery(room.id);
  const [checkAvailability, setCheckAvailability] = useState(
    checkAllAvailabilities
  );
  const checkIfAvailable = checkAllAvailabilities || checkAvailability;

  useEffect(() => {
    if (checkAllAvailabilities) setCheckAvailability(true);
  }, [checkAllAvailabilities]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage onTryAgainClick={refetch} />;

  const handleOnChange = (val: boolean) => {
    if (!val) setUncheckAllAvailabilities(true);
    setCheckAvailability(val);
  };

  return (
    <StyledListItem>
      <RoomHeader
        name={room.name}
        price={
          <RoomPrice
            room={room}
            data={data}
            checkAvailability={checkAvailability}
          />
        }
      />
      <BookButton
        disabled={data?.availabilityStatus !== "available"}
        message={`Booked Room: ${room.name} for ${room.price.value}${room.price.currencyCode}`}
      />
      {data && (
        <RoomAvailability
          checkIfAvailable={checkIfAvailable}
          availabilityStatus={data?.availabilityStatus}
          checkAvailability={checkAvailability}
          setCheckAvailability={handleOnChange}
        />
      )}
    </StyledListItem>
  );
}
