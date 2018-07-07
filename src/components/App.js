import React, {Component} from 'react';
import Login from "../containers/Login";
import StoreVariables from "../containers/StoreVariables";

class App extends Component {
    render() {
        return (

            <div className='container'>
                <div className="row mt-5">
                    <div className="col-md-4 offset-md-1">
                        <h2>Login</h2>
                        <Login/>
                    </div>
                </div>
                <StoreVariables/>
            </div>
        );
    }
}

export default App;
