import React from 'react';


class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {term: ''};
    }

    render() {
        return (
            <div>
                <input onChange={e => this.setState({ term: e.target.value})} />
                Value of variable: {this.state.term}
            </div>
        );
    }
}

export default SearchBar;