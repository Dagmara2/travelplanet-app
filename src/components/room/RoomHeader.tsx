import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  name: string;
  price: string | ReactNode;
}
export default function RoomHeader({ name, price }: Props) {
  return (
    <>
      <Typography variant="h6">{name}</Typography>
      <Typography variant="subtitle1">{price}</Typography>
    </>
  );
}
