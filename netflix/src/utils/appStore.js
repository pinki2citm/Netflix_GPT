import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import moviesReducer from "./movieSlice";
import GptReducer from "./gptSlice";  
import ConfigReducer  from "./ConfigSlice";

const appStore = configureStore({
    reducer: {
        user: UserReducer,
        movies: moviesReducer,
        gpt: GptReducer,
        config:ConfigReducer,
    }
});

export default appStore;
