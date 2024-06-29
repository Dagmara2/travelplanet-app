import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.REACT_APP_API_URI;

interface PriceProps {
  value: number;
  currencyCode: string;
}

export interface RoomProps {
  id: string;
  name: string;
  price: PriceProps;
}

export type AvailabilityStatus =
  | "available"
  | "onRequest"
  | "soldout"
  | "error";

export interface RoomAvailabilityProps {
  availabilityStatus: AvailabilityStatus;
  price: PriceProps;
}

export const roomsApi = createApi({
  reducerPath: "roomsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getRooms: builder.query<RoomProps[], void>({
      query: () => `/rooms`,
    }),
    getRoomById: builder.query<RoomAvailabilityProps, string>({
      query: (id) => `/room/${id}`,
    }),
  }),
});

export const { useGetRoomsQuery, useGetRoomByIdQuery } = roomsApi;
