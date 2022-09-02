import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Divider,
  InputBase,
  ListItemIcon,
  Menu,
  MenuItem,
  styled,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import React, { useState } from "react";
import {
  AccountCircle,
  Logout,
  Mail,
  PersonAdd,
  SearchOutlined,
  Settings,
} from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          melatonin
        </Typography>
        <DarkModeOutlinedIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search sx={{ bgcolor: "background.default", color: "text.primary" }}>
          <Box sx={{ display: "flex", alignItems: "flex-end", height: "50px" }}>
            <SearchOutlined sx={{ mr: 1, mb: 1 }} />
            <TextField
              sx={{
                height: "40px",
                color: "text.primary",
                mt: 1,
                mb: 1,
              }}
              id="input-with-sx"
              fullWidth={true}
              label="search"
              variant="standard"
            />
          </Box>
        </Search>
        <IconContainer>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={16} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://i.ibb.co/QdfccP8/bdobm8-10082022-0001.jpg"
            onClick={e => setOpen(true)}
          />
        </IconContainer>
        <UserBox onClick={e => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://i.ibb.co/QdfccP8/bdobm8-10082022-0001.jpg"
          />
          <Typography variant="span">nik</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        <MenuItem>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://i.ibb.co/QdfccP8/bdobm8-10082022-0001.jpg"
          />{" "}
          Profile
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
