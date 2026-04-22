import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import recommendationRoutes from './routes/recommendation.routes.js';
import favouriteRoutes from "./routes/favourite.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/recommendations', recommendationRoutes);
app.use('/api/favourites', favouriteRoutes);

app.get('/', (req, res) => {
  res.send('Lumina Backend API is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});