import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { workshopRoutes } from './routes/workshops';
import { reservationRoutes } from './routes/reservations';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI!)
  .then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.error('Erreur de connexion MongoDB:', err));

// Ajouter une route de base
app.get('/', (req, res) => {
  res.json({ message: "API de l'Atelier d'Écriture - Serveur fonctionnel" });
});

app.use('/api/workshops', workshopRoutes);
app.use('/api/reservations', reservationRoutes);

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
}); 