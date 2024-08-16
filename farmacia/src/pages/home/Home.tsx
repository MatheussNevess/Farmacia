import React, { useContext, useEffect } from 'react';
import homeLogo from '../../assets/home.jpg';
import './Home.css';
import { useNavigate } from 'react-router-dom';


function Home() {
  
  return (
    <>
      <div className="bg-cyan-700 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Seja bem vindo!</h2>
          </div>
          <div className="flex justify-center">
            <img src={homeLogo} alt="Home Logo" className='w-2/3' />
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Home;