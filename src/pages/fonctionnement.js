import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faTasks, faClipboardList, faHandPointRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col} from 'react-bootstrap';

const servicesData = [
  {
    id: 1,
    icon: faQuestion,
    image: require('../assets/images/img16.jpg'),
    title: 'Qu’est-ce qu’une adjointe virtuelle ?',
    description: 'Une adjointe virtuelle est un professionnel indépendant qui offre une gamme de services administratifs et de soutien à distance.\
    Contrairement à une assistante administrative traditionnelle qui pourrait travailler physiquement dans un bureau, une adjointe virtuelle opère en ligne, collaborant avec des clients à travers des outils de communication électronique et des technologies numériques.',
  },
  {
    id: 2,
    icon: faTasks,
    image: require('../assets/images/img17.jpg'),
    title: 'Comment travaille-t-on avec une adjointe virtuelle ?',
    description: (
      <>
        <p>Les adjointes virtuelles utilisent souvent des outils en ligne pour collaborer avec leurs clients et gérer efficacement les projets.</p>
        <p>Notre collaboration s’échelonnera sur plusieurs étapes.</p>
        <ul className="custom-list">
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
        <ul>
          <li><FontAwesomeIcon icon={faCheck} style={{ "--fa-primary-color": "#050505" }} /> {" "}Communication avec Skype, Outlook et Gmail</li>
          <li><FontAwesomeIcon icon={faCheck} style={{ "--fa-primary-color": "#050505" }} /> {" "}Partage et stockage de fichiers dans le cloud : Google Drive, Dropbox et Box.</li>
          <li><FontAwesomeIcon icon={faCheck} style={{ "--fa-primary-color": "#050505" }} /> {" "}Signature numérique pour contrats et accords</li>
          <li><FontAwesomeIcon icon={faCheck} style={{ "--fa-primary-color": "#050505" }} /> {" "}Gestion des mots de passe</li>
          <li><FontAwesomeIcon icon={faCheck} style={{ "--fa-primary-color": "#050505" }} /> {" "}Élaboration de questionnaires</li>
          <li><FontAwesomeIcon icon={faCheck} style={{ "--fa-primary-color": "#050505" }} /> {" "}Organisation de réunions et de vidéoconférences adaptée à tous les fuseaux horaires</li>
          <li><FontAwesomeIcon icon={faCheck} style={{ "--fa-primary-color": "#050505" }} /> {" "}Organisation et suivi des projets grâce à la gestion et planification des tâches.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    icon: faClipboardList,
    image: require('../assets/images/img19.jpg'),
    title: 'Pourquoi faire appel à une adjointe virtuelle ?',
    description: (
      <>
        <p>Faire appel à une adjointe virtuelle peut présenter de nombreux avantages pour votre entreprise ou votre vie professionnelle :</p>
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

          {/* Ajoutez d'autres avantages au besoin */}
        </ul>
      </>
    ),
  },
];

const AppFonctionnement = () => {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2></h2>
          <div className="subtitle"></div>
        </div>
        <Row>
          {servicesData.map((services) => (
            <Col sm={4} className='holder' key={services.id}>
              <div className="icon">
                <FontAwesomeIcon icon={services.icon} />
              </div>
              <img
                className="d-block w-100"
                src={services.image}
                alt={"slide " + services.id}
              />
               <h3>{services.title}</h3>
              <div>{services.description}</div>
            </Col>
          ))}
        </Row>
       
      </Container>
    </section>
  );
};

export default AppFonctionnement;
