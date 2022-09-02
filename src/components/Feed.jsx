import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={4} p={1}>
      <Post
        username="nik"
        avatar="https://i.ibb.co/QdfccP8/bdobm8-10082022-0001.jpg"
        date="Aug 14, 2022"
        postMedia="https://cdnb.artstation.com/p/assets/images/images/051/247/745/4k/wlop-33se.jpg?1656829473"
        postTitle="If Only"
        postContent={`"If Only" is a digital artwork created by Chinese artist Wlop. The
          piece features a young guy and a girl standing against each other's
          back with eyes slightly opened. This painting is a representation of
          the duality of life. The two people in the painting are facing away
          from each other, but their eyes are open just enough to suggest that
          they are aware of each other's presence. The guy is looking up at the
          sky with a sad expression on his face, as if he is longing for
          something that he can never have. The different appearence represent
          the different paths they could take in life. However, despite the
          different paths they may take, the same backdrops behind them shows
          are still connected to each other through their shared experience of
          life. Despite its simplicity, "If Only" is a very powerful and emotive
          piece of art. Their longing expression captures the feeling of longing
          and nostalgia that many of us feel at times in our lives. The artwork
          reminds us that even though we may not always get what we want, we
          should still appreciate the beauty that surrounds us.`}
      />
      <Post
        username="nik"
        avatar="https://i.ibb.co/QdfccP8/bdobm8-10082022-0001.jpg"
        date="Aug 10, 2022"
        postTitle="Salvation"
        postMedia="https://cdna.artstation.com/p/assets/images/images/033/999/712/4k/wlop-42se.jpg?1611135777"
      />
      <Post
        username="nik"
        avatar="https://i.ibb.co/QdfccP8/bdobm8-10082022-0001.jpg"
        date="Aug 3, 2022"
        postTitle={`Love,Deaths & Robots : JIBARO`}
        postMedia="https://cdna.artstation.com/p/assets/images/images/050/915/700/4k/mariano-tazzioli-jibaro-01-jpg.jpg?1655995705"
      />
      <Post
        username="nik"
        avatar="https://i.ibb.co/QdfccP8/bdobm8-10082022-0001.jpg"
        date="Aug 1, 2022"
        postTitle="summer skeletons"
        postMedia="https://cdna.artstation.com/p/assets/images/images/015/484/762/large/aliya-chen-50732354-411685879572157-7384258854499909632-n.jpg?1548523493"
      />
      <Post
        username="nik"
        avatar="https://i.ibb.co/QdfccP8/bdobm8-10082022-0001.jpg"
        date="Aug 1, 2022"
        postTitle="Sunshine 2 Wlop Fan art"
        postMedia="https://cdna.artstation.com/p/assets/images/images/047/896/288/large/zhang-hao-9.jpg?1648704102"
      />
      <Post
        username="nik"
        avatar="https://i.ibb.co/QdfccP8/bdobm8-10082022-0001.jpg"
        date="Jul 24, 2022"
        postTitle="WLOP - Aeolian 3D FanArt"
        postMedia="https://cdna.artstation.com/p/assets/images/images/018/633/444/large/lee-gh-4-1.jpg?1560139170"
      />
    </Box>
  );
};

export default Feed;
