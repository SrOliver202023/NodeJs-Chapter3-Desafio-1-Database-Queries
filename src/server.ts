import express from 'express';
import { routes } from './routes/index';
const app = express();
const PORT = 3333;

app.use(routes);

app.listen(PORT, () => console.log(`Server is running in http://localhost:${PORT}`));