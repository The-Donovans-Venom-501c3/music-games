import React from 'react';
import './Home.scss';



const Button = (props) => {
    return <div className="Button-Position" >
        <button className="HomeButton">
            <div className="Button-Layout">

                <div className='Img-Layout'>
                    <img src={props.icon} id = "button-icon" />
                </div>

                <div className="Text-Layout">

                    <span id="title">{props.title}
                    </span>

                    <span id="tips">{props.tips}</span>
                </div>

                {/* {props.children} */}
            </div>
        </button>
    </div>
}

export { Button };