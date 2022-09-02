import {
  Add,
  AddLocation,
  DateRange,
  EmojiEmotions,
  Image,
  MusicVideo,
  Sell,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

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

const AddPost = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={e => setOpen(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
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
            Create Post
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
            label="whats poppin'"
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

export default AddPost;
