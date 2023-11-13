// FonctionnementPage.js

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../styles/fonctionnement.css'
import img1 from '../assets/images/img1.jpg';


function APPFonctionnement  ()  {
  return (
    <><><section id="about" className="block about-block">
      <Container fluid>

        <Row>
          <Col sm={3}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>

            <div className='about'>

              <div className="title-holder">
                <h2>Qu’est-ce qu’une <span>adjointe virtuelle?</span></h2>
              </div><p>Une adjointe virtuelle est une personne physique qui effectue, à distance, diverses tâches administratives, de planification, de coordination, de démarchage, etc. pour ses clients.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </><section id="about" className="block about-block">
        <Container fluid>

          <Row>
            <Col sm={4}>
              <Image src={img1} />
            </Col>
           <Col sm={6}>

              <div className='about'>

                <div className="title-holder">
                  <h2>Comment travaille-t-on avec une <span>adjointe virtuelle?</span></h2>
                </div><p>Il est parfois difficile d’imaginer comment la virtualité peut être aussi efficace que la présence physique et pourtant c’est si simple. Laissez-nous vous l’expliquer.</p>
                <p>Notre collaboration s’échelonnera sur plusieurs étapes. </p>
                <li>Nous vous offrons une consultation téléphonique permettant de dresser un portrait de vos besoins et de vos défis. Cet échange vous présentera également notre fonctionnement et la manière dont nous pouvons faire une différence en allégeant la gestion administration de votre entreprise.</li>
                <li>Vous recevrez ensuite une soumission adaptée à votre réalité.</li>
                <li>Si vous souhaitez initier notre collaboration, vous recevrez une offre de service et nous signerons une entente de confidentialité.</li>
                  
                <ul>Communication avec Skype, Outlook et Gmail;</ul>
              </div>

              <section>
        <h2>Section 1</h2>
        <ul className="custom-list">
          <li>
            <span className="bullet"></span>
            Élément 1
          </li>
          <li>
            <span className="bullet"></span>
            Élément 2
          </li>
          <li>
            <span className="bullet"></span>
            Élément 3
          </li>
        </ul>
      </section>

      <section>
        <h2>Section 2</h2>
        <ul className="custom-list">
          <li>
            <span className="bullet"></span>
            Élément A
          </li>
          <li>
            <span className="bullet"></span>
            Élément B
          </li>
          <li>
            <span className="bullet"></span>
            Élément C
          </li>
        </ul>
      </section>

      <section>
        <h2>Dernière Section</h2>
        <ul className="custom-list">
          <li>
            <span className="bullet"></span>
            Élément X
          </li>
          <li>
            <span className="bullet"></span>
            Élément Y
          </li>
          <li>
            <span className="bullet"></span>
            Élément Z
          </li>
        </ul>
      </section>
            </Col>
          </Row>
        </Container>
      </section></>
    
  );
};

export default APPFonctionnement;
