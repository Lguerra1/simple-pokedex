import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inventory: [],
            front: [],
            back: [],
            front_female: [],
            back_female: []
        }
    }

    pokeClick() {
        var random = Math.floor((Math.random() * 900) + 1)
        axios.get(`https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/` + random)
            .then(res => {
                console.log(res)
                this.setState({
                    inventory: res.data,
                    front: res.data.sprites.front_default,
                    back: res.data.sprites.back_default,
                    front_female: res.data.sprites.front_female,
                    back_female: res.data.sprites.back_female
                })
            })
    }
    render() {
        let showPokemon = () => {
            return <Product
                name={this.state.inventory.name}
                order={this.state.inventory.order}
                height={this.state.inventory.height}
                weight={this.state.inventory.weight}
                front={this.state.front}
                back={this.state.back}
                front_female={this.state.front_female}
                back_female={this.state.back_female}
            />

        }



        return (
            <div>
                <img className="main_image" src="https://vignette.wikia.nocookie.net/nonsensopedia/images/1/17/PoK%C3%A9MoN.jpg/revision/latest/scale-to-width-down/640?cb=20111109211622" alt="" />
                <button onClick={() => this.pokeClick()}><img className="pokebutton" src="https://p5.zdassets.com/hc/theme_assets/1051539/200290428/PGoPlus_Press.gif"/></button>
                {showPokemon()}

            </div>
        )
    }
}
