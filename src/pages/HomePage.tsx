import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  background-color: var(--beige);
  padding: 100px 0;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: var(--dark-brown);
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: var(--brown);
  line-height: 1.6;
`;

const HeroButton = styled(Link)`
  display: inline-block;
  background-color: var(--green);
  color: white;
  padding: 12px 30px;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--dark-green);
    color: white;
  }
`;

const FeaturesSection = styled.section`
  padding: 80px 0;
  background-color: var(--light-beige);
`;

const FeaturesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: var(--green);
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  margin-bottom: 1rem;
`;

const TestimonialsSection = styled.section`
  padding: 80px 0;
  background-color: var(--light-green);
  color: var(--dark-brown);
`;

const TestimonialsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: 1.5rem;
`;

const TestimonialAuthor = styled.p`
  font-weight: 600;
  text-align: right;
`;

const UpcomingSection = styled.section`
  padding: 80px 0;
  background-color: var(--beige);
`;

const UpcomingContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const WorkshopCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const WorkshopInfo = styled.div`
  flex: 1;
  
  @media (min-width: 768px) {
    padding-right: 2rem;
  }
`;

const WorkshopDate = styled.p`
  color: var(--green);
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const WorkshopTitle = styled.h3`
  margin-bottom: 1rem;
`;

const WorkshopAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1.5rem;
  
  @media (min-width: 768px) {
    justify-content: flex-end;
    margin-top: 0;
  }
`;

const CallToAction = styled.section`
  padding: 80px 0;
  background-color: var(--brown);
  color: white;
  text-align: center;
`;

const CTAContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const CTATitle = styled.h2`
  color: white;
  margin-bottom: 1.5rem;
`;

const CTAText = styled.p`
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: var(--light-beige);
  color: var(--dark-brown);
  padding: 12px 30px;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: white;
    color: var(--dark-brown);
  }
`;

// Ajout de l'interface Workshop
interface Workshop {
  _id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  availableSeats: number;
}

const HomePage: React.FC = () => {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const response = await fetch('https://atelier-ecriture.onrender.com/api/workshops');
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data)) {
            setWorkshops(data);
          } else if (data.workshops && Array.isArray(data.workshops)) {
            setWorkshops(data.workshops);
          } else {
            console.error('Format de données inattendu:', data);
            setWorkshops([]);
          }
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des ateliers:', error);
        setWorkshops([]);
      }
    };

    fetchWorkshops();
  }, []);

  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Libérez Votre Créativité Par Les Mots</HeroTitle>
          <HeroSubtitle>
            Rejoignez notre atelier d'écriture créative pour explorer votre imagination, 
            perfectionner votre style et partager vos histoires dans un cadre bienveillant et inspirant.
          </HeroSubtitle>
          <HeroButton to="/reservations">Réserver un Atelier</HeroButton>
        </HeroContent>
      </HeroSection>
      
      <FeaturesSection>
        <FeaturesContainer>
          <h2 className="section-title">Nos Ateliers d'Écriture</h2>
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon>📝</FeatureIcon>
              <FeatureTitle>Ateliers Hebdomadaires</FeatureTitle>
              <p>Des sessions régulières pour développer votre pratique d'écriture, explorer différents styles et techniques dans une ambiance conviviale.</p>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>🔍</FeatureIcon>
              <FeatureTitle>Ateliers Thématiques</FeatureTitle>
              <p>Des sessions dédiées à un genre ou une approche spécifique : fiction, poésie, autobiographie, écriture thérapeutique, etc.</p>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>🌟</FeatureIcon>
              <FeatureTitle>Master Classes</FeatureTitle>
              <p>Des ateliers exceptionnels animés par des auteurs reconnus qui partagent leur expérience et leur approche créative.</p>
            </FeatureCard>
          </FeatureGrid>
        </FeaturesContainer>
      </FeaturesSection>
      
      <TestimonialsSection>
        <TestimonialsContainer>
          <h2 className="section-title">Ce Qu'en Disent Nos Participants</h2>
          <TestimonialsGrid>
            <TestimonialCard>
              <TestimonialText>
                "Ces ateliers ont transformé ma façon d'écrire. J'ai trouvé ma voix et 
                une communauté bienveillante qui me pousse à m'améliorer."
              </TestimonialText>
              <TestimonialAuthor>Marie L.</TestimonialAuthor>
            </TestimonialCard>
            
            <TestimonialCard>
              <TestimonialText>
                "Un espace où la créativité est nourrie et encouragée. 
                Les exercices proposés sont toujours stimulants et ouvrent de nouvelles perspectives."
              </TestimonialText>
              <TestimonialAuthor>Thomas R.</TestimonialAuthor>
            </TestimonialCard>
            
            <TestimonialCard>
              <TestimonialText>
                "Grâce à ces ateliers, j'ai finalement osé commencer le roman 
                qui me tenait à cœur depuis des années."
              </TestimonialText>
              <TestimonialAuthor>Sophie M.</TestimonialAuthor>
            </TestimonialCard>
          </TestimonialsGrid>
        </TestimonialsContainer>
      </TestimonialsSection>
      
      <UpcomingSection>
        <UpcomingContainer>
          <h2 className="section-title">Prochains Ateliers</h2>
          
          {workshops.length === 0 ? (
            <p style={{ textAlign: 'center', padding: '2rem' }}>
              Aucun atelier n'est programmé pour le moment.
            </p>
          ) : (
            workshops.map(workshop => (
              <WorkshopCard key={workshop._id}>
                <WorkshopInfo>
                  <WorkshopDate>{workshop.date} - {workshop.time}</WorkshopDate>
                  <WorkshopTitle>{workshop.title}</WorkshopTitle>
                  <p>{workshop.description}</p>
                  {workshop.availableSeats > 0 ? (
                    <p style={{ color: 'var(--green)' }}>
                      {workshop.availableSeats} places disponibles
                    </p>
                  ) : (
                    <p style={{ color: 'var(--brown)' }}>Complet</p>
                  )}
                </WorkshopInfo>
                <WorkshopAction>
                  <HeroButton 
                    to={`/reservations?workshop=${workshop._id}`}
                    style={{ 
                      opacity: workshop.availableSeats === 0 ? 0.5 : 1,
                      pointerEvents: workshop.availableSeats === 0 ? 'none' : 'auto'
                    }}
                  >
                    {workshop.availableSeats === 0 ? 'Complet' : 'Réserver'}
                  </HeroButton>
                </WorkshopAction>
              </WorkshopCard>
            ))
          )}
        </UpcomingContainer>
      </UpcomingSection>
      
      <CallToAction>
        <CTAContainer>
          <CTATitle>Prêt à Libérer Votre Créativité?</CTATitle>
          <CTAText>
            Rejoignez nos ateliers d'écriture créative et transformez votre passion pour les mots 
            en textes captivants, guidé par des auteurs expérimentés et entouré d'une communauté inspirante.
          </CTAText>
          <CTAButton to="/contact">Contactez-Nous</CTAButton>
        </CTAContainer>
      </CallToAction>
    </>
  );
};

export default HomePage; 