import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import recommendationRoutes from './routes/recommendation.routes.js';
import authRoutes from "./routes/auth.route.js";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    console.log('Body:', req.body);
    next();
});
app.use('/api/auth', authRoutes);
app.use('/api/recommendations', recommendationRoutes);
app.get('/', (req, res) => {
    res.send('Lumina Backend API is running');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map