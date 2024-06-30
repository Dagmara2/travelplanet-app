import { List } from "@mui/material";
import { useGetRoomsQuery } from "../../../api";
import Room from "../room";
import Loading from "../../ui/loading";
import { useEffect, useMemo, useState } from "react";
import { SortTypes } from "./Sorting";
import RoomListActions from "./RoomListActions";
import ErrorMessage from "../../ui/errorMessage";
import RoomPagination from "./RoomPagination";
import { sortRooms } from "../../../utils/sortRooms";
import { pagination } from "../../../utils/pagination";

const ITEMS_PER_PAGE = 4;

export default function RoomList() {
  const { data, isLoading, error, refetch } = useGetRoomsQuery();
  const [sortCriteria, setSortCriteria] = useState<SortTypes>("nameAZ");
  const [checkAllAvailabilities, setCheckAllAvailabilities] = useState(false);
  const [uncheckAllAvailabilities, setUncheckAllAvailabilities] =
    useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (uncheckAllAvailabilities) setCheckAllAvailabilities(false);
  }, [uncheckAllAvailabilities]);

  const handleCheckAllAvailabilities = (val: boolean) => {
    setCheckAllAvailabilities(val);
    if (val) setUncheckAllAvailabilities(false);
  };

  const sortedRooms = useMemo(
    () => sortRooms(data || [], sortCriteria),
    [data, sortCriteria]
  );

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage onTryAgainClick={refetch} />;

  const numberOfPages = Math.ceil(sortedRooms.length / 4);
  const paginatedRooms = pagination(sortedRooms, currentPage, ITEMS_PER_PAGE);
  return (
    <>
      <RoomListActions
        sortCriteria={sortCriteria}
        setSortCriteria={setSortCriteria}
        checkAllAvailabilities={checkAllAvailabilities}
        setCheckAllAvailabilities={handleCheckAllAvailabilities}
      />
      <List>
        {paginatedRooms.map((room) => (
          <Room
            room={room}
            key={room.id}
            checkAllAvailabilities={checkAllAvailabilities}
            setUncheckAllAvailabilities={setUncheckAllAvailabilities}
          />
        ))}
      </List>
      <RoomPagination
        count={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
