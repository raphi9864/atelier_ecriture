import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ReservationPage from './pages/ReservationPage';
import ContactPage from './pages/ContactPage';
import CreateWorkshopPage from './pages/CreateWorkshopPage';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

const App: React.FC = () => {
  return (
    <>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/reservations" element={<ReservationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gestion-ateliers-x7k9p2" element={<CreateWorkshopPage />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App; 