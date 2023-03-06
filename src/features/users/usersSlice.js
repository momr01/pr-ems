import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterBtn: {
    all: 0,
  },
  filterActive: "all",
  searchUser: "",
  pagination: {
    itemsPerPage: [0, 1],
    page: 1,
    total: 0,
  },
  dataFiltered: [],
};

const usersSlice = createSlice({
  initialState,
  name: "users",
  reducers: {
    setFilterBtn: (state, action) => {
      state.filterBtn[action.payload.name] = action.payload.value;
    },
    setFilterActive: (state, action) => {
      state.filterActive = action.payload;
    },
    setSearchUser: (state, action) => {
      state.searchUser = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination[action.payload.name] = action.payload.value;
    },
    setDataFiltered: (state, action) => {
      state.dataFiltered = action.payload;
    },
  },
});

export const {
  setFilterBtn,
  setFilterActive,
  setSearchUser,
  setPagination,
  setDataFiltered,
} = usersSlice.actions;

export const selectFilterBtn = (state) => state.users.filterBtn;
export const selectFilterActive = (state) => state.users.filterActive;
export const selectSearchUser = (state) => state.users.searchUser;
export const selectPagination = (state) => state.users.pagination;
export const selectDataFiltered = (state) => state.users.dataFiltered;

export default usersSlice.reducer;
