import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./redux/store";

export const UseAppDispatch = () => useDispatch<AppDispatch>
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector