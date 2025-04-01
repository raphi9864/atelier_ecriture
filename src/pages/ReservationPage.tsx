import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';

const PageHeader = styled.div`
  background-color: var(--beige);
  padding: 80px 0 40px;
  text-align: center;
`;

const PageTitle = styled.h1`
  margin-bottom: 1rem;
`;

const ReservationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const WorkshopsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 60px;
`;

const WorkshopCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const WorkshopContent = styled.div`
  padding: 1.5rem;
  flex: 1;
`;

const WorkshopHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const WorkshopInfo = styled.div`
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const WorkshopTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const WorkshopMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  color: var(--gray);
  font-size: 0.9rem;
`;

const WorkshopMetaItem = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const WorkshopPrice = styled.div`
  background-color: var(--light-beige);
  padding: 0.8rem 1.2rem;
  border-radius: 4px;
  color: var(--dark-brown);
  font-weight: 600;
  text-align: center;
`;

const WorkshopDescription = styled.div`
  margin-bottom: 1.5rem;
`;

const WorkshopFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WorkshopAvailability = styled.div<{ isLimited?: boolean }>`
  color: ${props => props.isLimited ? 'var(--brown)' : 'var(--green)'};
  font-weight: 600;
  font-size: 0.9rem;
`;

const ReserveButton = styled.button`
  background-color: var(--green);
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--dark-green);
  }
  
  &:disabled {
    background-color: var(--light-gray);
    color: var(--gray);
    cursor: not-allowed;
  }
`;

const ReservationFormSection = styled.section`
  background-color: var(--light-beige);
  padding: 3rem;
  border-radius: 8px;
`;

const FormContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--green);
    box-shadow: 0 0 0 2px rgba(125, 155, 118, 0.2);
  }
`;

const Select = styled.select`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: var(--green);
    box-shadow: 0 0 0 2px rgba(125, 155, 118, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  
  &:focus {
    outline: none;
    border-color: var(--green);
    box-shadow: 0 0 0 2px rgba(125, 155, 118, 0.2);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--brown);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  
  &:hover {
    background-color: var(--dark-brown);
  }
`;

// Types
interface Workshop {
  _id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  price: number;
  description: string;
  instructor: string;
  availableSeats: number;
  totalSeats: number;
}

const ReservationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    workshopId: '',
    participants: '1',
    specialRequests: ''
  });
  
  // Exemple de données pour les ateliers
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleReserveClick = (workshop: Workshop) => {
    if (workshop && workshop._id) {
      setFormData(prev => ({ ...prev, workshopId: workshop._id }));
    }
    
    // Scroll to form
    document.getElementById('reservation-form')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/reservations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la réservation');
      }

      // Notification de succès
      toast.success('🎉 Réservation confirmée ! Un email de confirmation vous a été envoyé.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Réinitialiser le formulaire
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        workshopId: '',
        participants: '1',
        specialRequests: ''
      });

    } catch (error) {
      // Notification d'erreur
      toast.error('Une erreur est survenue lors de la réservation. Veuillez réessayer.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  
  const fetchWorkshops = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/workshops');
      if (response.ok) {
        const _workshops = await response.json();
        setWorkshops(_workshops);
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  useEffect(() => {
    fetchWorkshops();
  }, []);
  
  return (
    <>
      <PageHeader>
        <div className="container">
          <PageTitle>Réservez Votre Prochain Atelier</PageTitle>
          <p>Découvrez nos prochains ateliers et réservez votre place pour une expérience d'écriture enrichissante.</p>
        </div>
      </PageHeader>
      
      <ReservationContainer>
        <h2 className="section-title">Prochains Ateliers</h2>
        
        <WorkshopsGrid>
          {workshops.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem', gridColumn: '1/-1' }}>
              <p>Aucun atelier n'est disponible pour le moment. Revenez bientôt !</p>
            </div>
          ) : (
            workshops.map(workshop => (
              <WorkshopCard key={workshop._id}>
                <WorkshopContent>
                  <WorkshopHeader>
                    <WorkshopInfo>
                      <WorkshopTitle>{workshop.title}</WorkshopTitle>
                      <WorkshopMeta>
                        <WorkshopMetaItem>
                          <span>📅</span> {workshop.date}
                        </WorkshopMetaItem>
                        <WorkshopMetaItem>
                          <span>🕓</span> {workshop.time}
                        </WorkshopMetaItem>
                        <WorkshopMetaItem>
                          <span>📍</span> {workshop.location}
                        </WorkshopMetaItem>
                        <WorkshopMetaItem>
                          <span>👤</span> Animé par {workshop.instructor}
                        </WorkshopMetaItem>
                      </WorkshopMeta>
                    </WorkshopInfo>
                    <WorkshopPrice>{workshop.price} €</WorkshopPrice>
                  </WorkshopHeader>
                  
                  <WorkshopDescription>
                    <p>{workshop.description}</p>
                  </WorkshopDescription>
                  
                  <WorkshopFooter>
                    <WorkshopAvailability isLimited={workshop.availableSeats <= 3 && workshop.availableSeats > 0}>
                      {workshop.availableSeats === 0 
                        ? 'Complet' 
                        : workshop.availableSeats <= 3 
                          ? `Seulement ${workshop.availableSeats} place${workshop.availableSeats > 1 ? 's' : ''} disponible${workshop.availableSeats > 1 ? 's' : ''}!` 
                          : `${workshop.availableSeats} places disponibles`}
                    </WorkshopAvailability>
                    <ReserveButton 
                      onClick={() => handleReserveClick(workshop)}
                      disabled={workshop.availableSeats === 0}
                    >
                      {workshop.availableSeats === 0 ? 'Complet' : 'Réserver'}
                    </ReserveButton>
                  </WorkshopFooter>
                </WorkshopContent>
              </WorkshopCard>
            ))
          )}
        </WorkshopsGrid>
        
        <ReservationFormSection id="reservation-form">
          <FormContainer>
            <FormTitle>Réserver un Atelier</FormTitle>
            
            <Form onSubmit={handleSubmit}>
              <FormRow>
                <FormGroup>
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleInputChange} 
                    required 
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="lastName">Nom</Label>
                  <Input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleInputChange} 
                    required 
                  />
                </FormGroup>
              </FormRow>
              
              <FormRow>
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    required 
                  />
                </FormGroup>
              </FormRow>
              
              <FormRow>
                <FormGroup>
                  <Label htmlFor="workshopId">Atelier</Label>
                  <Select 
                    id="workshopId" 
                    name="workshopId" 
                    value={formData.workshopId} 
                    onChange={handleInputChange} 
                    required
                  >
                    <option value="">Sélectionnez un atelier</option>
                    {workshops
                      .filter(w => w.availableSeats > 0)
                      .map(workshop => (
                        <option key={workshop._id} value={workshop._id}>
                          {workshop.title} - {workshop.date}
                        </option>
                      ))}
                  </Select>
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="participants">Nombre de participants</Label>
                  <Select 
                    id="participants" 
                    name="participants" 
                    value={formData.participants} 
                    onChange={handleInputChange} 
                    required
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>
                        {num} {num > 1 ? 'personnes' : 'personne'}
                      </option>
                    ))}
                  </Select>
                </FormGroup>
              </FormRow>
              
              <FormGroup>
                <Label htmlFor="specialRequests">Demandes particulières (facultatif)</Label>
                <TextArea 
                  id="specialRequests" 
                  name="specialRequests" 
                  value={formData.specialRequests} 
                  onChange={handleInputChange} 
                />
              </FormGroup>
              
              <SubmitButton type="submit">Confirmer la Réservation</SubmitButton>
            </Form>
          </FormContainer>
        </ReservationFormSection>
      </ReservationContainer>
    </>
  );
};

export default ReservationPage; 