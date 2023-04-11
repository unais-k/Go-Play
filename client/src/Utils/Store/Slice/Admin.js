import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    token: null,
};

export const AdminLoginSlice = createSlice({
    name: "adminLogin",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.name = action.payload.name;
            state.token = action.payload.token;
        },
        setLogout: (state, action) => {
            state.name = null;
            state.token = null;
        },
    },
});

export const { setLogin, setLogout } = AdminLoginSlice.actions;

export default AdminLoginSlice.reducer;
