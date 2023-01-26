import React, { Component } from 'react';

class Welcome extends Component{

    /********** PROPS with Class components **********/

    render() {
        return (
            <div>
                <h3>Name: {this.props.name}</h3>
                <h4>Ninja level: {this.props.ninjaLevel}</h4>
                {this.props.children}
            </div>
            
        )
    }

}

export default Welcome;