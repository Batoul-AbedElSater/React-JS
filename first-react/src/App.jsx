import React, { useState } from "react"
export default function App(){

  const[isGoingOut, setIsGoingOut]= React.useState(false)

function changeMind(){
  setIsGoingOut(prev => !prev)
}
 

  return(
    <main>
       <h1 > Do I feel like going out tonight?</h1>
       <button onClick={changeMind}>{isGoingOut ? "Yes" : "No"}</button>
    </main>
  )


}