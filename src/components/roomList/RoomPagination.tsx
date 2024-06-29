import { Pagination, styled } from "@mui/material";

interface Props {
  count: number;
}

const StyledPagination = styled(Pagination)({
  ".MuiPagination-ul": {
    justifyContent: "center",
  },
});

export default function RoomPagination({ count }: Props) {
  return <StyledPagination count={count} />;
}
