import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slides = [
    {
      id: 1,
      image: '/images/slide1.jpg',
      title: 'Celebration Ham'
    },
    {
      id: 2,
      image: '/images/slide2.jpg',
      title: 'Food Festival'
    },
    {
      id: 3,
      image: '/images/slide3.jpg',
      title: 'Delicious Dishes'
    }
  ];

  return (
    <Container className="py-3">
      <div className="carousel-container mb-4">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {slides.map((slide) => (
            <Carousel.Item key={slide.id}>
              <img
                className="carousel-img d-block w-100"
                src={slide.image}
                alt={slide.title}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="food-circles mb-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="food-circle">
            <img
              src={`/images/menu-0${item}.jpg`}
              alt={`Food ${item}`}
            />
          </div>
        ))}
      </div>

      <h1 className="home-title mt-4">This is Home Page</h1>
    </Container>
  );
}

export default Home;
