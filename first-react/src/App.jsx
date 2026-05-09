import Joke from './Joke'
function App(){
  return (
   <main>
      <Joke 
      // Setup="I told my wife she was drawing her eyebrows too high." 
      PunchLine = "She looked surprised."
      />
      <Joke 
      Setup="Why don't scientists trust atoms?" 
      PunchLine="Because they make up everything."
      />
      <Joke 
      Setup=" I'm reading a book on anti-gravity." 
      PunchLine="It's impossible to put down."
      />
      <Joke  
      Setup="What do you call a fake noodle?"
      PunchLine="impasta"
       />
      <Joke  
      Setup="I used to be a baker, but I couldn't make enough dough." 
      PunchLine="Now I'm just bread-less."
      />

   </main>
    
  )
}

export default App