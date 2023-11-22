import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

const worksData = [
  {
    id: 1,
    link: 'https://www.google.com',
    image: require('../assets/images/projet react/reseau.jpeg'),
    title: 'Lonely Path',
    subtitle: 'Web Design'
  },
  {
    id: 2,
    link: 'https://www.google.com',
    image: require('../assets/images/img3.jpg'),
    title: 'Photographer Girl',
    subtitle: 'Branding'
  },
  {
    id: 3,
    link: 'https://www.google.com',
    image: require('../assets/images/img4.jpg'),
    title: 'The Difference',
    subtitle: 'Web Design'
  },
  {
    id: 4,
    link: 'https://www.google.com',
    image: require('../assets/images/projet react/WhatsApp Image 2023-11-19 at 21.43.35 (10).jpeg'),
    title: 'Nature Patterns',
    subtitle: 'Branding'
  },
  {
    id: 5,
    link: 'https://www.google.com',
    image: require('../assets/images/projet react/book_hotel.jpeg'),
    title: 'The Difference',
    subtitle: 'Photography'
  },
  {
    id: 6,
    link: 'https://www.google.com',
    image: require('../assets/images/projet react/projet.jpeg'),
    title: 'Winter Sonata',
    subtitle: 'Web Design'
  },
  {
    id: 7,
    link: 'https://www.google.com',
    image: require('../assets/images/img8.jpg'),
    title: 'Lonely Path',
    subtitle: 'Branding'
  },
  {
    id: 8,
    link: 'https://www.google.com',
    image: require('../assets/images/img10.jpg'),
    title: 'Appreciation',
    subtitle: 'Photography'
  },
  {
    id: 9,
    link: 'https://www.google.com',
    image: require('../assets/images/img2.jpg'),
    title: 'Happy Days',
    subtitle: 'Web Design'
  }
]

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

function AppWorks() {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our works</h2>
          <div className="subtitle">our awesome works</div>
        </div>
        <Row className='portfoliolist'>
          {
            worksData.map(works => {
              return (
                <Col sm={4} key={works.id}>
                  <div className='portfolio-wrapper'>
                    <a href={works.link}>
                      <Image src={works.image} />
                      <div className='label text-center'>
                        <h3>{works.title}</h3>
                        <p>{works.subtitle}</p>
                      </div>
                    </a>
                  </div>
                </Col>
              );
            })
          }
        </Row>
        <Pagination>{items}</Pagination>
      </Container>  
    </section>
  );
}

export default AppWorks;