import { styled } from "@mui/material";
import RoomList from "../roomList";

const StyledMain = styled("main")({
  padding: "1.25rem",
  maxWidth: "1600px",
  margin: "auto",
});

export default function Content() {
  return (
    <StyledMain>
      <RoomList />
    </StyledMain>
  );
}
