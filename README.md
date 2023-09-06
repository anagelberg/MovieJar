A demo of this application is deployed here: https://moviejarapp.netlify.app/ with limited utility as it doesn't currently have a login/authentication system. 

## Key features: 
- This app allows the organization and selection of movies. 
- The user can create jars to store groups of movies in based on their needs.
- The search bar allows search of TMDB for a selection of movies with that result. The desired result can then be selected and added to any number of jars the user desires. At this time, the user is also invited to select a vibe for the movie, to aid in future selection. 
- The movies and jars are displayed in a user friendly format. On desktop, hovering over a movie provides details about it. On mobile, this is replaced with a modal popup on user selection to display information about that movie. 
- The user can delete the jars and movies from those jars as they wish. 
- When watching a movie is desired, the user can go to the "Movie picker" tool, which allows filtering of the movies in their jars based on their preferences such as mood and run time. 
- The backend has been configured with 3 many-many relationships between users, jars, and movies, to allow for expansion in the future. Notably, users will be able to share jars so you could have them with your friends or key family members. 
- Fully mobile responsive with some limitations mentioned below. 


To run locally, first configure the server here with appropriate environment variables as per that repos instructions. Start the server. Server: 
https://github.com/anagelberg/MovieJar-server 

To start the front-end, clone this repo & then you'll need two environment variables in your .env file: 
```
REACT_APP_BASE_URL=<backend server url, ie https://localhost:8080/>
REACT_APP_TMDB_API_KEY=<key from TMDB>
```

Next, install dependencies and start the program. 
```
npm i
```
followed by 
```
npm start
```

## Key notable limitations. 
- No login
- The edit functionality is not yet added. 
- On mobile, the keyboard popup causes a change in viewport which ultimately closes the sidebar, making it impossible to add a new jar. 
This bug will be addressed in future releases. 
