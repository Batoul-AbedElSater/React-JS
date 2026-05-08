import { createElement } from 'react'
import {createRoot} from 'react-dom/client'
const root = createRoot(document.getElementById('root'))
const reactElement = createElement('h1',null,'hello world')
console.log(reactElement)
root.render(reactElement)

