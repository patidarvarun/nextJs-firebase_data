import PropTypes from "prop-types";
import NextLink from "next/link";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Toolbar,
} from "@mui/material";
// import { Menu as MenuIcon } from "../icons/menu";
// import { Logo } from "./logo";

export const Header = (props) => {
  const { onOpenSidebar } = props;

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
        borderBottomColor: "divider",
        borderBottomStyle: "solid",
        borderBottomWidth: 1,
        color: "text.secondary",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 64 }}>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            color="inherit"
            // onClick={onOpenSidebar}
            sx={{
              display: {
                md: "none",
              },
            }}
          >
            {/* <MenuIcon fontSize="small" /> */}
          </IconButton>
          <Box
            sx={{
              alignItems: "center",
              display: {
                md: "flex",
                xs: "none",
              },
            }}
          >
            <NextLink href="/accountPage" passHref>
              <Link color="textSecondary" underline="none" variant="subtitle2">
                AccountPage
              </Link>
            </NextLink>{" "}
            &emsp;
            <NextLink href="/dashboard" passHref>
              <Link color="textSecondary" underline="none" variant="subtitle2">
                Live Demo
              </Link>
            </NextLink>
            <NextLink href="/browse" passHref>
              <Link
                color="textSecondary"
                sx={{ ml: 2 }}
                underline="none"
                variant="subtitle2"
              >
                Components
              </Link>
            </NextLink>
            <NextLink href="/docs/welcome" passHref>
              <Link
                color="textSecondary"
                component="a"
                sx={{ ml: 2 }}
                underline="none"
                variant="subtitle2"
              >
                Documentation
              </Link>
            </NextLink>{" "}
            &emsp;
            {/* <NextLink href="/login" passHref>
              <Link color="textSecondary" underline="none" variant="subtitle2">
                Login
              </Link>
            </NextLink>{" "} */}
            <Button
              component="a"
              href="/login"
              size="medium"
              sx={{ ml: 2 }}
              target="_blank"
              variant="contained"
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
