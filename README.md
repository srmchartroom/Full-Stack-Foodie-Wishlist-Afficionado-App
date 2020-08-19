# Full-Stack-Foodie-Wishlist-Afficionado-App ![](https://img.shields.io/badge/-Node.js-blue) ![](https://img.shields.io/badge/-Express.js-blue) ![](https://img.shields.io/badge/-Handlebars.js-blue) ![](https://img.shields.io/badge/-ES6-red) ![](https://img.shields.io/badge/-HTML5-green) ![](https://img.shields.io/badge/-CSS3-green)

## Description

This app is a Node.js based, express.js server that operates off a MVC basis and leverages handlebars to serve HTML to a front-end user. Conceptually, this is a front-end web-based app that allows a user to enter their choice of specialty items to try and then keep track of what they tried after they try them. In game-like fashion the app allows the user to "eat" the item (Yum) or trash it (Yuck)and deposits the item in list to keep track of what's eaten. The application allows both previously eaten and being-eaten items to be updated with ratings and notes, and to add new items to their "wish list". Data between routes, the controller, the server, node, and the HTML defined via handlebars node package is securely stored and manipulated by node from a mySQL database. The application can be cloned or downloaded and run locally through localhost or deployed onto a web server and run from there. Bon apetit!

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Credits](#credits)

## Installation

1. Download or clone this project and save it to your machine.
2. From Bash, Terminal, or whichever CLI you use, navigate to the directory where you've saved the application files.
3. Install the package.json with `npm install` or simply `npm i`.
4. In the `/config/connection.js` file, update your `host` entry (e.g. if run locally, will likely be `localhost`), update your `username` entry (e.g. if run locally, will likely be `root`), and update the `password` entry (this will be your mySQL database password).
5. If running locally, start the application from the command line by typing `node server.js` or by installing `nodemon` node.js package, and then launch the application either from a remote server if you deploy there, or from localhost at `http://localhost:3000/`.
6. Start keeping track of your foodie wishlist items from your deployed location, add new items to your wishlist, Yuck or Yum them, and update eaten items with ratings and your own notes on the food.

## Usage

The below video provides an overview of the CLI README Generator, the code involved and how it works, as well as a demo of the generator in action.
[![CLICK TO SEE LARGER MP4 OF DEMO](https://www.chartroomcreative.com/gitassets/FULLSTACK-FOODIE-WISHLIST-APP.gif)](https://www.chartroomcreative.com/gitassets/FULLSTACK-FOODIE-WISHLIST-APP.mp4)

## License

Copyright (c) 2020 Sean McGinnis, Chart Room Creative LLC.

This project is provided under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

1. The above copyright notice and this permission notice shall be included in all
   copies or substantial portions of the Software.
2. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   SOFTWARE.

## Contributing

To contribute, please follow the [Contributor Covenant](https://www.contributor-covenant.org/).

## Tests

Be sure to test the application after installation and deploying it. No jest-based automated tests or otherwise have been developed for this particular application. But successful execution can be quickly confirmed by simply running the application in the browser (e.g. `localhost:3000`) after launching the application (e.g. `node server.js`) . To complete kicking off the server and launching the app, simply follow the 6 easy installation instructions above. Additional context and instruction can be reviewed in the video provided above under [usage](#usage).

## Questions

For questions, please contact [sean@chartroomcreative.com](mailto:sean@chartroomcreative.com).

See srmchartroom(https://github.com/srmchartroom) for additional repositories and contact information.

## Credits

This project was developed without additional collaborators/contributors. I did reference documentation on an ad hoc as needed basis on npm. The concept for the app was an original project through the Full Stack Web Development program through the University of North Carolina, but I've extended it to encompass greater functionality and branched outside the original concept. If you'd like to contribute to this project, or would like to see additional features or functionality, please see the [contributing](#contributing) section above, log suggestions for enhancements in repository issues, or simply reach out to me at the contact info provided above under the [questions](#questions) section .
