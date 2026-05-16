 import React from "react";
 import Header from "./Header";
 import Body from "./Body"
// import MainContent from "./MainContent";
// export default function App() {
//   return (
//     <div>
//       <Header />
//       <MainContent />
      
//     </div>
//   );
// }


export default function App(){

  const [userName] = React.useState("Batoul");

  return(
    <main>
        <Header userName={userName}/>
        <Body userName={userName}/>
    </main>
  )
}