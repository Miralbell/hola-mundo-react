import React, { Component }  from 'react';
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
    cat: 'https://images.app.goo.gl/7KuajogAMEHAkasWA',
    dolphin: 'https://images.app.goo.gl/Eo4kaMkF168DZJyaA',
    panda:'https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG',
}

class AnimalImages extends Component {
    state = {src: ANIMAL_IMAGES[this.props.animals]}
    render () {
        return (<div>
            <p>Selected {this.props.animals}</p>
            <img
            alt={this.props.animals}
            src={this.state.src}
            width='250'
            ></img>
            
        </div>)
    }
}

AnimalImages.propTypes = {
    animals: PropTypes.oneOf(['cat', 'dolphin', 'panda'])
}

AnimalImages.defaultProps = {
    animals: 'panda'
}

export default class EjemploCicloDeActualización extends Component {
    render () {
        return (<div>
            <h1>Ejemplo de actualización</h1>
            <AnimalImages/>
            </div>
        )
    }
}