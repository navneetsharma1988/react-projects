function customRender(reactElement, container) {
    // v1.0
    /**
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    domElement.setAttribute('title', reactElement.props.title)
    container.appendChild(domElement)
    */
    
    // v2.0
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}



const reactElement = {
    type: 'a',
    props: {
        href: 'https://platzi.com',
        target: '_blank',
        title: 'Ir a platzi'
    },
    children: 'Click me to go to Platzi'
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)

