import serialize from 'serialize-javascript';

/**
 * @function template
 * @param {Object} data
 * @param {String} markup
 * @param {String} entryName
 * @returns {String} html markup
 */
const template = (data, markup) => {
  const { appTitle, pageTitle } = data;

  return `
	<!DOCTYPE html>
		<html>
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1">
				<title>${`${appTitle} - ${pageTitle}`}</title>
				<link rel="preconnect" href="https://fonts.gstatic.com"> 
				<link href="https://fonts.googleapis.com/css2?family=Exo:wght@500;600;700;800&display=swap" rel="stylesheet">
			</head>
			<body>
				<div id="root">${markup}</div>
				<script>window.__INITIAL_STATE__ = ${serialize(data)}</script>
			</body>
		</html>`;
};

export default template;
