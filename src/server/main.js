import Fastify from 'fastify';

export const init = async () => {
  const server = Fastify({
    logger: true,
  });

  return server;
};

export const teardown = async () => {
  console.log('Teardown server process...');
};
