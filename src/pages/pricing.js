import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const pricingData = [
  {
    id: 1,
    plan: 'Basic',
    price: '49$',
    features: ['Maquette filaire', 'Conception visuelle', '15 pages', 'Hébergement gratuit', ' Support et assistance'],
    link: 'formulaire'
  },
  {
    id: 2,
    plan: 'Premium',
    price: '149$',
    features: ['Maquette filaire', 'Conception visuelle', '15 pages', 'Hébergement gratuit', ' Support et assistance'],
    link: 'formulaire'
  },
  {
    id: 3,
    plan: 'Ultimate',
    price: '349$',
    features: ['Maquette filaire', 'Conception visuelle', '15 pages', 'Hébergement gratuit', ' Support et assistance'],
    link: 'formulaire'
  }
]

function AppPricing() {
  return (
    <section id="pricing" className="block pricing-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Prix &amp; plans</h2>
          <div className="subtitle">choisisez l'offre qui vous definie le mieux </div>
        </div>
        <Row>
          {
            pricingData.map(pricing => {
              return (
                <Col sm={4} key={pricing.id}>
                  <div className='heading'>
                    <h3>{pricing.plan}</h3>
                    <span className='price'>{pricing.price}</span>
                  </div>
                  <div className='content'>
                    <ListGroup>
                      {
                        pricing.features.map((feature, index) => {
                          return (
                            <ListGroup.Item key={index}>{feature}</ListGroup.Item>    
                          );
                        })
                      }
                    </ListGroup>
                  </div>
                  <div className='btn-holder'>
                    <a href={pricing.link} className='btn btn-primary'>commander</a>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default AppPricing;