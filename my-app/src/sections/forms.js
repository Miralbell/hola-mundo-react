import React, { Component } from 'react'

export default class Forms extends Component {
    handleClick (e) {
        const name = document.getElementById('name').value
        const email = document.getElementById('twitter').value 
        console.log({name,email})

    }
    render () {
        return (
            <div>
                <h4>Formularios</h4>
                <form>
                    <p>
                        <label>Nombre :</label>
                        <input
                        id='name'
                        name='User Name'
                        placeholder='introduce el nombre'/>
                    </p>
                    <p>
                        <label>Twitter :</label>
                        <input
                        id='twitter'
                        name='twitteraccount'
                        placeholder='introduce el twitter'/>
                    </p>
                    <button onClick= {this.handleClick}>Enviar</button>
                </form>
            </div>
        )
    }
}