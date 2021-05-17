<br />
<p align="center">
  <h3 align="center">The Shoppies</h3>
  <p align="center">
    Movie awards for entrepreneurs
    <br />
    <a href="https://github.com/nikolaybutnik/the-shoppies"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://nb-theshoppies.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/nikolaybutnik/the-shoppies/issues">Report Bug</a>
    ·
    <a href="https://github.com/nikolaybutnik/the-shoppies/issues">Request Feature</a>
</p>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

## About The Project

![The Shoppies Screenshot](https://github.com/nikolaybutnik/the-shoppies/blob/master/client/public/the-shoppies-screenshot-v3.png?raw=true)

Shopify has branched into movie award shows and needs a platform for managing movie nominations. The Shoppies is such platform! The Shoppies allows browsing thousands of movies, and nominating the best of the best. Nominate up to five movies and roll out the red carpet!

### Built With

The following technologies and libraries were used in the creation of The Shoppies:

- [React](https://reactjs.org/)
- [Sass](https://sass-lang.com/)
- [MongoDB](https://www.mongodb.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [OMDb API](https://www.omdbapi.com/)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)

### Installation

1. Get a free API Key at [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)
2. Clone the repo
   ```sh
   git clone https://github.com/nikolaybutnik/the-shoppies.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. In the root folder create a file called `.env`
5. Enter your API key in `.env`
   ```JS
   REACT_APP_OMDB_API_KEY='ENTER YOUR API KEY';
   ```
6. You're done! Start the application
   ```sh
   npm start
   ```
