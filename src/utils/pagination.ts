import { RoomProps } from "../api";

export function pagination(
  data: RoomProps[],
  page: number,
  itemsPerPage: number
) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return data.slice(startIndex, endIndex);
}
