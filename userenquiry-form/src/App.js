
import { useState } from 'react';
import './App.css';
import { Container, Row,Col,Table} from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer,toast} from 'react-toastify';
function App() {

  let[formData,setFormData]=useState(
    {
      uname:'',
      uemail:'',
      uphone:'',
      umessage:'',
      index:''
    }
  )
  let[userData,setUserData] = useState([])
  let getValue=(event)=>{
    let oldData={...formData}
    let inputName=event.target.name;
    let inputValue=event.target.value;
    oldData[inputName]=inputValue;
    setFormData(oldData)
    
  }

  let handleSubmit=(event)=>{
    let currentUserFormdata={
      uname:formData.uname,
      uemail:formData.uemail,
      uphone:formData.uphone,
      umessage:formData.umessage,
    }
    let checkFilterUser=userData.filter((v)=>v.uemail==formData.uemail ||v.uphone==formData.uphone)
    if(checkFilterUser.length==1){
      toast.error("Email or Phone already exist..")
    }
    else{
      let oldUserData=[...userData,currentUserFormdata]
    setUserData(oldUserData)
    setFormData(
      {
        uname:'',
        uemail:'',
        uphone:'',
        umessage:'',
        index:''
      }
    )
   }
    event.preventDefault();
  }

    console.log(formData)
    let deleteRow=(indexNumber)=>{
      let filterDataafterDelete=userData.filter((v,i)=>i!=indexNumber)
      setUserData(filterDataafterDelete)

    }


  return (
    <Container fluid>
      <ToastContainer />
      <Container>
        <Row>
          <Col className='text-center py-5'>
          <h1>Enquiry Now</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
          <form onSubmit={handleSubmit}>
            <div className='pb-3'>
              <label className='form-label'>Name</label>
              <input type='text' onChange={getValue} value={formData.uname} name='uname' className='form-control'/>
            </div>
            <div className='pb-3'>
              <label className='form-label'>Email</label>
              <input type='email' onChange={getValue} value={formData.uemail} name='uemail' className='form-control'/>
            </div>
            <div className='pb-3'>
              <label className='form-label'>Phone</label>
              <input type='text' onChange={getValue} value={formData.uphone} name='uphone' className='form-control'/>
            </div>
            <div className='mb-3'>
              <label for='' className='form-label'>Message</label>
              <textarea name='umessage' onChange={getValue} value={formData.umessage} className='form-control' id='' rows="3"/>
            </div>
            <button className='btn btn-primary'>
            {
              formData.index!=="" ? 'Update' : 'Save'
            }

            </button>
          </form>
          </Col>
            <Col lg={7}>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Message</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {userData.length>=1 ? 
          userData.map((userobj,index)=>{
            return(
              <tr key={index}>
              <td>{index}</td>
              <td>{userobj.uname}</td>
              <td>{userobj.uemail}</td>
              <td>{userobj.uphone}</td>
              <td>{userobj.umessage}</td>
              <td>
                <button>Update</button>
                <button onClick={()=>deleteRow(index)}>Delete</button>
              </td>
            </tr>

            )
          })
       
        :
        <tr>
          <td colSpan={6}>No Data Found</td>
        </tr>
        
      }
       
       
      </tbody>
    </Table>
            
            </Col>

        </Row>
      </Container>

    </Container>
  );
};

export default App;
