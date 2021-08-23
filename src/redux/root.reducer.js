import { combineReducers } from "redux";
import { signUpReducer } from "./signUp/signupReducer";
import { logInReducer } from "./logIn/loginReducer";

export const rootReducer = combineReducers({signUpReducer, logInReducer})