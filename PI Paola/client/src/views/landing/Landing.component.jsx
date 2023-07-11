import { NavLink } from "react-router-dom"
import styles from "./Landing.module.css"

function Landing () {
    return (

      <nav>
        <div>
          <div className={styles.overlay}>
          </div>
          <div className= {styles.title}>
          <h1>PI PAOLA VARGAS</h1>
          </div>
        
        <button className={styles.buttonContainer}>
          <NavLink to="/home" className={styles.buttonText}>SI</NavLink>
        </button>
        </div>
      </nav>
    )
  };

  export default Landing