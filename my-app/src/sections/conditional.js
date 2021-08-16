import React, { Component } from 'react'


class ComponenteA extends Component {
    render () {
        return <p>Componenete A</p>
    }
}

class ComponenteB extends Component {
    render () {
        return <p>Componenete B</p>
    }
}

function UseConditionalRendering (mostrarA) {
    if (mostrarA) {
        return <ComponenteA />
    }
    return <ComponenteB />
}


export default class ConditionalSection extends Component {
    constructor () {
        super()
        this.state = {mostrarA: true}
    }
    render () {
        return (
        <div>
            <h4>Conditional Rendering</h4>
            {UseConditionalRendering(this.state.mostrarA)} 
        </div>
        )
    }
}