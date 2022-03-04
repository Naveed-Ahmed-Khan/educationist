import { configureStore } from "@reduxjs/toolkit";
import parentReducer from "./parentSlice";

export default configureStore({ reducer: { parent: parentReducer } });
