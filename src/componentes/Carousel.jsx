import Carousel from 'react-bootstrap/Carousel';


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
        style={{
          height: 400,
        }}
          className="d-block w-100 img-thumbnail"
          
          src={require('./banner1.png')}
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{
          height: 400,

          

        }}
          className="d-block w-100 img-thumbnail"
          src={require('./banner2.png')}
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;