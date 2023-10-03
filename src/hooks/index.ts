import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {RootState} from "../modules";
import {AppDispatch} from "../modules";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;