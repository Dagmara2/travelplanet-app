import { RoomProps } from "../api";
import { SortTypes } from "../components/views/roomList/Sorting";

export function sortRooms(data: RoomProps[], sortCriteria: SortTypes) {
  return [...(data ?? [])].sort((a, b) => {
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
}
