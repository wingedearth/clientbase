import express from 'express';
import router from './router';

const port = process.env.PORT || 4000;
const app = express();

// Parsers for POST data
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: false, limit: '20mb' }));

// Error logger
app.on('error', (err) => {
  console.error(err?.message);
});

// Attach router
app.use(router);

// Start server
const server = app.listen(port, () => {
  console.log(`A half-elven warrior-mage has conjured a server at port, ${port}`);
});

process.once('SIGUSR2', () => {
  server.close(() => {
    process.kill(process.pid, 'SIGUSR2');
  });
});

process.on('SIGINT', () => {
  server.close((err) => {
    if (err) return process.exit(1);

    process.exit(0);
  });
});
