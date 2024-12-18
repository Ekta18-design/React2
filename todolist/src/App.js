
import './App.css';
import {useState} from 'react';
import { tabs } from './Data/tabs';


function App() {

  let [todolist,setTodolist] = useState([]);
  let [activeTabs,setactiveTabs] = useState(0);
  let [activeContent,setActiveContent] = useState(tabs[0])
  
  let changeData =(index)=>{
    setactiveTabs(index)
    setActiveContent(tabs[index])
  }

  let saveToDoList=(event)=>{
   
    let toname =event.target.toname.value;
    if(!todolist.includes(toname))
      {
      let finalDolist=[...todolist,toname]
      setTodolist(finalDolist)
    }
    else{
      alert("Todo name already exist..")
    }
    event.preventDefault();
  }
  let list=todolist.map((value,index)=>{
    return(
      <ToDoListItems value={value} key={index} 
      indexNumber={index} todolist={todolist}
      setTodolist={setTodolist}>
  
      </ToDoListItems>
    )
  })
  return (
    <div className="App">
      <div className='tabsOuter'>
        <h1 style={{textAlign:'left'}}>Tab Navigation</h1>
        <ul>
         {tabs.map((tabsItem,index)=>{
          return(<li>
            <button onClick={()=>changeData(index)} className={activeTabs==index ? 'activeButton' : ''}>{tabsItem.title}</button>
          </li>)
         })}
        </ul>

        {activeContent!==undefined ?
        <p>
          {activeContent.description}
        </p>
        :
        ''
        }
      </div>
     <h1>ToDo List</h1>
     <form onSubmit={saveToDoList}>
        <input type="text" name='toname'/>
        <button>Save</button>
     </form>
     <div className='outerDiv'>
      <ul>
        {list}
      </ul>
     </div>
    </div>
  );
}

export default App;

function ToDoListItems({value,indexNumber,todolist,setTodolist})
{
  let deleteRow=()=>{
   let finalData = todolist.filter((v,i)=>i!=indexNumber)
   setTodolist(finalData)
  }
  return(
    <li>{indexNumber+1} {value}<span onClick={deleteRow}>&times;</span></li>
  )
}
