# Spotifynd

Simple React + Redux application, which lets you search tracks and see track
details, using the Spotify API.

*This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).*

## Running the Application
### Downloading the source code
```sh
git clone https://github.com/santiaro90/spotify-search
```

### Adding Keys Required by the Spotify API
Open the `server/.env` file in your editor, then add valid keys for `CLIENT_ID`
and `CLIENT_SECRET`. Check out [this
tutorial](https://developer.spotify.com/web-api/tutorial/) to see how you can
get a key pair.

### Installing and Starting Servers
```sh
npm install
npm start    # this will start both the client and the api servers
```
*A browser tab will get open on `http://localhost` (by default on port `3000`),
so you can navigate the application.*

*The api server runs in `http://localhost:9000` by default. You can change the
port number by editing the `server/.env` file. Also, check out the
`API_BASE_URL` in `src/api/urls.ts` and make sure it points correctly to your
local server.*

### Running tests
```
npm test    # tests get run in watch mode
```
