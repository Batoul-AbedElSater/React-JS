import "../Styles.css"
import p from '../assets/p.jpeg'
function Navbar() {
  return(
    <header>
        <nav>
            <img src={p} alt="Batoul's Vibe" />
            <span >ByBATOUL </span>
        </nav>
    </header>
  )
}

export default Navbar;