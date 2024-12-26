import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Banner = ({ banner }) => {
  return (
    <Carousel fade>
      {banner.end.map((item, index) => (
        <Carousel.Item key={item.image} id="banner" interval={1000} keyboard={true}>
          <img
            className="d-block w-100"
            id="bannerImage"
            src={item.image}
            alt={`${index} banner`}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
          <Carousel.Caption
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              right: '20px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              padding: '15px',
              borderRadius: '8px',
            }}
          >
            <h3 style={{ fontSize: '2.5vmax', fontWeight: 'bold' }}>{item.name}</h3>
            <p style={{ fontSize: '1.5vmax' }}>{item.description}</p>
            <p style={{ fontSize: '1.2vmax' }}>{item.source}</p>
            <u style={{ fontSize: '1.5vmax', cursor: 'pointer' }}>Read more</u>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
