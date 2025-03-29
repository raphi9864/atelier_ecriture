import React, { useState } from 'react';
import styled from 'styled-components';

const PageHeader = styled.div`
  background-color: var(--beige);
  padding: 80px 0 40px;
  text-align: center;
`;

const PageTitle = styled.h1`
  margin-bottom: 1rem;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const ContactLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactInfo = styled.div``;

const ContactForm = styled.div``;

const InfoSection = styled.div`
  margin-bottom: 2.5rem;
`;

const InfoTitle = styled.h3`
  margin-bottom: 1.2rem;
  font-size: 1.4rem;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 2px;
    background-color: var(--light-green);
    margin-top: 0.5rem;
  }
`;

const InfoText = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ContactDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ContactIcon = styled.div`
  margin-right: 1rem;
  min-width: 24px;
  font-size: 1.5rem;
  color: var(--green);
`;

const ContactText = styled.div`
  p {
    margin-bottom: 0.3rem;
  }
  
  strong {
    display: block;
    margin-bottom: 0.3rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: var(--light-beige);
    color: var(--dark-brown);
    border-radius: 50%;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: var(--green);
      color: white;
    }
  }
`;

const Map = styled.div`
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 1.5rem;
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const Form = styled.form`
  background-color: white;
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const FormTitle = styled.h3`
  margin-bottom: 1.5rem;
  text-align: center;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
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

const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  
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

const MessageSuccess = styled.div`
  background-color: var(--light-green);
  color: var(--dark-green);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const FAQ = styled.section`
  margin-top: 5rem;
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FAQItem = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const FAQQuestion = styled.h4`
  margin-bottom: 0.8rem;
  color: var(--dark-brown);
`;

const FAQAnswer = styled.p`
  line-height: 1.6;
`;

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pourriez envoyer les données du formulaire à votre API
    console.log('Form data submitted:', formData);
    
    // Simuler une soumission réussie
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <>
      <PageHeader>
        <div className="container">
          <PageTitle>Contactez-Nous</PageTitle>
          <p>Questions, suggestions ou envie de participer? N'hésitez pas à nous contacter.</p>
        </div>
      </PageHeader>
      
      <ContactContainer>
        <ContactLayout>
          <ContactInfo>
            <InfoSection>
              <InfoTitle>Besoin d'Information?</InfoTitle>
              <InfoText>
                Nous sommes là pour répondre à toutes vos questions concernant nos ateliers d'écriture, 
                nos tarifs, ou pour vous aider à trouver l'atelier qui correspond le mieux à vos besoins.
              </InfoText>
              
              <ContactDetailsGrid>
                <ContactDetail>
                  <ContactIcon>📍</ContactIcon>
                  <ContactText>
                    <strong>Adresse</strong>
                    <p>2 Place Wilson</p>
                    <p>06000 Nice</p>
                  </ContactText>
                </ContactDetail>
                
                <ContactDetail>
                  <ContactIcon>✉️</ContactIcon>
                  <ContactText>
                    <strong>Email</strong>
                    <p>caroline.attal@yahoo.fr</p>
                  </ContactText>
                </ContactDetail>
                
                <ContactDetail>
                  <ContactIcon>📞</ContactIcon>
                  <ContactText>
                    <strong>Téléphone</strong>
                    <p>+33 (0)6 11 02 01 17</p>
                  </ContactText>
                </ContactDetail>
                
                <ContactDetail>
                  <ContactIcon>🕗</ContactIcon>
                  <ContactText>
                    <strong>Horaires d'Ouverture</strong>
                    <p>Mardi: 10h - 19h</p>
                    <p>Jeudi: 10h - 17h</p>
                  </ContactText>
                </ContactDetail>
              </ContactDetailsGrid>
              
              <SocialLinks>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </SocialLinks>
            </InfoSection>
            
            <InfoSection>
              <InfoTitle>Nous Rendre Visite</InfoTitle>
              <InfoText>
                Notre atelier est situé en plein cœur du Quartier Latin à Paris, facilement accessible 
                en transports en commun.
              </InfoText>
              
              <Map>
                <iframe 
                  title="Localisation de l'atelier d'écriture"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.4713573728486!2d7.270668875863617!3d43.70075257109995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cddaa5aa00888b%3A0x44efad4e09be2cf7!2s2%20All.%20Sandro%20Pertini%2C%2006000%20Nice!5e0!3m2!1sfr!2sfr!4v1743268871179!5m2!1sfr!2sfr"
                  allowFullScreen 
                  loading="lazy"
                ></iframe>
              </Map>
            </InfoSection>
          </ContactInfo>
          
          <ContactForm>
            <Form onSubmit={handleSubmit}>
              <FormTitle>Envoyez-Nous un Message</FormTitle>
              
              {formSubmitted && (
                <MessageSuccess>
                  Votre message a été envoyé avec succès! Nous vous répondrons dans les plus brefs délais.
                </MessageSuccess>
              )}
              
              <FormGroup>
                <Label htmlFor="name">Nom Complet</Label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                />
              </FormGroup>
              
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
                <Label htmlFor="subject">Sujet</Label>
                <Input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleInputChange} 
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <TextArea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  required 
                />
              </FormGroup>
              
              <SubmitButton type="submit">Envoyer le Message</SubmitButton>
            </Form>
          </ContactForm>
        </ContactLayout>
        
        <FAQ>
          <h2 className="section-title">Questions Fréquentes</h2>
          
          <FAQGrid>
            <FAQItem>
              <FAQQuestion>Comment se déroule un atelier d'écriture?</FAQQuestion>
              <FAQAnswer>
                Chaque atelier débute par un court enseignement théorique sur le thème du jour, 
                suivi d'exercices d'écriture pratiques. Les participants sont ensuite invités à partager 
                leurs textes et à recevoir des retours constructifs du groupe et de l'animateur.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>Faut-il avoir de l'expérience en écriture pour participer?</FAQQuestion>
              <FAQAnswer>
                Non, nos ateliers sont ouverts à tous les niveaux, du débutant à l'écrivain confirmé. 
                Chaque atelier est conçu pour être accessible tout en offrant des défis stimulants pour 
                les participants plus expérimentés.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>Puis-je annuler ou reporter ma réservation?</FAQQuestion>
              <FAQAnswer>
                Oui, vous pouvez annuler jusqu'à 48h avant l'atelier pour un remboursement complet. 
                Pour un report, contactez-nous au moins 24h avant et nous vous proposerons de nouvelles dates.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>Proposez-vous des ateliers en ligne?</FAQQuestion>
              <FAQAnswer>
                Oui, nous proposons certains de nos ateliers en format virtuel. Consultez notre calendrier 
                pour voir les options disponibles, ou contactez-nous pour organiser un atelier en ligne privé 
                pour votre groupe.
              </FAQAnswer>
            </FAQItem>
          </FAQGrid>
        </FAQ>
      </ContactContainer>
    </>
  );
};

export default ContactPage; 