import React, {Component} from 'react';

import Input from './input';
class Card extends Component {

    constructor() {
        super()
        this.state = {
            color: '',
            pluralNoun: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value});
    }
    render() {
        return(
            <div className="card">
                { Input("Color", this.state.color, this.handleInputChange, "color") }
                { Input("Plural Noun", this.state.pluralNoun, this.handleInputChange, "pluralNoun") }
            </div>
        )
    }
}

export default Card;