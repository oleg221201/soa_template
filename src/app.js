import Fastify from 'fastify';

export const start = async () => {
  const fastify = Fastify({
    logger: true,
  });

  fastify.get('/', async function handler(request, reply) {
    return { hello: 'world' };
  });

  await fastify.listen({ port: 3000 });

  const teardownServer = async () => {
    console.log('Teardown server process...');
  };

  return {
    teardown: async () => {
      await teardownServer();
    },
  };
};
