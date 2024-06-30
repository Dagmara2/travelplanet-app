import { Pagination, styled } from "@mui/material";

interface Props {
  count: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const StyledPagination = styled(Pagination)({
  ".MuiPagination-ul": {
    justifyContent: "center",
  },
});

export default function RoomPagination({
  count,
  currentPage,
  setCurrentPage,
}: Props) {
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };
  return (
    <StyledPagination
      count={count}
      page={currentPage}
      onChange={handlePageChange}
    />
  );
}
