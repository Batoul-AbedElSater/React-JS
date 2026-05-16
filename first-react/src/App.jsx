import React from "react";

export default function App() {
  // const [unreadMessages, setUnreadMessages] = React.useState([])
  const [messages, setMessages] = React.useState(["a","b","c","d"])

  function determineText(){
        
          if(messages.length === 0){
             return "You're all caught up!"
          }else if (messages.length ===1){
              return "You have 1 unread message"
          }else{
             return `You have ${messages.length} unread message`
          }
         
  }
 
  return (
    // <div>
    //   { unreadMessages.length > 0 && //if true display this h1
    //   <h1>You have {unreadMessages.length} unread messages!</h1>}
    //   {  unreadMessages.length === 0 && 
    //   <h1>You have no unread messages!</h1> }

    // </div>

<div>
      <h1>{determineText()}</h1>
      
</div>

    
  );
}
