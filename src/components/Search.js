import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        const {handleChange, handleSubmit, search} = this.props;
        return (
            <div className="container">
            <div className="row">
                <div className="col-10 mx-auto col-md-8 text-center">
                    <h1 className="text-slanted text-capitalize">
                        search recipes with {" "} 
                        <strong className="orangeText"> Recipe App</strong>
                    </h1>
                    <form action="" className="mt-4">
                        <label htmlFor="search" className="text-capitalize">type recipes seperated by commas</label>
                        <div className="input-group">
                            <input type="text" name="search" className="form-contol" placeholder="chicken, onions, carrrots" value={search} onChange={handleChange}/>
                        <div className="group-input-append"></div>
                        <button type="submit" className="input-group-text bg-primary text-white" onClick={handleSubmit}>
                        Search <i className="fas fa-search"></i>
                        </button>
                        </div>
                    </form>
                </div>
            </div>
                
            </div>
        )
    }
}
