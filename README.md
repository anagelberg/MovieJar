A demo of this application is deployed here: https://moviejarapp.netlify.app/ with limited utility as it doesn't currently have a login/authentication system. 

## Key features: 
- This app allows the organization and selection of movies. Users can create jars to store groups of movies based on their needs.
  
  <img width="600" alt="Screenshot 2023-09-05 220306" src="https://github.com/anagelberg/MovieJar/assets/62032317/eeb267f5-f9d0-42bc-9bd3-ddadefde55c9">

- The search bar allows search of TMDB for a selection of movies with that result. The desired result can then be selected and added to any number of jars the user desires. At this time, the user is also invited to select a vibe for the movie, to aid in future selection.
  
  <img width="600" alt="Screenshot 2023-09-05 220529" src="https://github.com/anagelberg/MovieJar/assets/62032317/42864ec2-a59d-41ee-ad04-6050cf0d57af">

- The movies and jars are displayed in a user friendly format. On desktop, hovering over a movie provides details about it. On mobile, this is replaced with a modal popup on user selection to display information about that movie.
  
  <img width="600" alt="Screenshot 2023-09-05 235016" src="https://github.com/anagelberg/MovieJar/assets/62032317/dbe2144c-70c8-4495-b69f-d2e3614b2917"><img width="170" alt="Screenshot 2023-09-05 235036" src="https://github.com/anagelberg/MovieJar/assets/62032317/6b6ca17b-35a5-4612-991d-9f0211efaccc">

  
- The user can delete the jars and movies from those jars as they wish.
  
  <img width="600" alt="Screenshot 2023-09-05 220607" src="https://github.com/anagelberg/MovieJar/assets/62032317/78485e29-aaaf-49b8-abe1-71d3bf65650f">

- When watching a movie is desired, the user can go to the "Movie picker" tool, which allows filtering of the movies in their jars based on their preferences such as mood and run time.
  
  <img width="600" alt="Screenshot 2023-09-05 220240" src="https://github.com/anagelberg/MovieJar/assets/62032317/3d9bef48-2429-4279-b7ff-ad444c18f73d">

- [The backend](https://github.com/anagelberg/MovieJar-server) has been configured with 3 many-many relationships between users, jars, and movies, to allow for expansion in the future. Notably, users will be able to share jars so you could have them with your friends or key family members.
  
- The app is fully mobile/desktop responsive with some limitations mentioned below.
  
  <img width="170" alt="Screenshot 2023-09-05 220827" src="https://github.com/anagelberg/MovieJar/assets/62032317/850af3e2-833e-429e-8c4a-a51195a4a0cd">



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
