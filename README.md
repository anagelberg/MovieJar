# MovieJar: Movie Organization and Selection Tool

## 📖 Table of Contents

- [Introduction](#star-introduction)
- [Project Goals and Features](#dart-project-goals-and-features)
- [Technical Implementation](#computer-technical-implementation)
- [Demonstration](#clapper-demonstration)
- [Installation Instructions](#hammer-installation-instructions)
- [Key Learnings](#seedling-key-learnings)
- [Upcoming Updates](#rocket-upcoming-updates)
- [References](#books-references)

## :star: Introduction

MovieJar is a project that originated as my capstone project during my Web Development bootcamp at BrainStation, which I am continuously developing further. This project addresses the common challenge of selecting a movie to watch from a vast list of choices. Movies are organized into "Jars" and can be selected based on mood and runtime preferences, simplifying the decision-making process.

## :dart: Project Goals and Features

- MovieJar allows users to organize and select movies by creating customized jars to store groups of movies based on their preferences.
- A search bar is provided for users to search for movies on TMDB (The Movie Database). Users can select desired results and add them to any number of jars, along with specifying a mood to assist with future selections.
- Movies and jars are displayed in a user-friendly format. On desktop, hovering over a movie provides details, while on mobile, a modal popup displays information upon user selection.
- Users have the flexibility to delete jars and movies as needed.
- The "Movie Picker" tool helps users filter movies in their jars based on preferences such as mood and runtime.
- The backend of MovieJar is configured with three many-many relationships between users, jars, and movies, enabling future expansion and sharing of jars among friends and family members.
- The app is fully responsive for both mobile and desktop use.
- The MVP (Minimum Viable Product) is fully functional, including secure authentication through Google oAuth. Feel free to try it out!

## :computer: Technical Implementation

- Front-end development is powered by React.js and SCSS, with custom styling without relying on design libraries.
- Movie data is retrieved from TMDB.
- On the backend, Express.js is used for the API.
- Authentication is implemented using Google oAuth 2.0 and Passport.js, with session management through Redis.
- Database management is handled with MySQL2 and Knex.js.
- Deployment is achieved through Heroku for the backend and Netlify for the frontend, with DNS management via Netlify.

## :clapper: Demonstration

You can experience MovieJar in action through the following options:

- The main build is accessible at [https://moviejar.ca](https://moviejar.ca).

- If you'd like to explore a demo without the need to sign up using your Google account, you can visit [https://demo.moviejar.ca](https://demo.moviejar.ca).

## :hammer: Installation Instructions

To run MovieJar locally, follow these steps:

1. Configure the server by following the instructions provided in the [backend repository](https://github.com/anagelberg/MovieJar-server). Start the server.

2. Clone this repository.

3. Create a `.env` file in the project directory and add the following environment variables:

```
REACT_APP_BASE_URL=<backend server url, ie https://localhost:8080/>
REACT_APP_TMDB_API_KEY=<key from TMDB>
```

4. Install dependencies `npm i` and start project with `npm start`

## :seedling: Key Learnings (so far!)

Throughout the development of MovieJar, I have gained valuable insights and experiences:

- Implementing authentication in the project was a significant learning opportunity, as it introduced complexities that I initially underestimated. However, I thoroughly enjoyed the challenge and ended up refactoring the code to improve its robustness.

- This project has taught me about scoping and realistic sprint planning, helping me understand how to manage project growth effectively.

- I've recognized the importance of testing and am actively learning and applying the Jest Testing Framework to enhance the application's reliability and scalability in future releases.

## :rocket: Upcoming Updates

MovieJar is continuously evolving, and I have several exciting updates in the pipeline:

- Integration of edit functionality for user data.

- Implementation of the ability to share jars with friends and make movie recommendations.

- Exploring the integration of external APIs that allow filtering movies based on viewing platforms (e.g., Netflix).

## :books: References

- TMDB (The Movie Database) was used as a data source for this application.

- Icons used in the project were sourced from icon8 and flaticon.com, created by artists Nguyen Hoang Nam and others.

Thank you for exploring MovieJar! Feel free to reach out with any questions or feedback.
