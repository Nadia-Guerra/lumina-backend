import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import recommendationRoutes from './routes/recommendation.routes.js';
// Load environment variables
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
// Middlewares
app.use(cors());
app.use(express.json());
// Routes
app.use('/api/recommendations', recommendationRoutes);
// Base route for health check
app.get('/', (req, res) => {
    res.send('Lumina Backend API is running');
});
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map