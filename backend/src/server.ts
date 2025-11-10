import { connectToDatabase } from './config/db';
import { handleUnhandledRejection, handleUncaughtException } from './middleware/errorHandler';
import { logger } from './utils/logger';
import app from './app';

handleUnhandledRejection();
handleUncaughtException();

connectToDatabase()
  .then(() => logger.info('Connected to database'))
  .catch((err) => logger.error('Database connection failed', err));

// ❗ DO NOT use app.listen() on Vercel
export default app;
