import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';


const ContactForm = () => {
     
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    phone: '',
    email: '',
    referralSource: '',
    companyDescription: '',
    shortTermGoals: '',
    servicesNeeded: {
      adminSupportMedical: false,
      adminSupportGeneral: false,
      humanResources: false,
      corporateEventsOrganization: false,
      emailCalendarManagement: false,
      billing: false,
      other: false,
    },
    monthlyHours: '',
    monthlyBudget: '',
  });

  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? { ...prevData[name], [value]: checked } : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez votre logique pour traiter les données du formulaire ici
    console.log(formData);
  };
  

  return (
    <Container>
      <div>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
              <Form.Label>Nom *</Form.Label>
              <Form.Control
                type="text" placeholder="Votre Nom"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Prénom</Form.Label>
              <Form.Control type="text" name="lastName" placeholder="Votre Prenom"value={formData.lastName} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="companyName">
              <Form.Label>Nom de l'entreprise *</Form.Label>
              <Form.Control
                type="text" placeholder="Nom de l'entreprise"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Téléphone *</Form.Label>
              <Form.Control type="phonenumber" name="phone" placeholder="Numero de telephone" value={formData.phone} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>E-mail *</Form.Label>
              <Form.Control
                type="email" placeholder="Adresse email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="referralSource">
              <Form.Label>Qui vous a parlé de moi ? / Comment m'avez-vous trouvée ? *</Form.Label>
              <Form.Control type="text" name="referralSource" value={formData.referralSource} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="companyDescription">
              <Form.Label>Décrivez brièvement votre entreprise *</Form.Label>
              <Form.Control as="textarea" rows={3} name="companyDescription" value={formData.companyDescription} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="shortTermGoals">
              <Form.Label>Quels sont vos objectifs à court terme *</Form.Label>
              <Form.Control as="textarea" rows={3} name="shortTermGoals" value={formData.shortTermGoals} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="servicesNeeded">
  <Form.Label>Services recherchés *</Form.Label>
  <Form.Check
  type="checkbox"
  label="Soutien administratif médical"
  name="servicesNeeded"
  value="adminSupportMedical"
  checked={formData.servicesNeeded.adminSupportMedical}
  onChange={handleChange}
/>
<Form.Check
  type="checkbox"
  label="Soutien administratif général"
  name="servicesNeeded"
  value="adminSupportGeneral"
  checked={formData.servicesNeeded.adminSupportGeneral}
  onChange={handleChange}
/>
<Form.Check
  type="checkbox"
  label="Ressources humaines"
  name="servicesNeeded"
  value="humanResources"
  checked={formData.servicesNeeded.humanResources}
  onChange={handleChange}
/>
<Form.Check
  type="checkbox"
  label="Organisation d'événements corporatifs"
  name="servicesNeeded"
  value="corporateEventsOrganization"
  checked={formData.servicesNeeded.corporateEventsOrganization}
  onChange={handleChange}
/>
<Form.Check
  type="checkbox"
  label="Gestion des courriels / calendriers"
  name="servicesNeeded"
  value="emailCalendarManagement"
  checked={formData.servicesNeeded.emailCalendarManagement}
  onChange={handleChange}
/>
<Form.Check
  type="checkbox"
  label="Facturation"
  name="servicesNeeded"
  value="billing"
  checked={formData.servicesNeeded.billing}
  onChange={handleChange}
/>
{/* Ajoutez d'autres cases à cocher pour les autres services */}
</Form.Group>

            <Form.Group controlId="monthlyHours">
              <Form.Label>Combien d'heures par mois estimez-vous déléguer à votre adjointe virtuelle ? *</Form.Label>
              <Form.Control
                type="number"
                name="monthlyHours"
                value={formData.monthlyHours}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="monthlyBudget">
              <Form.Label>Quels est votre budget mensuel pour les services d'assistance virtuelle ? CAD*</Form.Label>
              <Form.Control
                type="number"
                name="monthlyBudget"
                value={formData.monthlyBudget}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Envoyer
            </Button>
          </Form>
        </Col>
      </Row>
      </div>
    </Container>
  );
};

export default ContactForm;
