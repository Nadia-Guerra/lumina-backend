import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import recommendationRoutes from './routes/recommendation.routes.js';
import userRoutes from "./routes/user.routes.ts";
import favouriteRoutes from "./routes/favourite.routes.ts";
// Load environment variables
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
// Middlewares
app.use(cors());
app.use(express.json());
// Routes
app.use('/api/recommendations', recommendationRoutes);
app.use('/api/users', userRoutes);
app.use('/api/favourites', favouriteRoutes);

// Base route for health check
app.get('/', (req, res) => {
    res.send('Lumina Backend API is running');
});
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map