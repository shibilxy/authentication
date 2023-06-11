import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import locker from '../assets/locker.png';
import issusu from '../assets/issusu.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import beepSound from '../assets/beep.mp3';
import openSound from '../assets/openSound.mp3';
import sirenSound from '../assets/openSiren.mp3';
import Swal from 'sweetalert';

const GateOne = () => {
  const [inputValue, setInputValue] = useState('');
  const [isEntered, setIsEntered] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  
  const navigate = useNavigate();

  const handleReset = ()=>{
    window.location.reload();
  }
  useEffect(() => {
    Swal({
      title: 'WELCOME',
      text: 'Enter the password to unlock Gate-1',
      icon: 'success',
      closeOnClickOutside: false,    
      showConfirmButton:true,
      customClass: {
        container: 'swal-wide-container',
        popup: 'swal-wide-popup',
        content: 'swal-wide-content',
      },
    });
    
  }, []);



  const handleButtonClick = (value) => {
    playBeepSound();
    setInputValue(inputValue + value);
  };

  const handleDelete = () => {
    setInputValue(inputValue.slice(0, -1));
  };

  const handleEnter = () => {
    
    
    document.getElementById("message").style.display = "block";
    playOpenSound();
    setIsRotated(true);
    if (inputValue === 'issath') {
      setIsEntered(true);
    } else {
      setTimeout(() => {
        document.getElementById("message").style.display = "none";
        document.getElementById("errMessage").style.display = "block";
       
        playSirenSound();
        
        setIsRotated(false);

      


      }, 5000);
    }
  };

  useEffect(() => {
    if (isEntered) {
      setTimeout(() => {
        setIsRotated(false);
        navigate('/GateTwo');
      }, 4000);
    }
  }, [isEntered, navigate]);

  const playBeepSound = () => {
    const beepAudio = new Audio(beepSound);
    beepAudio.play();
  };

  const playOpenSound = () => {
    const openAudio = new Audio(openSound);
    openAudio.play();
  };

  const playSirenSound = () => {
    const sirenAudio = new Audio(sirenSound);
    sirenAudio.play();
  };

  return (
    <>
      <center style={{ marginTop: '50px', textDecoration: 'underline', fontWeight: 'bold', fontSize: '24px' }}>
        GATE - <span style={{ color: 'green' }}>1</span>/3
      </center>
      <h5 id="errMessage" className="blink" style={{ textAlign: 'center', fontWeight: 'bold', display: 'none' }}>
        ACCESS DENIED!!
      </h5>
      
      <h5 id="message" style={{ textAlign: 'center', color: 'green', fontWeight: 'bold', display: 'none' }}>
        AUTHENTICATING...
      </h5>
      <div className="number-input-container">
        <div className="sepr">
          <input 
            type="password"
            value={inputValue}
            className="form-control input-field"
            readOnly
          />
          <div style={{ marginTop: '15px' }} className="icons">
            <img style={{ width: '68px', height: '22px' }} alt="text" src={issusu} />
            <img
              className={isRotated ? 'locker-rotate' : ''}
              style={{ width: '60px' }}
              alt="text"
              src={locker}
            />
          </div>

          <div style={{ marginTop: '15px' }} className="button-container">
            <div className="button-row">
              <button className="btn btn-outline-secondary" onClick={() => handleButtonClick('i')}>
                i
              </button>
              <button className="btn btn-outline-secondary" onClick={() => handleButtonClick('s')}>
                s
              </button>
              <button className="btn btn-outline-secondary" onClick={() => handleButtonClick('t')}>
                t
              </button>
            </div>
            <div className="button-row">
              <button className="btn btn-outline-secondary" onClick={() => handleButtonClick('a')}>
                a
              </button>
              <button className="btn btn-outline-secondary" onClick={() => handleButtonClick('h')}>
                h
              </button>
              <button className="btn btn-outline-secondary" onClick={() => handleButtonClick('f')}>
                f
              </button>
            </div>
            <div className="button-row">
              <button className="btn btn-outline-secondary" onClick={() => handleButtonClick('r')}>
                r
              </button>
              <button className="btn btn-outline-secondary" onClick={() => handleButtonClick('123')}>
                123
              </button>
              <button className="btn btn-outline-secondary" onClick={() => handleButtonClick('n')}>
                n
              </button>
            </div>
            <div className="button-row">
              <button id='del' className="btn btn-danger delete" onClick={handleDelete}>
                Delete
              </button>
              <button className="btn btn-outline-secondary" onClick={() => handleButtonClick('@')}>
                @
              </button>
              <button id='entr' className="btn btn-primary enter" onClick={handleEnter}>
                Enter
              </button>
            </div>
            <button className='res'  onClick={handleReset} style={{}}>Reset</button>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default GateOne;
