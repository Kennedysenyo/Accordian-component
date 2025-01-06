
import './App.css';
import { useState } from "react"
import AccordianComponent from './components/AccordianComponent';
import { data } from "./data"
import { clsx } from 'clsx';


const App = () => {

  const [selected, setSelected] = useState([]);
  const [selectMultiple, setSelectMultiple] = useState(false)
  
  function toggleMultipleSelect() {
    if(selectMultiple) {
      setSelected([selected[selected.length - 1]])
    }
    setSelectMultiple(prev => !prev)    
  }

  function toggleVisibility(id) {
    if (selectMultiple) {
      setSelected( prevSelected => prevSelected.includes(id) ? prevSelected.filter(num => num !== id) : [...prevSelected, id])
    }else {
      setSelected( prevSelected => prevSelected.includes(id)? [] : [id])
    }
   
  }
  
  const accordainComponent = data && data.length > 0 ?  data.map( obj =>  
    <AccordianComponent 
      key={obj.id} 
      id={obj.id}
      question={obj.question} 
      answer={obj.answer} 
      toggleVisibility={toggleVisibility}
      isVisible={selected.includes(obj.id)}
    /> 
  ) : <h1>No Data Available</h1>

  const className = clsx({
    multiple: selectMultiple
  })
  return (
    <main>
    { (data && data.length) ?
     <button 
        onClick={toggleMultipleSelect}
        className={className}
      >
       Multiple Select
      </button> : null
      
    }

     {accordainComponent}
    </main>
  )
}

export default App
