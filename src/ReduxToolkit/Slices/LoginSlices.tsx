import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ILocalStorageData } from "../../Interface/Interface";

interface IProps {
  userData: ILocalStorageData[];
}

const initialState: IProps = {
  userData: [],
};

export const LoginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<ILocalStorageData[]>) => {
      state.userData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserData } = LoginSlice?.actions;
export const getUserData = (state: any) => state.loginSlice.userData;

export default LoginSlice.reducer;
