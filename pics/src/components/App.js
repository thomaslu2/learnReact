import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component {
    async onSearchSubmit(term) {
        const response = await axios
            .get('https://api.unsplash.com/search/photos', {
                params: { query: term },
                headers: {
                    Authorization: 'Client-ID 2ebd98c2fdf73064aee01fee3bc602f9518f7292e68aa479f60f0de422a52a10'
                }
            });
        console.log(response.data.results);
    }
    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;