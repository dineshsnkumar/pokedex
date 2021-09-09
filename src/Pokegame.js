import React, {Component} from 'react';
import Pokedex from './Pokedex'


/*
1. Shuffle the pokemonList
2. Split into 2 decks 
3. Pass the array as props to Pokedex 
4. Cal total exp of each deck
5. Return the winner to Pokedex card
*/
class Pokegame extends Component{
    static defaultProps= {
        pokemonList : [
           {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
           {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
           {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
           {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
           {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
           {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
           {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
           {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
         ]
   }
    render(){
        let sortedPokemonList = this.props.pokemonList.sort(() => Math.random()-0.5)
        let firstRandomList = sortedPokemonList.slice(0,4)
        let secondRandomList = sortedPokemonList.slice(4,);
        let firstDeckTotalExp = this.calulateTotalExperience(firstRandomList);
        let secondDeckTotalExp = this.calulateTotalExperience(secondRandomList);
        let isFirstWinner = firstDeckTotalExp> secondDeckTotalExp ? true: false;
        let IsSecondWinner = firstDeckTotalExp< secondDeckTotalExp ? true: false;


        return (
            <div>
                <Pokedex pokemonList= {firstRandomList} winner= {isFirstWinner} />
                <Pokedex pokemonList= {secondRandomList} winner = {IsSecondWinner} />
            </div>);
    }


    // calculate total experience of each hand
    calulateTotalExperience(array){
        let totalExp =0
        for( let i=0; i<array.length; i++){
            totalExp +=array[i].base_experience;
        }
        return totalExp;
    }    

}

export default Pokegame;