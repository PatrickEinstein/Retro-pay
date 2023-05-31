import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar, IconButton, Stack } from "@mui/material";
import { faker } from "@faker-js/faker";
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  Dashboard,
  Security,
  SupportAgentOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import PublicIcon from "@mui/icons-material/Public";

export default function Cupboard() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  const list = () => (
    <Box onClick={toggleDrawer(true)} onKeyDown={toggleDrawer(false)}>
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{
          paddingTop: 5,
        }}
      >
        <Avatar
          alt="Profile"
          src={faker.image.avatar()}
          sx={{ width: 20, height: 20 }}
        />
        {faker.name.firstName()}
        <IconButton>
          <PublicIcon />
        </IconButton>
      </Stack>
      <List>
        {[
          { text: "Dashboard", icon: <Dashboard /> },
          { text: "Security", icon: <Security /> },
          { text: "Help & Support", icon: <SupportAgentOutlined /> },
          { text: "Log out", icon: <LogoutOutlined /> },
        ].map(({ text, icon }, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  color: "white",
                }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Stack direction="row">
        <Button
          onClick={toggleDrawer(true)}
          sx={{
            marginLeft: state ? 20 : 0,
          }}
        >
          {state ? (
            <IconButton
              sx={{
                backgroundColor: "white",
                borderRadius: 0,
                width: 100,
                position: "absolute",
                top: 250,
                left: 40,
              }}
            >
              <KeyboardDoubleArrowLeft />
            </IconButton>
          ) : (
            <IconButton
              sx={{
                backgroundColor: "white",
                borderRadius: 0,
                width: 100,
              }}
            >
              <KeyboardDoubleArrowRight
                sx={{
                  color: "blue",
                }}
              />
            </IconButton>
          )}
        </Button>
        <Drawer
          anchor={"left"}
          open={state}
          onClose={toggleDrawer(false)}
          sx={{
            "& .MuiDrawer-paper": {
              background: "linear-gradient(to bottom, black, purple, red)",

              color: "white",
              opacity: 0.8,
            },
          }}
        >
          {list()}
        </Drawer>
      </Stack>
    </div>
  );
}
