// import React from 'react';
import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';

import '../App.css';  // Assurez-vous de créer un fichier de style (Footer.css) pour appliquer les styles.

const AppFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>À propos de nous</h2>
          <p>Seriez-vous enclin à envisager une collaboration fructueuse et novatrice?</p>
        </div>
        <div className="footer-section">
          <h2>Nos services</h2>
          <ul>
            <li>Gestion administrative</li>
            <li>Assistance à la gestion de projet</li>
            <li>Soutien opérationnel et communication</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contactez-nous</h2>
          <p>Email: contact@example.com</p>
          <p>Téléphone: 514 - 699 - 9371</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Admin' comme sabine Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default AppFooter;
