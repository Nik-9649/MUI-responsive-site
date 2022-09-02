import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Modal,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import {
  AddLocation,
  Comment,
  DateRange,
  EmojiEmotions,
  Image,
  MusicVideo,
  Sell,
} from "@mui/icons-material";

const Post = ({
  username,
  avatar,
  date,
  postMedia,
  postTitle,
  postContent,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card sx={{ margin: 1 }} elevation={5}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="n" src={avatar} />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={username}
          subheader={date}
        />
        <CardMedia
          component="img"
          height="20%"
          image={postMedia}
          alt={postTitle}
        />
        <CardContent>
          <CardHeader title={postTitle} />
          <Typography variant="body2" color="text.secondary">
            {postContent}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorderIcon />}
              checkedIcon={<FavoriteIcon />}
              sx={{ color: "red" }}
            />
          </IconButton>
          <IconButton aria-label="comment" onClick={e => setOpen(true)}>
            <Comment />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <StyledModal
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray">
            Reply to the post
          </Typography>
          <UserBox>
            <Avatar
              src="https://i.ibb.co/QdfccP8/bdobm8-10082022-0001.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              nik
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-multiline-static"
            label="Add a comment"
            multiline
            rows={4}
          />
          <Stack direction="row" gap={4} mt={2} mb={2}>
            <EmojiEmotions color="primary" sx={{ height: 40 }} />
            <Image color="secondary" sx={{ height: 40 }} />
            <MusicVideo color="success" sx={{ height: 40 }} />
            <Sell color="error" sx={{ height: 40 }} />
            <AddLocation color="warning" sx={{ height: 40 }} />
            <ButtonGroup
              sx={{ height: 40 }}
              variant="contained"
              aria-label="contained primary button group"
            >
              <Button>Post</Button>
              <Button>
                <DateRange />
              </Button>
            </ButtonGroup>
          </Stack>
        </Box>
      </StyledModal>
    </>
  );
};

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
  marginTop: "10px",
});

export default Post;
