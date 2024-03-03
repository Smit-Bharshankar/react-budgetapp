import React from 'react'
import { fetchData } from '../Helpers'
import { Outlet , useLoaderData } from 'react-router-dom';
import wave from '../../assets/wave.svg'
import Navbar from '../Navbar';

//loader
export function MainLoader () {
    const userName = fetchData("userName");
    return { userName}
}


function Mainboard() {
    const { userName } = useLoaderData()
  return (
    <div className="layout">
      <Navbar userName={userName}/>
      <main>
      <Outlet />
      </main>
      <img src={wave} alt="image is not supported" />
    </div>
  );
}

export default Mainboard

