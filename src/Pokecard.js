import React, {Component} from 'react'
import './Pokecard.css';

class Pokecard extends Component {
    render(){
        return (
            <div className="Pokecard">
                <p className="Pokecard-title">{this.props.name}</p>
                <img src={this.props.img} alt="{this.props.name}"/>
                <p>Type: {this.props.type}</p>
                <p>Exp: {this.props.base_experience}</p>
            </div>
        )
    }
}

export default Pokecard;

