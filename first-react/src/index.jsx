import ReactDOM from 'react-dom/client'
import React from 'react'

function App(){

    // function handleSubmit(event){
    //     event.preventDefault()
    //     const forEl = event.currentTarget
    //     const forData = new FormData(forEl)
    //     const email = forData.get("email")
    //     console.log(email)
        //gather the info from the form
        //submit it to backend 
    //     forEl.reset()
    // }

    function signUp(formData){
        const email = formData.get("email") //name
        const password = formData.get("password")
        

    }

    return(
        <section>
            <h1>SignUp Form </h1>
            {/* <form action="phpfile.php" onSubmit={handleSubmit} method="post"> */}
            <form action={signUp}>
              
                <label htmlFor='email'>Email :</label>
                <input id='email' type='email' name='email' placeholder='Email'/>
                <br />

                {/* challenge */}

                <label htmlFor='password'>Password:</label>
                <input id='password' type='password' name='password' placeholder='Password'/>

                <br />

                {/* <input type='submit' value="Click"/> */}

                <button>Submit</button>

                
            </form>

        </section>
        
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)