// FonctionnementPage.js

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../styles/fonctionnement.css'
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';


function APPFonctionnement  ()  {
  return (
    <><><section id="about" className="block about-block">
      <Container fluid>

        <Row>
          <Col sm={4} className="ml-8">
            <Image src={img1} />
          </Col>
          <Col sm={8} >

            <div className='about'>

              <div className="title-holder">
                <h2>Qu’est-ce qu’une <span>adjointe virtuelle?</span></h2>
              </div><p>Une adjointe virtuelle (AV), aussi appelée assistante virtuelle, est une professionnelle qui offre une gamme de services administratifs à distance. Contrairement à une assistante administrative traditionnelle qui pourrait travailler physiquement dans un bureau, une adjointe virtuelle opère en ligne, collaborant avec des clients à travers des outils de communication électronique et des technologies numériques.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </><section id="about" className="block about-block">
        <Container fluid>

          <Row>
            <Col sm={4} className="mr-5">
              <Image src={img2} />
            </Col>
           <Col sm={8} className="ml-3">

              <div className='about'>

                <div className="title-holder">
                  <h2>Comment travaille-t-on avec une <span>adjointe virtuelle?</span></h2>
                </div><p>Il est parfois difficile d’imaginer comment la virtualité peut être aussi efficace que la présence physique et pourtant c’est si simple. Laissez-nous vous l’expliquer.</p>
                <p>Notre collaboration s’échelonnera sur plusieurs étapes. </p>
              </div>

              <section>
        <ul className="custom-list">
          <li>
            <span className="bullet"></span>Nous vous offrons une consultation téléphonique permettant de dresser un portrait de vos besoins et de vos défis. Cet échange vous présentera également notre fonctionnement et la manière dont nous pouvons faire une différence en allégeant la gestion administration de votre entreprise.
             </li>
          <li>
            <span className="bullet"></span>Vous recevrez ensuite un devis adapté à vos besoins.
</li>
          <li>
            <span className="bullet"></span>
            Pour lancer notre collaboration, vous recevrez une offre de service et nous conclurons un accord de confidentialité. </li>
            <ul>Pour communiquer avec nous, vous pouvez utiliser Skype, Outlook ou Gmail.;</ul>
        </ul>
      </section>

      {/* <section>
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
      </section> */}
            </Col>
          </Row>
        </Container>
      </section></>
    
  );
};

export default APPFonctionnement;
