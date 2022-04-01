import {BsSearch}from 'react-icons/bs';
import './Input.css'
function Input({value,handleChange}) {
  return (
        <div className="input">
            <input type="text" 
                value={value} 
                onChange={handleChange}
                placeholder='Search for a country'/>   
                <BsSearch className='icon'/>
        </div>
  )
}

export default Input