import React, { Component } from 'react'


class LoginButton extends Component {
    render () {
        return <button>Iniciar Sesión</button>
    }
}

class LogoutButton extends Component {
    render () {
        return <div>
            <h1>Biendenido Usuario</h1>
            <button>Cerrar Sesión</button>
        </div>
    }
}

export default class ConditionalSection extends Component {
    constructor () {
        super()
        this.state = {isUserLogged: false}
    }
    render () {
        return (
        <div>
            <h4>Conditional Rendering</h4>
            {this.state.isUserLogged 
        ? <LoginButton /> 
        : <LogoutButton />} 
        </div>
        )
    }
}