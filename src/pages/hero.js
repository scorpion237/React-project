import Carousel from 'react-bootstrap/Carousel';
import { FaListAlt, FaCheck, FaSmileO, FaThumbsUp } from 'react-icons/fa';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/img-hero1.jpg'),
    title: 'Une conception d\'exception pour votre site web, alliant élégance et performance',
    description: 'Explorez l\'apogée de l\'élégance web avec [Nom de votre entreprise]. Chaque pixel, chaque détail est méticuleusement conçu pour créer une expérience immersive et parfaite. Notre équipe dédiée vous offre un design exceptionnel, une fusion parfaite entre esthétique et fonctionnalité. Découvrez l\'extraordinaire. Bienvenue chez [Nom de votre entreprise].',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: require('../assets/images/comptable 2.jpg'),
    title: 'Commencez à façonner votre avenir financier dès maintenant, avec expertise et vision.',
    description: 'Entamez dès maintenant votre plan financier avec [Nom de votre entreprise]. Nous vous offrons une feuille de route personnalisée, conçue par notre équipe dédiée pour guider votre avenir financier avec expertise. Bienvenue chez [Nom de votre entreprise], où la professionnalisme sculpte votre succès financier.',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../assets/images/img-hero3.jpg'),
    title: 'Enjoy the Difference',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.twitter.com'
  },
  {
    id: 4,
    image: require('../assets/images/building 1.jpg'),
    title: 'Construire l\'Avenir, Étape par Étape.',
    description: 'Construisez l\'avenir de votre projet avec [Nom de votre entreprise]. Chaque étape est minutieusement planifiée par notre équipe dédiée, créant ainsi une trajectoire personnalisée pour le succès de votre construction. Bienvenue chez [Nom de votre entreprise], où le professionnalisme bâtit la réussite de votre projet.',
    link: 'https://www.google.com'
  },
]

function AppHero() {
  return (
    <><section id="home" className="hero-block">
      <Carousel>
        {heroData.map(hero => {
          return (
            <Carousel.Item key={hero.id}>
              <img
                className="d-block w-100"
                src={hero.image}
                alt={"slide " + hero.id} />
              <Carousel.Caption>
                <h2>{hero.title}</h2>
                <p>{hero.description}</p>
                <a className="btn btn-primary" href={hero.link}>En savoir + <i className="fas fa-chevron-right"></i></a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section><div className="accueil">
        <header>
          <div className="logo">
            <h1>L’<span style={{ color: '#f5721b', fontSize: '2em', fontWeight: 'bold', fontFamily: 'Amatic Sc, sans-serif' }}>expertise administrative adaptée</span> aux besoins de votre entreprise</h1>

            <p className="slogan">
              Mon <span className="keyword">engagement</span> : m'ajuster à vos <span className="keyword">besoins</span>, défis spécifiques et contexte unique pour un service ultra personnalisé.
            </p>
          </div>
        </header>
        <div>
          <p></p><p></p>
        </div>
        <div className="vc_row wpb_row section vc_row-fluid vc_inner  grid_section">
          {/* Première colonne */}
          <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-3 vc_col-md-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <h3 className="icon_title">Organisée</h3>
                <p>La gestion habile de mon emploi du temps, la capacité à discerner les impératifs des priorités, ainsi que l'organisation méthodique de mes outils et documents de travail sont les piliers qui me permettent de respecter rigoureusement les délais convenus avec mes clients.</p>
                <a className="icon_with_title_link" href="https://admincommesabine.ca/fonctionnement/" target="_self">En savoir +</a>
              </div>
            </div>
          </div>

          {/* Deuxième colonne */}
          <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-3 vc_col-md-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <h3 className="icon_title">Efficace</h3>
                <p>Mon engagement premier est de fournir à mes clients un travail de qualité, exécuté dans les délais les plus brefs, répondant ainsi à l'une de mes exigences fondamentales.</p>
                <a className="icon_with_title_link" href="https://admincommesabine.ca/fonctionnement/" target="_self">En savoir +</a>
              </div>
            </div>
          </div>
          {/* ... troisième  colonnes ... */}
          
          {/* *****quatrième colonens*********** */}

          <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-3 vc_col-md-6">
            <div className="vc_column-inner">
             <div> <div className="wpb_wrapper">
                {/* ... Autre contenu ... */}
                <h3 className="icon_title">Enthousiaste</h3>
                <p>Passion, plaisir, joie et humour au quotidien associés à une bonne dose de dynamisme et de positivisme pour amener nos projets communs encore plus loin.</p>
                <a className="icon_with_title_link" href="https://admincommesabine.ca/fonctionnement/" target="_self">En savoir +</a>
              </div>
              </div>
            </div>
          </div>
          {/* ************************* */}

          <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-3 vc_col-md-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                {/* ... Autre contenu ... */}
                <h3 className="icon_title">Professionnelle</h3>
                <p>Compétence, fiabilité, honnêteté, intégrité et respect sont à la base de toute relation avec mes clients.</p>
                <a className="icon_with_title_link" href="https://admincommesabine.ca/fonctionnement/" target="_self">En savoir +</a>
              </div>
            </div>
          </div>
        </div>
      </div></>
    
        );
        }

        export default AppHero;