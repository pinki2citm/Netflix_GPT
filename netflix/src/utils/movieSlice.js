import { createSlice } from "@reduxjs/toolkit";

const movieSlice =createSlice ({
    name: 'movies',
    initialState: {
        NowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        upcomingMovies:null,
        TopRatedMovies:null,
    },
reducers:{
    addNowPlayingMovies : (state,action)=>{
        state.NowPlayingMovies = action.payload;
    },
    addTrailerVideo : (state,action) =>{
        state.trailerVideo = action.payload;
    },
    addPopularMovies : (state,action)=>{
        state.popularMovies = action.payload;
    },
    addUpcomingMovies : (state,action)=>{
        state.upcomingMovies = action.payload;
    },
    addTopRatedMovies : (state,action)=>{
        state.TopRatedMovies = action.payload;
    },
}
});
export const {addNowPlayingMovies,addTopRatedMovies,addTrailerVideo, addPopularMovies, addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;

