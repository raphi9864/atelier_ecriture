import express from 'express';
import { Workshop } from '../models/Workshop';

const router = express.Router();

// Récupérer tous les ateliers
router.get('/', async (req, res) => {
  try {
    const workshops = await Workshop.find();
    res.json(workshops);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des ateliers" });
  }
});

// Créer un nouvel atelier
router.post('/', async (req, res) => {
  try {
    const { title, date, time, location, price, description, instructor, totalSeats } = req.body;
    
    const workshop = await Workshop.create({
      title,
      date,
      time,
      location,
      price,
      description,
      instructor,
      totalSeats,
      availableSeats: totalSeats // Au début, toutes les places sont disponibles
    });

    res.status(201).json(workshop);
  } catch (error) {
    console.error('Erreur de création d\'atelier:', error);
    res.status(500).json({ message: "Erreur lors de la création de l'atelier" });
  }
});

export const workshopRoutes = router; 