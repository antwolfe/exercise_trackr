import React, { Component } from  'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar=brand">ExcerTracker</Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <Link to="/list" className="nav-link">Exercises</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Exercise Log</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/user" className="nav-link">Create User</Link>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }
}; 


//Failed Bootstrap
 // <nav className="navbar navbar-dark bg-dark">
            //     <div className="container-fluid">
            //         <Link to="/" className="navbar-brand">ExerTracker</Link>
            //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            //         <span className="navbar-toggler-icon"></span>
            //         </button>
            //         <div className="collapse navbar-collapse" id="navbarText">
            //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            //                 <li className="nav-item">
            //                 <Link to="/" className="nav-link active" aria-current="page">Exercises</Link>
            //                 </li>
            //                 <li className="nav-item">
            //                 <Link to="/create" className="nav-link">Create Exercise Log</Link>
            //                 </li>
            //                 <li className="nav-item">
            //                 <Link to="/user" className="nav-link">Create User</Link>
            //                 </li>
            //             </ul>
            //             <span className="navbar-text">
            //                 But a search form here
            //             </span>
            //         </div>
            //     </div>
            // </nav>