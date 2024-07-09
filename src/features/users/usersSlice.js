import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Alice Johnson",
  },
  {
    id: 2,
    name: "Bob Smith",
  },
  {
    id: 3,
    name: "Charlie Brown",
  },
];

const usersSlice = createSlice({
  initialState,
  name: "users",
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
