import {HiOutlineMoon,HiMoon} from 'react-icons/hi'
import './header.css'
function Header({handleclick,fillMoon}) {
  return (
    <header>
        <h2>Where in the world?</h2>
        <div className='dark-mode' onClick={handleclick}>
            {fillMoon?<HiMoon style={{color:'white'}}/>:<HiOutlineMoon />}
            <span>Dark Mode</span>
            </div>
    </header>
  )
}

export default Header