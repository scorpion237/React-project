import React from 'react';
import image1 from '../assets/images/img16.jpg'; // Importez votre première image
import image2 from '../assets/images/img17.jpg'; // Importez votre deuxième image
import image3 from '../assets/images/img18.png'; // Importez votre troisième image
import { Row , Col, Carousel} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faTasks, faClipboardList, faHandPointRight, faCheck } from '@fortawesome/free-solid-svg-icons';


import './fonctionnement.css'; // Assurez-vous d'importer le fichier CSS
// import './carousel.css';


var carouselData = [
    {
      id: 1,
      image: require('../assets/images/projet react/reseau1.jpg'),
      title: 'Une conception d\'exception pour votre site web, alliant élégance et performance',
      description: 'Explorez l\'apogée de l\'élégance web avec [Nom de votre entreprise]. Chaque pixel, chaque détail est méticuleusement conçu pour créer une expérience immersive et parfaite. Notre équipe dédiée vous offre un design exceptionnel, une fusion parfaite entre esthétique et fonctionnalité. Découvrez l\'extraordinaire. Bienvenue chez [Nom de votre entreprise].',
      link: 'https://www.google.com'
    },
    {
      id: 2,
      image: require('../assets/images/projet react/dossier1.jpg'),
      title: 'Commencez à façonner votre avenir financier dès maintenant, avec expertise et vision.',
      description: 'Entamez dès maintenant votre plan financier avec [Nom de votre entreprise]. Nous vous offrons une feuille de route personnalisée, conçue par notre équipe dédiée pour guider votre avenir financier avec expertise. Bienvenue chez [Nom de votre entreprise], où la professionnalisme sculpte votre succès financier.',
      link: 'https://www.facebook.com'
    },
    {
      id: 3,
      image: require('../assets/images/projet react/reseaux_social2.jpeg'),
      title: 'Enjoy the Difference',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
      link: 'https://www.twitter.com'
    },
    {
      id: 4,
      image: require('../assets/images/projet react/organize.jpeg'),
      title: 'Construire l\'Avenir, Étape par Étape.',
      description: 'Construisez l\'avenir de votre projet avec [Nom de votre entreprise]. Chaque étape est minutieusement planifiée par notre équipe dédiée, créant ainsi une trajectoire personnalisée pour le succès de votre construction. Bienvenue chez [Nom de votre entreprise], où le professionnalisme bâtit la réussite de votre projet.',
      link: 'https://www.google.com'
    },
  ];
//   const duplicatedCarouselData = [ ...carouselData, ...carouselData];
const AssistantPage = () => {
  return (
    <div className="assistant-container">
      <section className="section" style={{ border: '1px solid silver' }}>
        <article>
        
        <Carousel>
        {carouselData.map(carousel => {
          return (
            <Carousel.Item key={carousel.id}>
              <img
                className="d-block w-100"
                src={carousel.image}
                alt={"slide " + carousel.id} />
              <Carousel.Caption>
                <h2>{carousel.title}</h2>
                <p>{carousel.description}</p>
                <a className="btn btn-primary" href={carousel.link}>En savoir + <i className="fas fa-chevron-right"></i></a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>

<article>
  <Row>
    <Col sm={4} className='holder'>
      <img
        src={image1}
        alt="Illustration 1"
        className="illustration-image"
      />
    </Col>
    <Col sm={8} className='test'>
      <h2>Qu’est-ce qu’une adjointe virtuelle ?</h2>
      <p>
        Une adjointe virtuelle est un professionnel indépendant qui fournit une gamme de services
        administratifs à distance. Ces tâches peuvent inclure la gestion des emails, la planification
        d'événements, la coordination des agendas, la facturation, et bien plus encore.
      </p>
    </Col>
  </Row>
</article>
</article>

      </section>

      <section className="section" style={{ border: '2px solid silver' }}>
        <article>
          <img
            src={image2}
            alt="Illustration 2"
            className="illustration-image"
          />
          <h2>Comment travaille-t-on avec une adjointe virtuelle ?</h2>
          <p>
            Le processus de travail avec une adjointe virtuelle implique généralement une communication
            en ligne. Les outils tels que les emails, les appels vidéo, et les plateformes de gestion de
            projet sont couramment utilisés. La clé est une communication claire et une collaboration
            efficace malgré la distance physique.
          </p>
          <ul>
          <li>
            <FontAwesomeIcon icon={faHandPointRight} style={{ color: "#f56d32" }} /> {" "}
            Nous vous offrons une consultation téléphonique permettant de dresser un portrait de vos besoins et de vos défis. Cet échange vous présentera également notre fonctionnement et la manière dont nous pouvons faire une différence en allégeant la gestion administration de votre entreprise.
          </li>
          <li>
            <FontAwesomeIcon icon={faHandPointRight} style={{ color: "#f56d32" }} /> {" "}
            Vous recevrez ensuite un devis adapté à vos besoins.
          </li>
          <li>
            <FontAwesomeIcon icon={faHandPointRight} style={{ color: "#f56d32" }} /> {" "}
            Pour lancer notre collaboration, vous recevrez une offre de service et nous conclurons un accord de confidentialité.
          </li>
        </ul>
        <p>Divers outils sont à votre disposition pour répondre à vos besoins. Voici quelques-uns qui, en un simple clic, nous permettront de collaborer de manière aussi aisée et efficace que si nos bureaux étaient situés à proximité physique :</p>
        
        </article>
      </section>

      <section className="section" style={{ border: '2px solid silver' }}>
        <article>

          <Row>
    <Col sm={4} className='holder'>
      <img
        src={image3}
        alt="Illustration 3"
        className="illustration-image"
      />
    </Col>
    <Col md={6} className='test'>
    <h2>Pourquoi faire appel à une adjointe virtuelle ?</h2>
    <p>
            Faire appel à une adjointe virtuelle offre de nombreux avantages, notamment la flexibilité,
            la réduction des coûts liés à l'embauche d'un employé à temps plein, et l'accès à des
            compétences spécialisées. Cela permet aux entreprises et aux entrepreneurs de se concentrer
            sur leur cœur de métier pendant que les tâches administratives sont gérées de manière
            professionnelle.
          </p>
    </Col>
  </Row>
  <p>Faire appel à une adjointe virtuelle peut présenter de nombreux avantages pour votre entreprise ou votre vie professionnelle :</p>
      <Row>
    <Col md={6} className='holder'>
      <ul>
      <li>
            <FontAwesomeIcon icon={faHandPointRight} style={{ color: "#f56d32" }} /> {" "}
            <strong>Libération de temps:</strong> En déléguant les tâches administratives, vous libérez du temps pour vous concentrer sur des aspects plus stratégiques de votre entreprise.
          </li>
          <li>
            <FontAwesomeIcon icon={faHandPointRight} style={{ color: "#f56d32" }} /> {" "}
            Flexibilité : Une adjointe virtuelle offre la flexibilité nécessaire pour répondre à vos besoins changeants, que ce soit pour un projet ponctuel ou une assistance continue.
          </li>
          <li>
            <FontAwesomeIcon icon={faHandPointRight} style={{ color: "#f56d32" }} /> {" "}
            Réduction des coûts : Engager une adjointe virtuelle peut être plus rentable que d'embaucher du personnel à plein temps, car vous payez uniquement pour les services dont vous avez besoin.
          </li>
          <li>
            <FontAwesomeIcon icon={faHandPointRight} style={{ color: "#f56d32" }} /> {" "}
            <strong>Rapidité d'intervention :</strong> Lorsque le temps est essentiel, une adjointe virtuelle peut intervenir rapidement. Que ce soit pour répondre à des e-mails urgents, organiser une réunion de dernière minute, ou effectuer des tâches administratives pressantes, une adjointe virtuelle peut être opérationnelle en un temps record.
          </li>
      </ul>
    </Col>
    <Col md={6} className='test'>
    <ul>
          <li>
            <FontAwesomeIcon icon={faHandPointRight} style={{ color: "#f56d32" }} /> {" "}
            <strong>Gestion efficace du temps :</strong>  En déléguant des tâches à une adjointe virtuelle, vous libérez du temps précieux. Cela permet à votre équipe de se concentrer sur des activités à forte valeur ajoutée, augmentant ainsi l'efficacité générale de l'entreprise.
          </li>
          <li>
            <FontAwesomeIcon icon={faHandPointRight} style={{ color: "#f56d32" }} /> {" "}
            <strong>Coût réduit :</strong>L'un des principaux avantages est la réduction significative des coûts par rapport à l'embauche d'un employé traditionnel. Avec une adjointe virtuelle, vous payez uniquement pour les services utilisés, sans frais liés à l'embauche, à l'espace de bureau supplémentaire, ou aux avantages sociaux.
          </li>
          <li>
            <FontAwesomeIcon icon={faHandPointRight} style={{ color: "#f56d32" }} /> {" "}
            <strong>Aucune charge administrative : </strong> Contrairement à un employé traditionnel, une adjointe virtuelle ne génère aucune charge administrative pour votre entreprise. Vous n'avez pas à vous soucier des formalités liées à l'embauche, des déclarations sociales, ou d'autres tâches administratives associées à un personnel en interne
          </li>
          <li>
            <FontAwesomeIcon icon={faHandPointRight} style={{ color: "#f56d32" }} /> {" "}
            <strong>Focus sur l'essentiel :</strong>  En confiant des tâches non essentielles à une adjointe virtuelle, vous permettez à votre équipe de se concentrer sur les aspects fondamentaux de votre entreprise. Cela contribue à maximiser la productivité en utilisant les compétences de chacun de manière optimale.
          </li>
            </ul>
        
    </Col>
      </Row>
        </article>
      </section>

      <aside style={{ border: '2px solid silver' }}>
        <h2>En Savoir Plus</h2>
        <img
          src={image1}
          alt="Illustration Aside"
          className="illustration-image-aside"
        />
        <p>
          Si vous souhaitez en savoir plus sur la manière dont une adjointe virtuelle peut améliorer
          l'efficacité de votre entreprise, n'hésitez pas à nous contacter.
        </p>
      </aside>

      
    </div>
  );
};

export default AssistantPage;
