import { init as initServer, teardown as teardownServer } from './server/main.js';

export const start = async () => {
  const server = await initServer();

  await server.listen({ host: '0.0.0.0', port: 3000 });

  return {
    teardown: async () => {
      await teardownServer();
    },
  };
};
