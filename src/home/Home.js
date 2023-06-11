import React from 'react'
import art1 from '../assets/art/art1.jpeg'
import art2 from '../assets/art/art2.jpeg'
import art3 from '../assets/art/art3.jpeg'
import art4 from '../assets/art/art4.jpeg'
import art5 from '../assets/art/art5.jpeg'
import welcomeSound from '../assets/welcomeSound.mp3';
import { useEffect } from 'react';
import Swal from 'sweetalert';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({ // Initialize AOS library
    duration: 800, // Animation duration in milliseconds
  });
  }, []);
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      alert("Due to privacy concern you cant spend more than 24 seconds in this page.")
      window.location.href = '/authentication';
    }, 24000); 
    return () => {
      clearTimeout(redirectTimeout); // Clear the timeout if the component is unmounted
    };
  }, []);
  useEffect(() => {
    Swal({
      title: 'SUCCESSFUL !',
      text: 'Note : This page will automatically logout after 24 seconds from now. Due to privacy concern',
      icon: 'success',
      closeOnClickOutside: false,    
      showConfirmButton:true,
      customClass: {
        container: 'swal-wide-container',
        popup: 'swal-wide-popup',
        content: 'swal-wide-content',
      },
    });
    const audio = new Audio(welcomeSound);

    const playAudio = () => {
      audio.play();
    };

    const handleCanPlayThrough = () => {
      audio.play();
    };

    audio.addEventListener('canplaythrough', handleCanPlayThrough);

  
  }, []);

   
  return (
    <div className='frame'>
      <img data-aos="zoom-in" style={{width:'100%',objectFit:'cover'}} src={art4} alt="Art 4"/>
      <img data-aos="zoom-in" style={{width:'100%',objectFit:'cover'}} src={art2} alt="Art 2"/>
      <img data-aos="zoom-in" style={{width:'100%',objectFit:'cover'}} src={art1} alt="Art 1"/>
      <img data-aos="zoom-in" style={{width:'100%',objectFit:'cover'}} src={art5} alt="Art 5"/>
    
    </div>
  )
}

export default Home
