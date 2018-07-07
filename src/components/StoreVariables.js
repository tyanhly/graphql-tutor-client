import React, {Component} from 'react';

class StoreVariables extends Component {
    render() {
        console.log(this.props.storeState);
        return (
            <div style={{background: '#a99', position: 'fixed', top:0,right:0, width: '500px', height:'200px'}}>
                <pre>
                {JSON.stringify(this.props.storeState, null, 4)}
                </pre>
            </div>
        );
    }
}

export default StoreVariables;
