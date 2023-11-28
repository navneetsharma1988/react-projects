import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://platzi.com',
//         target: '_blank',
//         title: 'Ir a platzi'
//     },
//     children: 'Click me to go to Platzi'
// }

const anotherElement = (
    <a href="https://platzi.com" target='_blank' rel="noreferrer">Visit Platzi</a>
)

const anotherUser = 'Chai aur code';

const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank',
        title: 'Click me to visit Google'
    },
    'Click me to go to Platzi',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    
        reactElement
    
)
