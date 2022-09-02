import {
  Box,
  Typography,
  AvatarGroup,
  Avatar,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  ListSubheader,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  styled,
} from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
  marginTop: "10px",
});

const RightBar = () => {
  return (
    <Box
      flex={3}
      p={1}
      sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
    >
      <Box>
        <Box paddingRight={28}>
          <Typography variant="h6" fontWeight={100}>
            Online Artists
          </Typography>
          <AvatarGroup max={6}>
            <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?img=43" />
            <Avatar
              alt="Travis Howard"
              src="https://i.pravatar.cc/150?img=34"
            />
            <Avatar alt="Cindy Baker" src="https://i.pravatar.cc/150?img=67" />
            <Avatar alt="Agnes Walker" src="https://i.pravatar.cc/150?img=52" />
            <Avatar
              alt="Trevor Henderson"
              src="https://i.pravatar.cc/150?img=12"
            />
            <Avatar alt="Trevor Luc" src="https://i.pravatar.cc/150?img=46" />
            <Avatar alt="Trevor Luc" src="https://i.pravatar.cc/150?img=11" />
            <Avatar alt="Trevor Luc" src="https://i.pravatar.cc/150?img=2" />
            <Avatar alt="Trevor Luc" src="https://i.pravatar.cc/150?img=10" />
            <Avatar alt="Trevor Luc" src="https://i.pravatar.cc/150?img=21" />
          </AvatarGroup>
        </Box>
        <Box>
          <Typography variant="h6" fontWeight={100} mt={1}>
            Last Conversations
          </Typography>
          <List
            sx={{
              width: "100%",
              maxWidth: 445,
              maxHeight: 150,
              bgcolor: "background.paper",
              position: "relative",
              overflow: "auto",
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.pravatar.cc/150?img=43"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Sandra Adams"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Brunch this weekend?
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src="https://i.pravatar.cc/150?img=12"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Scott Alex"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Summer BBQ
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Cindy Baker"
                  src="https://i.pravatar.cc/150?img=67"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Ali Connors"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Oui Oui
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
          <ImageList>
            <ImageListItem key="Subheader" cols={2}>
              <ListSubheader component="div">Gallery</ListSubheader>
            </ImageListItem>
          </ImageList>
          <ImageList
            cols={2}
            rowHeight={220}
            gap={5}
            sx={{ width: 445, height: 440 }}
          >
            {itemData.map(item => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=1080&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=1080&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={<span>by: {item.author}</span>}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </Box>
  );
};

const itemData = [
  {
    img: "https://cdna.artstation.com/p/assets/images/images/033/999/712/4k/wlop-42se.jpg?1611135777",
    title: "Salvation",
    author: "@wlop",
  },
  {
    img: "https://cdna.artstation.com/p/assets/images/images/050/915/700/4k/mariano-tazzioli-jibaro-01-jpg.jpg?1655995705",
    title: "Love,Deaths & Robots : JIBARO",
    author: "@mtazzioli96",
  },
  {
    img: "https://cdna.artstation.com/p/assets/images/images/015/484/762/large/aliya-chen-50732354-411685879572157-7384258854499909632-n.jpg?1548523493",
    title: "summer skeletons",
    author: "@aliyachen",
  },
  {
    img: "https://cdna.artstation.com/p/assets/images/images/047/896/288/large/zhang-hao-9.jpg?1648704102",
    title: "Sunshine 2 Wlop Fan art",
    author: "@zhh1021",
  },
  {
    img: "https://cdna.artstation.com/p/assets/images/images/018/633/444/large/lee-gh-4-1.jpg?1560139170",
    title: "WLOP - Aeolian 3D FanArt",
    author: "@maja0018",
  },
  {
    img: "https://cdnb.artstation.com/p/assets/images/images/021/089/261/large/lee-gh-2.jpg?1570494030",
    title: "Bella",
    author: "@maja0018",
  },
];

export default RightBar;
