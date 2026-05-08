import ReactDOM from "react-dom/client";


function App(){
    const firstName = "batoul"
    const lastName = "Abed El Sater"
    const hours = new Date().getHours() % 12
    return(
        <>
            <h1>hello {firstName}  {lastName}</h1>
            <h2> it is currently about {hours}</h2>
        </>
        
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)