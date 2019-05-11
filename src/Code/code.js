import React from 'react';
import './code.scss';

class Code extends React.Component{
    render(){
        var game =  new FileReader();
        game.readAsText();
        return(
            <div title="Code Section" id="code" >
                {game.result}
            </div>
        )
    }
}

export default Code;