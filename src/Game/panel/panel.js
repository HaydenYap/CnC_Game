import React from 'react'
import './panel.scss'
import { FaCaretUp, FaCaretDown, FaCaretLeft, FaCaretRight, FaPlus, FaMinus } from 'react-icons/fa'

class Panel extends React.Component{
    
    render(){
        return(
            <div id='panel'>
                <div className='col-12 py-3'>
                    <div title="Current Score Field">
                        <div title="Score Title" className='scoreTitle'>
                            Score:
                        </div>
                        <div className='score px-1'>
                            {this.props.score.current}
                        </div>
                    </div>
                    <div title="High-Score Field" className='scoreTitle'>
                        <div title="High-Score Title">
                            High-Score:
                        </div>
                        <div className='score px-1'>
                            {this.props.score.high}
                        </div>
                    </div>
                </div>

                <div className='col-12 py-3'>
                    <div title="Score Title" className='scoreTitle'>
                        Speed:
                    </div>
                    <div className='score px-1'>
                        {this.props.snake.speed}
                    </div>
                    <div className='btn btn-outline-light col-6 my-2' onClick={this.props.speedDown}>
                        <FaMinus />
                    </div>
                    <div className='btn btn-outline-light col-6 my-2' onClick={this.props.speedUp}>
                        <FaPlus />
                    </div>
                </div>

                <div className='col-12 py-3'>
                    <div className='col-4'></div>
                    <div className='btn btn-outline-light col-4' onClick={() => { this.props.changeDirection('up')}}>
                        <FaCaretUp />
                    </div>
                    <div className='col-4'></div>
                    <div className='btn btn-outline-light col-4' onClick={() => { this.props.changeDirection('left')}}>
                        <FaCaretLeft />
                    </div>
                    <div className='btn btn-outline-light col-4' onClick={() => { this.props.changeDirection('down')}}>
                        <FaCaretDown />
                    </div>
                    <div className='btn btn-outline-light col-4' onClick={() => { this.props.changeDirection('right')}}>
                        <FaCaretRight />
                    </div>
                </div>

                <div className='col-12 py-3'>
                    <div className='btn btn-outline-light d-block my-2' onClick={this.props.resetBoard}>
                        Restart or 'r'
                    </div>
                    <div className='btn btn-outline-danger d-block my-2' onClick={this.props.endGame}>
                        Stop or 'ESC'
                    </div>
                </div>
            </div>
        )
    }
}

export default Panel;
