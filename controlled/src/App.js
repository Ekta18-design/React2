
import './App.css';
import { useState } from 'react';


function App() {
  let[uname,setUname]= useState('')
  let[password,setPassword]= useState('');
  let handleSubmit=(event)=>{

    event.preventDefault();
  }
  let getUname=(event)=>{
    setUname(event.target.value)

  }
  return (
    <div className="App">
     <div className='container'>
      <div className='row'>
        <div className='col-lg-6'>
          <form onSubmit={handleSubmit}>
            <div className='text-start my-3'>
              <label>UserName</label>
              <input type='text' onChange={(event)=>setUname(event.target.value)} className='form-control' value={uname}/>
            </div>
            <div className='text-start my-3'>
              <label>Password</label>
              <input type='text' onChange={(event)=>setPassword(event.target.value)} value={password}className='form-control'/>
            </div>
            <div className='text-start my-3'>
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
