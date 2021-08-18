import React, { Component } from 'react'

export default class Forms extends Component {
    constructor () {
        super()
        this.state = {
            inputName: '', 
            inputTwitter: '@',
            inputTerms: 'true',
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)

    }
    handleChange = (e) => {
        console.log('handleChange')
        console.log(e.target.checked)
        this.setState({inputTerms: e.target.checked})
    }

    render () {
        return (
            <div>
                <h4>Formularios</h4>
                <form onSubmit={this.handleSubmit} >
                    <p>
                        <label htmlFor='name'>Nombre :</label>
                        <input
                        id='name'
                        name='User Name'
                        onChange={e => this.setState({inputName: e.target.value})}
                    placeholder='introduce el nombre'
                        ref={inputElement => this.inputName = inputElement}
                        value={this.state.inputName}/>
                    </p>
                    <p>
                        <label>Twitter :</label>
                        <input
                        id='twitter'
                        name='twitteraccount'
                        placeholder='introduce el twitter'
                        value={this.state.inputTwitter}
                        onChange={e => this.setState({inputTwitter: e.target.value})}/>
                    </p>
                    <p>
                        <label>Terminos y condiciones</label>
                        <input
                        type='checkbox'
                        onChange={this.handleChange}
                        id='twitter'
                        name='twitteraccount'
                        placeholder='introduce el twitter'
                        checked={this.state.inputTerms}/>/>
                    </p>
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}