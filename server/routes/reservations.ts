import { Router } from 'express';
import { Workshop } from '../models/Workshop';
import { Reservation } from '../models/Reservation';
import { sendConfirmationEmail } from '../services/emailService';

const router = Router();

router.post('/', (req, res) => {
  const { workshopId, firstName, lastName, email, phone, participants } = req.body;

  // Vérifier la disponibilité
  Workshop.findById(workshopId)
    .then(workshop => {
      if (!workshop) {
        return res.status(404).json({ message: "Atelier non trouvé" });
      }

      if (workshop.availableSeats < participants) {
        return res.status(400).json({ message: "Places insuffisantes" });
      }

      // Créer la réservation
      Reservation.create({
        workshopId,
        firstName,
        lastName,
        email,
        phone,
        participants
      })
        .then(reservation => {
          // Mettre à jour les places disponibles
          workshop.availableSeats -= participants;
          workshop.save()
            .then(() => {
              // Envoyer l'email de confirmation
              sendConfirmationEmail({
                to: email,
                firstName,
                workshopTitle: workshop.title,
                date: workshop.date,
                time: workshop.time
              });

              res.status(201).json(reservation);
            })
            .catch(error => {
              console.error('Erreur de mise à jour:', error);
              res.status(500).json({ message: "Erreur lors de la mise à jour" });
            });
        })
        .catch(error => {
          console.error('Erreur de création:', error);
          res.status(500).json({ message: "Erreur lors de la création" });
        });
    })
    .catch(error => {
      console.error('Erreur de vérification:', error);
      res.status(500).json({ message: "Erreur lors de la vérification" });
    });
});

export const reservationRoutes = router; 