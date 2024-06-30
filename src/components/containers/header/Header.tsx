import { Box, Typography, styled } from "@mui/material";

const StyledHeader = styled(Box)({
  padding: "1.25rem",
});

export default function Header() {
  return (
    <StyledHeader component="header">
      <Typography variant="h1" textAlign="center" fontSize="3.5rem">
        Travelplanet
      </Typography>
    </StyledHeader>
  );
}
