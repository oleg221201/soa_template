import { start } from './app.js';

try {
  const { teardown } = await start();
  process.on('SIGINT', async () => {
    await teardown();
    process.exit(0);
  });
} catch (err) {
  // eslint-disable-next-line no-console
  console.log(err);
  process.exit(1);
}
