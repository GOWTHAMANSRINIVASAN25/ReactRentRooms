import { Head2 } from './head2/Head2';
import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import data from './db/data';
import './carddetails.css';

import { Foot2 } from './foot2/Foot2';

const CardDetails = () => {
  const navigate=useNavigate();
  const handlePaymentDetails = () => {
    if (cardData) {
      navigate('/payment', {
        state: {
          title: cardData.title,
          prevPrice: cardData.prevPrice,
        },
      });
    }
  };


  const { id } = useParams(); // Fetch the 'id' parameter from the URL
  const [cardData, setCardData] = useState(null);

  // Simulated function to fetch card details using the 'id'
  const fetchCardData = async (cardId) => {
  
    const selectedCard = data.find((card) => card.id === parseInt(cardId));

    // Set the card data
    setCardData(selectedCard);
  };

  useEffect(() => {
    fetchCardData(id);
  }, [id]);

  return (
   <>
   <Head2/>
    <div className='cardDetails'>
      {cardData ? (
        <>
       
          <img src={cardData.img} alt='' className='img1'/>
       
        <br/>
        <section className='ij'>
          <h1>Details</h1>
      <br/>
      <p className='pp'>Category:  {cardData.category}</p>
      <br></br>
      <p className='pp'>Titles:   {cardData.title}</p><br></br>
      <p className='pp'>No of Rooms Available:   {cardData.noofrooms}</p><br/>
      <p className='pp'>location:   {cardData.location}</p><br/>
      <p className='pp'>Parking:   {cardData.parking}</p>
      <br/><hr></hr>
      <br></br>
          </section>
        <section className='ik'>
          <h1> Monthly Rent:Rs.{cardData.prevPrice}</h1><br/>
          <p className='pp'>Dealer Name:  {cardData.dealer}</p><br/>
          <p  className='pp'>Location:{cardData.location}</p><br/>
          <button onClick={handlePaymentDetails} className='bpay'>View payment details</button>
      <br/>

      <br/>

        </section>
  <br/>
       </>
      
      ) : (
        <p>Loading...</p>
      )}
     
    </div>
    <Foot2/>
    </>
  
   
  );
};

export default CardDetails;
