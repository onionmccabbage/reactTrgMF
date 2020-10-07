import React from 'react';

function Home(props) {
    return (
        <div className="container">
            <h2>Customer Relationship Management - Home</h2>
            <div className="row">
                <div className="col-4">
                    <button className="btn btn-lg btn-primary col-12">Leads</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-lg btn-primary col-12">Prospects</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-lg btn-primary col-12">Customers</button>
                </div>
            </div>
        </div>
    )
}

export default Home;