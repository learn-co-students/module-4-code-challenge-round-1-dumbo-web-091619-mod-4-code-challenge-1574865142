import React, { Component } from 'react';

export class Search extends Component {

    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
        this.props.filterBots(event.target.value)
    }

    render() {
        return (
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="All">All</option>
                <option value="Assault">Assault</option>
                <option value="Support">Support</option>
                <option value="Defender">Defender</option>
            </select>
        )
    }
}

export default Search
