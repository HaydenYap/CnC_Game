import React from 'react';
import './nav.scss';

class Nav extends React.Component{
    render(){
        var title = "Home Directory"
        return(
            <div title="Navigation Bar" id="nav" className="row">
                <div id="navHome" title="Home Directory" className="col-3 h1"> 
                    {title}
                </div>
            </div>
        )
    }
}

export default Nav;