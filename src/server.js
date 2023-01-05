const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    // jika di deploy
    // host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',

    // di JSON nya
    // "start-prod": "NODE_ENV=production node ./src/server.js",
    // "start-dev": "nodemon ./src/server.js",

    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
