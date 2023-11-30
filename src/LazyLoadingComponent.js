import React, { useState, useEffect, useRef } from 'react';
import Loader from './Loader';

const  LazyLoadingComponent = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  const generateRandomCardData = () => {
  
    return Array.from({ length: 10 }, (_, index) => ({
      id: cards.length + index,
      image: `https://placekitten.com/200/200?image=${cards.length + index + 1}`, // Replace with your image URLs
      description: `Description ${cards.length + index + 1}`,
    }));
  };

  const fetchMoreCards = () => {
    setLoading(true);
    const newCards = generateRandomCardData();

    // Simulate an asynchronous call (e.g., API request)
    setTimeout(() => {
      setCards((prevCards) => [...prevCards, ...newCards]);
      setLoading(false);
    }, 1000); 
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        fetchMoreCards();
      }
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [fetchMoreCards]);

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '10px' }}>
        {/* Render existing cards */}
        {cards.map((card) => (
          <div key={card.id} style={{ width: '200px', margin: '10px'}} className='card-container'>
            <img src={card.image} alt={card.description} style={{ width: '100%' }} />
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      {/* Reference container for Intersection Observer */}
      <div ref={containerRef} style={{ height: '10px', background: 'transparent' }} />

     {loading && 
     <div className='loader-div'>
        <p>Hang On Loading Content...</p>
      <p className='loader-component'><Loader /></p>
      </div>}
    </div>
  );
};

export default LazyLoadingComponent;
