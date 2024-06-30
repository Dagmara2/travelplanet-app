import { Box, styled } from "@mui/material";
import RoomList from "../../views/roomList";

const StyledMain = styled(Box)({
  padding: "1.25rem",
  maxWidth: "1600px",
  margin: "auto",
});

export default function Content() {
  return (
    <StyledMain component="main">
      <RoomList />
    </StyledMain>
  );
}
