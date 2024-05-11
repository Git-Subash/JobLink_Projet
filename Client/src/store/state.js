import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isLogin: false,
  isLogout: true,
  isShowing: false,
  posts: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },

    setLogout: (state) => {
      state.user = null;
      state.token = null;
      state.isLogout = true;
    },

    setNetwok: (state, action) => {
      if (user.state) {
        state.user.network = action.payload.network;
      } else {
        console.error("friends does't exsit..  ");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPost = posts.map((post) => {
        if (post._id === action.payload.post_id) return action.payload.post;
        return post;
      });
      state.posts = updatedPost;
    },
    setIsShowing(state, action) {
      state.isShowing = action.payload;
    },
  },
});

export const {
  setLogin,
  setLogout,
  isLogin,
  isLogout,
  isShowing,
  setIsShowing,
  setNetwok,
  setPost,
  setPosts,
  setpageType,
} = authSlice.actions;
export default authSlice.reducer;
