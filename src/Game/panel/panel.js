import React from 'react'
import './panel.scss'

class Panel extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props)
    }

    render(){
        return(
            <div id='panel' className='p-3'>
                <div title="Current Score Field">
                    <div title="Score Title" className='scoreTitle'>
                        Score:
                    </div>
                    <div className='score px-1'>
                        {this.props.score.current}    
                    </div>
                </div>
                <div title="High-Score Field" >
                    <div title="High-Score Title">
                        High-Score:
                    </div>
                    <div className='score px-1'>
                        {this.props.score.high}
                    </div>
                </div>

                <div className='btn-primary' onClick={this.props.resetBoard}>
                    Restart or 'r'
                </div>
                <div className='btn-primary' onClick={this.props.endGame}>
                    Stop or 'ESC'
                </div>
            </div>
        )
    }
}

export default Panel;