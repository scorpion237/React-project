import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from '../assets/images/img1.jpg';

function AppAbout() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

  return (
    <><section id="about" className="block about-block">
      <Container fluid>
        
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
           <Col sm={6}>
            {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae alias ex error distinctio laudantium recusandae, iure. Vel nisi soluta, minus consectetur reiciendis laborum, laudantium perspiciatis quos molestias quam eum.</p>
            <div className='progress-block'>
              <h4>HTML / CSS / Javascript</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className='progress-block'>
              <h4>responsive</h4>
              <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>
            <div className='progress-block'>
              <h4>Photoshop</h4>
              <ProgressBar now={photoshop} label={`${photoshop}%`} />
            </div>*/}
            <div className='about'>
      
      <div className="title-holder">
          <h2>À <span>propos</span></h2>
          <div className="subtitle">AB-consulting</div>
        </div><p>Bienvenue chez [Votre Nom], votre partenaire d'efficacité administrative virtuelle. Forte d'une expertise solide en gestion administrative, je m'engage à libérer votre temps précieux afin que vous puissiez vous concentrer sur le cœur de votre entreprise.</p> 
        <p>Ayant évolué dans le domaine de l'assistanat administratif pendant plusieurs années, j'ai développé une passion pour la simplification des processus et l'optimisation des opérations. Mon objectif en tant qu'adjointe administrative virtuelle est de vous offrir un soutien complet, allant de la gestion de l'agenda à la création de documents professionnels.</p>
        <p>Ce que je propose va au-delà de simples tâches administratives. Je suis votre partenaire stratégique, travaillant en coulisses pour assurer la fluidité de vos opérations quotidiennes. Grâce à la technologie moderne, je peux collaborer de manière transparente avec vous, où que vous soyez.</p>
        <p>Chez [Votre Nom], la confidentialité, la précision et la réactivité sont les piliers de mon service. Chaque projet est traité avec un souci du détail méticuleux, garantissant des résultats impeccables à chaque étape.</p>
        <p>Explorez la liberté de déléguer vos tâches administratives et concentrez-vous sur l'essentiel. Faisons équipe pour faire grandir votre entreprise.</p>
        </div>
          </Col> 
        </Row>
      </Container>
      </section>
      </>
      
  );
}

export default AppAbout;