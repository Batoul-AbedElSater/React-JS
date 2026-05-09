import Header from "./Components/Header"
import Entry from "./Components/Entry"
import h from './assets/hanabira mochi.jpeg'
import l from './assets/location.jpeg'
import c from './assets/Cendol.jpeg'
import f from './assets/Creme de Abacate.jpeg'

export default function App(){
  return (
    <>
      <Header />
      <Entry
           img = {{src:h , alt:"hanabira mochi"}}
           location = {{src:l , alt:"location"}}
           country= "Japan"
           googleMapsLink = "https://maps.google.com/?cid=15104443152636885936"
           title = "Hanabira Mochi"
           date = "12 Jan, 2021 - 24 Jan, 2021"
           text = "Hanabira mochi is a delicate Japanese sweet traditionally enjoyed during New Year celebrations and tea ceremonies. Its name means “flower petal mochi,” reflecting its soft pink-and-white appearance. The sweet is made of thin mochi filled with white bean paste and a strip of candied burdock root, symbolizing purity and renewal. It is closely tied to Japanese culture of harmony and aesthetics."
      />
       <Entry
           img = {{src:c , alt:"Cendol"}}
           location = {{src:l , alt:"location"}}
           country= "Indonesia"
           googleMapsLink = "https://maps.google.com/?cid=15104443152636885936"
           title = "Cendol"
           date = "20 Mar, 2020 - 24 April, 2021"
           text = " Cendol is a refreshing dessert popular in Malaysia and Indonesia, often enjoyed as street food. It consists of green pandan-flavored jelly noodles served with coconut milk, palm sugar syrup, and shaved ice. In Indonesia, it is known as dawet and has centuries-old roots in Javanese tradition. In Malaysia, cendol is often topped with red beans or sweet corn, making it a beloved tropical treat."
      />
      <Entry
           img = {{src:f , alt:"Creme de Abacate"}}
           location = {{src:l , alt:"location"}}
           country= "Brazil"
           googleMapsLink = "https://maps.google.com/?cid=15104443152636885936"
           title = "Creme de Abacate"
           date = "19 June, 2010 - 27 July, 2020"
           text = " Creme de Abacate is a Brazilian dessert made from ripe avocados blended with sugar, lime juice, and sometimes condensed milk. The result is a smooth, creamy pudding with a fresh and slightly tangy flavor. It is often served chilled, highlighting Brazil’s tradition of using tropical fruits in simple yet delicious ways. This sweet showcases the versatility of avocado beyond savory dishes."
      />
      
      
      
    </>
    
  )
}