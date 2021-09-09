import React, {Component} from 'react'
import Pokecard from './Pokecard';
import './Pokedex.css'

class Pokedex extends Component{
    render(){
        return (
            <div className="Pokedex">
                {this.props.pokemonList.map(pokemon => (
                                        <Pokecard name={pokemon.name} 
                                                img ={ "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + this.convertID(pokemon.id) +'.png' }
                                                type= {pokemon.type}    
                                                base_experience= {pokemon.base_experience}                              
                                        />
                                ))}
            </div>
        )
    }

    // It creates padding for the API
    convertID(id){
        id= id.toString();
        while(id.length<3){
            id= "0"+id
        }
        return id;
    }
}

export default Pokedex;
