export const user_logo =
  "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg";
export const netflix_logo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const bg_logo =
  "https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const API_options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTIxNWI5YmMyZjk5MWQ2ZGRhOTVhMTliYTBjZjVhYyIsInN1YiI6IjY2NWRmYzNiN2QyMjNhMzllY2U1NDczZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YJlxKOogmcs3MlwnHJy9zf7tNko1q3Om1Fbc7ArGJFE",
  },
};

export const image_url = "https://image.tmdb.org/t/p/w342/";

export const supported_lang = [
  {
    identifier: "en",
    name: "English",
  },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

  export const gemini_key = process.env.API_KEY;