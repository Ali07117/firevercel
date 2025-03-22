import React from 'react';
import Herosection from ".//components/Herosection";
import Aboutus from './components/Aboutus';
import Firefrenz from './components/Firefrenz';
import Bottomimages from './components/Bottomimages';


function App() {
  return (
    <>
    <div className='w-[100%] h-[100%] bg-[black]'>
      <Herosection/>
      <Aboutus/>
      <Firefrenz/>
      <Bottomimages/>
    </div>
    </>
  );
}

export default App;
