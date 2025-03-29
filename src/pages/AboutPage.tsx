import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import profilePhoto from '../assets/images/photo-profil_caro.jpeg';
import atelier from '../assets/images/atelier-mars.jpeg'

const PageHeader = styled.div`
  background-color: var(--beige);
  padding: 80px 0 40px;
  text-align: center;
`;

const PageTitle = styled.h1`
  margin-bottom: 1rem;
`;

const AboutContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const AboutSection = styled.section`
  margin-bottom: 60px;
`;

const MissionSection = styled(AboutSection)`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 3rem;
  }
`;

const MissionContent = styled.div`
  flex: 1;
`;

const MissionImage = styled.div`
  flex: 1;
  margin-top: 2rem;
  
  @media (min-width: 768px) {
    margin-top: 0;
  }
  
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ValueCard = styled.div`
  background-color: var(--light-beige);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  color: var(--green);
  margin-bottom: 1rem;
`;

const TeamSection = styled(AboutSection)`
  
`;

const TeamGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamMemberCard = styled.div`
  text-align: center;
`;

const TeamMemberPhoto = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TeamMemberName = styled.h3`
  margin-bottom: 0.5rem;
`;

const TeamMemberRole = styled.p`
  color: var(--green);
  font-weight: 600;
  margin-bottom: 1rem;
`;

const CallToAction = styled.section`
  background-color: var(--light-green);
  padding: 60px 0;
  text-align: center;
  border-radius: 8px;
  margin-top: 40px;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: var(--brown);
  color: white;
  padding: 12px 30px;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  margin-top: 1.5rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--dark-brown);
    color: white;
  }
`;

const AboutPage: React.FC = () => {
  return (
    <>
      <PageHeader>
        <div className="container">
          <PageTitle>À Propos de Notre Atelier d'Écriture</PageTitle>
          <p>Découvrez notre histoire, notre mission et l'équipe passionnée qui anime nos ateliers.</p>
        </div>
      </PageHeader>
      
      <AboutContainer>
        <MissionSection>
          <MissionContent>
            <h2>Notre Mission</h2>
            <p>
              Fondé en 2015, l'Atelier d'Écriture Créative est né d'une passion commune pour les mots et d'une conviction profonde : 
              chacun possède une voix unique et des histoires qui méritent d'être partagées.
            </p>
            <p>
              Notre mission est d'offrir un espace bienveillant et stimulant où les écrivains de tous niveaux peuvent explorer leur créativité, 
              affiner leur style et développer leur confiance à travers l'écriture.
            </p>
            <p>
              Que vous soyez un écrivain débutant cherchant à faire vos premiers pas, un passionné souhaitant approfondir votre pratique, 
              ou un auteur expérimenté en quête de nouvelles inspirations, nos ateliers sont conçus pour vous accompagner dans votre 
              parcours créatif.
            </p>
          </MissionContent>
          <MissionImage>
            <img src={atelier} alt="Atelier d'écriture en session" />
          </MissionImage>
        </MissionSection>
        <TeamSection>
          <h2>Notre Équipe</h2>
       
          
          <TeamGrid>
            <TeamMemberCard>
              <TeamMemberPhoto>
                <img src={profilePhoto} alt="Portrait de Caroline Attal" />
              </TeamMemberPhoto>
              <TeamMemberName>Caroline Attal</TeamMemberName>
              <TeamMemberRole>Fondatrice & Animatrice Principale</TeamMemberRole>
              <p>
                Passionnée de littérature et d'écriture créative, Caroline anime nos ateliers 
                avec bienveillance et expertise depuis la création de l'atelier.
              </p>
            </TeamMemberCard>
          </TeamGrid>
        </TeamSection>
        <AboutSection>
          <h2>Nos Valeurs</h2>
          <p>
            Notre approche de l'écriture créative est guidée par des valeurs fondamentales qui façonnent toutes nos activités et interactions.
          </p>
          
          <ValuesGrid>
            <ValueCard>
              <ValueIcon>💫</ValueIcon>
              <h3>Bienveillance</h3>
              <p>
                Nous cultivons un environnement positif où chacun se sent en sécurité pour explorer, 
                expérimenter et partager son travail sans crainte du jugement.
              </p>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>🌱</ValueIcon>
              <h3>Croissance</h3>
              <p>
                Nous croyons au potentiel infini de développement de chaque écrivain, à travers la pratique régulière, 
                les retours constructifs et l'expérimentation.
              </p>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>🔍</ValueIcon>
              <h3>Authenticité</h3>
              <p>
                Nous encourageons chacun à découvrir et cultiver sa voix unique, plutôt que de suivre 
                des formules toutes faites ou des tendances passagères.
              </p>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>🤝</ValueIcon>
              <h3>Communauté</h3>
              <p>
                Nous valorisons le pouvoir du partage, de l'entraide et de l'inspiration mutuelle au sein 
                d'une communauté diverse d'écrivains passionnés.
              </p>
            </ValueCard>

            <ValueCard>
              <ValueIcon>✨</ValueIcon>
              <h3>Innovation</h3>
              <p>
                Nous explorons constamment de nouvelles approches et techniques d'écriture 
                pour stimuler la créativité et l'expression personnelle.
              </p>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>🌍</ValueIcon>
              <h3>Diversité</h3>
              <p>
                Nous célébrons la richesse des différentes perspectives, cultures et styles 
                d'écriture qui enrichissent notre communauté.
              </p>
            </ValueCard>
          </ValuesGrid>
        </AboutSection>
        

        
        <CallToAction>
          <h2>Rejoignez Notre Communauté Créative</h2>
          <p>
            Prêt à explorer votre potentiel créatif et à partager vos histoires dans un cadre inspirant et bienveillant?
          </p>
          <CTAButton to="/reservations">Découvrir Nos Prochains Ateliers</CTAButton>
        </CallToAction>
      </AboutContainer>
    </>
  );
};

export default AboutPage; 