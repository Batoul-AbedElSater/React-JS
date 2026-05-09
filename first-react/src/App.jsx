import Contact from "./Contact"
import lip  from './assets/lip.jpeg'
import lip2  from './assets/lip2.jpeg'
import lip3  from './assets/lip3.jpeg'
import lip4  from './assets/lip 4.jpeg'
function App(){
  return (
    <div className="cards-wrapper">
        <Contact
          img={lip}
          name = "Lip Gloss"
          price = "15$"
          brand="ByBatoul💄"

         />
        <Contact 
          img={lip2} 
          name = "Lip Gloss"
          price = "20$"
          brand="RedLips❤"
        />
        <Contact 
          img={lip3}
          name = "Lip Gloss"
          price = "25$"
          brand="B 💕 S"
        />
        <Contact 
           img = {lip4}
           name = "Lip Gloss"
           price = "30$"
           brand="ByBatoul💄"
        />
        
    </div>
    
  )
}

export default App