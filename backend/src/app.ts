import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import projectRoutes from './routes/projectRoutes';
import authRoutes from './routes/authRoutes';
import authMiddleware from './middlewares/authMiddleware';
import { adminMiddleware } from './middlewares/authMiddleware';
import errorHandler from './middlewares/errorHandler';

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Project Management System API');
});

// Authentication routes
app.use('/api/auth', authRoutes);

// Use the authentication middleware for protected routes
app.use('/api/users', authMiddleware, userRoutes);
app.use('/api/projects', authMiddleware, projectRoutes);

// Use the admin middleware for protected admin routes
app.post('/api/projects/assign', authMiddleware, adminMiddleware);

// Use the error handling middleware
app.use(errorHandler);

export default app;
