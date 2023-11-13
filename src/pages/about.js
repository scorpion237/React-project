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
          <div className="subtitle">Sabine Canel</div>
        </div><p>Ayant débuté ma carrière d'adjointe administrative en France, j'ai contribué de manière active à la croissance de PME et de start-ups pendant une période de 6 ans. En l'an 2000, j'ai concrétisé l'un de mes rêves personnels les plus chers en déménageant au Québec.</p> 
        <p>Au Québec, je continue mon parcours professionnel en collaborant avec diverses entreprises, tant nationales qu'internationales. Cette expérience m'a permis d'enrichir mon expertise, me permettant ainsi de répondre à une variété de besoins et de m'adapter efficacement à différents contextes.</p>
        <p>En 2019, j'ai concrétisé le projet professionnel qui me tient à cœur depuis de nombreuses années : la création de ma propre entreprise..</p>
        <p>En créant ADMIN' Comme Sabine, je fusionne mon sens inné de l'entrepreneuriat avec mon expertise, tout en répondant avant tout à ma quête de sens.</p>
        <p> À travers cette initiative, je partage la passion de mes clients, contribuant ainsi à leur succès et au rayonnement de leur entreprise grâce à mon savoir-faire. Pour moi, faire la différence pour mes clients donne tout son sens à ma contribution.</p>
        <p>À l'écoute des besoins et des réalités spécifiques de mes clients, je mets à contribution ma créativité et ma flexibilité pour relever leurs défis. Mon approche pragmatique est orientée vers les résultats, toujours dans un souci constant d'efficacité. En partageant la passion de mes clients, je contribue à façonner un environnement professionnel propice à la réussite.</p>
        <p>Pour moi, une collaboration gagnante repose sur les piliers fondamentaux de la confiance et de la communication, tout en n'omettant jamais d'insuffler une atmosphère de bonne humeur et de plaisir !</p></div>
          </Col> 
        </Row>
      </Container>
      </section>
      </>
      
  );
}

export default AppAbout;