const appTitle = 'Clientbase';
const pageTitle = 'Home';
const welcomeText = `Welcome to ${pageTitle} page on the ${appTitle} server.`;

/**
 * @function HomeController
 * @requires Express.js
 * @param {Object} req - request
 * @param {Object} res - response
 */
const HomeController = (req, res) => {
  res.send(welcomeText);
};

export default HomeController;
