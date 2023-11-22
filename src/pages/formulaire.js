import React, { useState } from 'react';
import { Form, Button, ListGroup, Badge } from 'react-bootstrap';
import './formulaire.css'
const DynamicForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    entreprise: '',
    secteurActivite: '',
    sousSecteurActivite: '',
    prendreRendezVous: false,
    dateRendezVous: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Envoyer les réponses par e-mail ici
  };

  const sousSecteurs = {
  construction: [
    { label: 'Génie civil', services: ['Service A', 'Service B', 'Service C'] },
    { label: 'Bâtiment', services: ['Service X', 'Service Y', 'Service Z'] },
    { label: 'Travaux publics', services: ['Service P', 'Service Q', 'Service R'] },
  ],
  IT: [
    { label: 'Développement logiciel', services: ['Service L', 'Service M', 'Service N'] },
    { label: 'Réseaux', services: ['Service J', 'Service K', 'Service T'] },
    { label: 'Sécurité informatique', services: ['Service U', 'Service V', 'Service W'] },
  ],
  comptabilite: [
    { label: 'Audit', services: ['Service D', 'Service E', 'Service F'] },
    { label: 'Gestion financière', services: ['Service G', 'Service H', 'Service I'] },
    { label: 'Fiscalité', services: ['Service S', 'Service O', 'Service Z'] },
  ],
};


  const services = {
    construction: ['Génie civil', 'Bâtiment', 'Travaux publics'],
    IT: ['Développement logiciel', 'Réseaux', 'Sécurité informatique'],
    comptabilite: ['Audit', 'Gestion financière', 'Fiscalité'],
  };

  
// const sousSecteurs = {
 
// };
  return (
    <div className='forms'>
    <Form onSubmit={handleSubmit}>
      <ListGroup>
        <ListGroup.Item>
          <Form.Group controlId="formNom">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez votre nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </ListGroup.Item>

        <ListGroup.Item>
          <Form.Group controlId="formPrenom">
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez votre prénom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </ListGroup.Item>

        <ListGroup.Item>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrez votre email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </ListGroup.Item>

        <ListGroup.Item>
          <Form.Group controlId="formEntreprise">
            <Form.Label>Nom de l'entreprise</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le nom de votre entreprise"
              name="entreprise"
              value={formData.entreprise}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </ListGroup.Item>

        <ListGroup.Item>
          <Form.Group controlId="formSecteurActivite">
            <Form.Label>Secteur d'activité</Form.Label>
            <Form.Control
              as="select"
              name="secteurActivite"
              value={formData.secteurActivite}
              onChange={handleChange}
            >
              <option value="">Sélectionnez le secteur d'activité</option>
              <option value="construction">Construction</option>
              <option value="IT">IT</option>
              <option value="comptabilite">Comptabilité</option>
            </Form.Control>
          </Form.Group>
        </ListGroup.Item>

        {formData.secteurActivite && (
          <ListGroup.Item>
            <Form.Group controlId="formSousSecteurActivite">
              <Form.Label>Sous-secteur d'activité</Form.Label>
              <Form.Control
                as="select"
                name="sousSecteurActivite"
                value={formData.sousSecteurActivite}
                onChange={handleChange}
              >
                <option value="">Sélectionnez le sous-secteur</option>
                {sousSecteurs[formData.secteurActivite].map((sousSecteur, index) => (
                  <option key={index} value={sousSecteur}>
                    {sousSecteur}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </ListGroup.Item>
        )}
        {/* //   ***************************************************** */}

        // ...

        {formData.secteurActivite && (
  <ListGroup.Item>
    <Form.Group controlId="formSousSecteurActivite">
      <Form.Label>Sous-secteur d'activité</Form.Label>
      <Form.Control
        as="select"
        name="sousSecteurActivite"
        value={formData.sousSecteurActivite}
        onChange={handleChange}
      >
        <option value="">Sélectionnez le sous-secteur</option>
        {sousSecteurs[formData.secteurActivite].map((sousSecteur, index) => (
          <option key={index} value={sousSecteur.label}>
            {sousSecteur.label}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
    {formData.sousSecteurActivite && (
      <ListGroup.Item>
        <Form.Group controlId="formServiceOffert">
          <Form.Label>Service offert</Form.Label>
          <Form.Control
            as="select"
            name="serviceOffert"
            value={formData.serviceOffert}
            onChange={handleChange}
          >
            {/* <option value="">Sélectionnez le service offert</option>
            {sousSecteurs[formData.secteurActivite]
              .find((sousSecteur) => sousSecteur.label === formData.sousSecteurActivite)
              .services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))} */}
          </Form.Control>
        </Form.Group>
      </ListGroup.Item>
    )}
  </ListGroup.Item>
)}
// ...

        
       

        <ListGroup.Item>
          <Form.Group controlId="formPrendreRendezVous">
            <Form.Check
              type="checkbox"
              label="Prendre rendez-vous"
              name="prendreRendezVous"
              checked={formData.prendreRendezVous}
              onChange={handleChange}
            />
          </Form.Group>
          {formData.prendreRendezVous && (
            <Form.Group controlId="formDateRendezVous">
              <Form.Label>Date du rendez-vous</Form.Label>
              <Form.Control
                type="date"
                name="dateRendezVous"
                value={formData.dateRendezVous}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
              />
            </Form.Group>
          )}
        </ListGroup.Item>
      </ListGroup>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
</div>
  );
};

export default DynamicForm;
