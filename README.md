This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Create a React Application (step 1 - 7)

    By the end of this assessment, you will be ready to start building your website. This section walks you through the process of setting up the directory structure and adding CSS presets.To achieve this, you will create a boilerplate react app, remove unused files, and add reset.css, Google font links, and an updated favicon.

### Create Static Components (step 8 - 28)

    In this assessment, you will create a JavaScript file and a CSS file for each of six components in the Jammming app. In the steps below, we will link to the raw HTML and CSS to help you write the JSX for each component.In the HTML, we use comments to indicate where the JSX for one component renders another component.The HTML and CSS for each of the six components are listed below:

      * App — HTML and CSS
      * SearchBar — HTML and CSS
      * SearchResults — HTML and CSS
      * Playlist — HTML and CSS
      * TrackList — HTML and CSS
      * Track — HTML and CSS

    1. step 27.3 Create a method called renderAction that displays a - anchor tag if the isRemoval property is true, and a + anchor tag if the isRemoval property is false. Set the class name to Track-action

### Pass Down Search Result and Render Result List(step 29 -35)

    In this assessment, you will pass the state of a search results parameter through a series of components to render an array of tracks.

    When a user requests data from Spotify, the JSON response will include a set of song tracks. Each track will contain a field for name, artist, and album. For each track in the results list, your Jammming web app will display the song name, artist, and album.

    In a later assessment, you will build a method that sets the state of the search results parameter to a response from the Spotify API.

### Pass Down Playlist to Tracklist (step 36 - 39)

    In this assessment, you will pass the state of a user's custom playlist title and tracks from the App component down to components that render them.

    When a user adds songs from the search results list to their playlist, a method will update the state of a playlist parameter in App.js, and Jammming will render the song in the user's playlist.

    In a later assessment, you will write methods that add and remove songs from the playlist. You will also write a method that updates the playlist's title

### Add Tracks to a Playlist (step 40 - 47)

    In this assessment, you will implement a process for adding a song from the search results track list to the user's custom playlist.

    You will add a method to App.js called addTrack that adds a song to the playlist state. The application passes the method through a series of components to Track. The user can trigger the .addTrack() method by clicking the + sign from the search results list.

### Remove Tracks from Playlist(step 48 - 55)

    In this assessment, you will implement a process that removes a song from a user's custom playlist when the user selects the - sign inside of a rendered track.

### change the Name of a Playlist(step 56 - 61)

    In this assessment, you will implement code that allows a learner to change the name of their playlist, and save the updated value to the App component's state.

### Create a Method that saves the Playlist to a User's Account (step 62 - 65)

    In this assessment, you will create a method that will save a user's playlist to their Spotify account and resets the state of the playlist name and tracks array.

    To accomplish the goal of this assessment, you will need to access a track property named uri. Spotify uses this field to reference tracks in the Spotify library. You will create an array containing the uri of each track in the playlistTracks property.

    In a later assessment, you will pass the playlist name and the array of uris to a Spotify-linked method that writes the tracks in playlistTracks to a user's account.

### Hook up Search Bar to Spotify Search(step 66 - 73)

    In this assessment, you will create a method that updates the searchResults parameter in the App component with a user's search results. You will write the logic that allows a user to enter a search parameter, receives a response from the Spotify API, and updates the searchResults state with the results from a Spotify request.

    In a later assessment, you will hook the .search() method up to the Spotify API.

### Obtain a Spotify Access Token(step 74 - 83)

    In the next few assessments, you will write three methods that accomplish the following:

    Get a Spotify user's access token
    Send a search request to the Spotify API
    Save a user's playlist to their Spotify account.
    Before you begin, you will need to create an empty JavaScript module called Spotify located in src/util/Spotify.js.

    In this assessment, you will register a Spotify application and create a method called getAccessToken in the Spotify module. The method will get a user's access token so that they can make requests to the Spotify API.

    Use the Spotify Applications Registration Flow and Spotify Authentication guide to help you write the method.

### Implement Spotify Search Request (step 84 - 88)

    In this assessment, you will create a method in Spotify.js that accepts a search term input, passes the search term value to a Spotify request, then returns the response as a list of tracks in JSON format.

    You will need the user's access token to make requests to the Spotify API. You will use the request parameters in step four of the implicit grant flow to make requests. In the following steps, we will use fetch() to make our requests, but any method will work.

    You should use the /v1/search?type=TRACK endpoint when making your request. Use the Spofity Web API Endpoint Reference to help format your request.

### Save a User's Playlist (step 89 - 95)

    In this assessment, you will create a method called savePlaylist that writes the learner's custom playlist in Jammming to their Spotify account.

    The .savePlaylist() method accepts a playlist name and an array of track URIs. It makes the following three requests to the Spotify API:

    GET current user's ID
    POST a new playlist with the input name to the current user's Spotify account. Receive the playlist ID back from the request.
    POST the track URIs to the newly-created playlist, referencing the current user's account (ID) and the new playlist (ID)
    You will update the .savePlaylist() method in App.js to use the new Spotify.savePlaylist() method.

### Deploy(optiontal) (step 96 - 99)

    In this assessment, you will use surge to deploy your Jammming project.

    You will start by installing surge globally.

    In your console, run npm install --global surge.
