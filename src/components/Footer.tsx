import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import facebookLogo from '../assets/images/facebook-logo.svg';
import instagramLogo from '../assets/images/instagram-logo.svg';

const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
`;

const FooterContainer = styled.footer`
  background-color: var(--brown);
  color: white;
  padding: 3rem 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: white;
    margin-bottom: 1.2rem;
    font-size: 1.3rem;
  }
  
  p {
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  
  li {
    margin-bottom: 0.7rem;
  }
  
  a {
    color: var(--light-beige);
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: 0.9rem;
    
    &:hover {
      color: var(--light-green);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  a {
    color: white;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    
    &:hover {
      ${SocialIcon} {
        transform: translateY(-2px);
      }
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 3rem;
  font-size: 0.8rem;
  color: var(--light-beige);
  opacity: 0.8;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Atelier d'Écriture</h3>
          <p>
            Un espace créatif où les mots prennent vie, où l'imagination s'épanouit 
            et où chaque histoire trouve sa voix.
          </p>
          <SocialLinks>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
            >
              <SocialIcon 
                src={facebookLogo} 
                alt="Facebook" 
              />
            </a>
            <a 
              href="https://www.instagram.com/ecrirensemble/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
            >
              <SocialIcon 
                src={instagramLogo} 
                alt="Instagram" 
              />
            </a>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Liens Rapides</h3>
          <FooterLinks>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/a-propos">À Propos</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/reservations">Réservations</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Nous Contacter</h3>
          <p>2 Place Wilson<br />06000 Nice</p>
          <p>Téléphone: +33 (0)6 11 02 01 17</p>
          <p>Email: caroline.attal@yahoo.fr</p>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        &copy; {currentYear} Atelier d'Écriture Créative. Tous droits réservés.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 