import { useState } from 'react';
import './App.css';


function App() {
  
    let[modalstatus,setModalstatus]=useState(false);
 
  return (
    <div className="App">
      <button className='en' onClick={() => setModalstatus(true)}>Enquire Now</button>
      <div onClick={() => setModalstatus(false)} className={`modalOverLay ${modalstatus?'modalShow':''}`}></div>
      <div className={`ModalDiv ${modalstatus?'showModalDiv':''}`}>
        <h2>Enquiry Now <span  onClick={() => setModalstatus(false)}>&times;</span> </h2>
      </div>
    </div>
  );
};

export default App;
