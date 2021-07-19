import React, { Component } from 'react'
import SubmitButton from './SubmitButton';

export default class Account extends Component {

    render() {
        return (
            <div className="m-5">
                <form style={{ marginLeft: 300, marginRight: 300 }}>
                    <div className="input-group mb-5">
                        <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Sign in with Google" />
                    </div>
                    <div className="jumbotron text-center mb-5">
                        <em className="text-center">OR</em>
                    </div>
                    <div className="input-group mb-5">
                        <div className="input-group-append">
                            <span className="input-group-text">@</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Your Email" />                        
                    </div>
                    
                    <div className="input-group mb-5">
                        <div className="input-group-append">
                            <span className="input-group-text">*</span>
                        </div>
                        <input type="password" className="form-control" placeholder="Create Password" />                        
                    </div>
                    <div className="input-group mb-5">
                        <SubmitButton/>
                    </div>                    
                </form>
            </div>
        )
    }
}
