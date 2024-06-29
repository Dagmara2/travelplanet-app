import { List } from "@mui/material";
import { useGetRoomsQuery } from "../../api";
import Room from "../room";
import Loading from "../loading";
import { useEffect, useState } from "react";
import { SortTypes } from "./Sorting";
import RoomListActions from "./RoomListActions";
import ErrorMessage from "../errorMessage";
import RoomPagination from "./RoomPagination";

export default function RoomList() {
  const { data, isLoading, error, refetch } = useGetRoomsQuery();
  const [sortCriteria, setSortCriteria] = useState<SortTypes>("nameAZ");
  const [checkAllAvailabilities, setCheckAllAvailabilities] = useState(false);
  const [uncheckAllAvailabilities, setUncheckAllAvailabilities] =
    useState(false);

  useEffect(() => {
    if (uncheckAllAvailabilities) setCheckAllAvailabilities(false);
  }, [uncheckAllAvailabilities]);

  const handleCheckAllAvailabilities = (val: boolean) => {
    setCheckAllAvailabilities(val);
    if (val) setUncheckAllAvailabilities(false);
  };

  if (isLoading) return <Loading />;
  if (error) <ErrorMessage refetch={refetch} />;

  const sortedRooms = [...(data ?? [])].sort((a, b) => {
    if (sortCriteria === "nameAZ") {
      return a.name.localeCompare(b.name);
    } else if (sortCriteria === "nameZA") {
      return b.name.localeCompare(a.name);
    } else if (sortCriteria === "priceAsc") {
      return a.price.value - b.price.value;
    } else if (sortCriteria === "priceDesc") {
      return b.price.value - a.price.value;
    }
    return 0;
  });

  const numberOfPages = Math.ceil(sortedRooms.length / 4);

  return (
    <>
      <RoomListActions
        sortCriteria={sortCriteria}
        setSortCriteria={setSortCriteria}
        checkAllAvailabilities={checkAllAvailabilities}
        setCheckAllAvailabilities={handleCheckAllAvailabilities}
      />
      <List>
        {sortedRooms?.map((room) => (
          <Room
            room={room}
            key={room.id}
            checkAllAvailabilities={checkAllAvailabilities}
            setUncheckAllAvailabilities={setUncheckAllAvailabilities}
          />
        ))}
      </List>
      <RoomPagination count={numberOfPages} />
    </>
  );
}
