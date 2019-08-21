import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null, errorMessage: ''};
    }

    //React says we have to define render
    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude});
            },
            err => {
                this.setState({ errorMessage: err.message });
            }
        );
        return <div>Latitude: {this.state.lat} </div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)