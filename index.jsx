import {createRoot} from 'react-dom/client'
const root = createRoot(document.getElementById('root'))
//imperative way    
const h1 = document.createElement('h1')
h1.textContent = 'Welcome to My Awesome Website'
h1.className = 'header'
document.getElementById('root').appendChild(h1)
//declarative way
root.render(
    <h1 className='header'>Welcome to My Awesome Website</h1>
)
// const reactElement = <h1>Hello from JSX!</h1>
// console.log(reactElement)
// root.render(
//     reactElement
// )
