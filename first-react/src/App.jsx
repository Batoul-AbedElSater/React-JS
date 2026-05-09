import Header from "./Components/Header"
import Entry from "./Components/Entry"
import data from "./data"


export default function App(){
    const entryElements= data.map((entry) =>{
        return(
          <Entry 
              key ={entry.id}
              // img ={entry.img}
              // location = {entry.location}
              // country = {entry.country}
              // googleMapsLink ={entry.googleMapsLink}
              // title = {entry.title}
              // date = {entry.date}
              // text = {entry.text}
              {...entry}
          />
        )
    })
  return (
    <>
      <Header />
      <main>
        {entryElements}
      </main>
       
    </>
    
  )
}