import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: var(--beige);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 700;
  
  a {
    color: var(--dark-brown);
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    display: none;
    
    &.open {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 70px;
      left: 0;
      right: 0;
      background-color: var(--beige);
      padding: 1rem;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavItem = styled.li`
  margin-left: 2rem;
  
  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
  
  a {
    text-decoration: none;
    color: var(--dark-brown);
    font-weight: 500;
    padding-bottom: 0.25rem;
    position: relative;
    
    &.active {
      font-weight: 600;
      
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 2px;
        background-color: var(--light-green);
      }
    }
    
    &:hover {
      color: var(--green);
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--dark-brown);
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <Link to="/">Atelier d'Écriture</Link>
        </Logo>
        
        <MenuButton onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuButton>
        
        <Nav className={isMenuOpen ? 'open' : ''}>
          <NavList>
            <NavItem>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Accueil
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/reservations" className={location.pathname === '/reservations' ? 'active' : ''}>
                Réservations
              </Link>
            </NavItem>
          
            <NavItem>
              <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>
                Blog
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                Contact
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/a-propos" className={location.pathname === '/a-propos' ? 'active' : ''}>
                À Propos
              </Link>
            </NavItem>
          </NavList>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header; 