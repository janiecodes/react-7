import React, {useState} from 'react'

import styleHOC from '../HOCS/styleHOC'

//if we click the button, any of it's children will be shown or hidden whether
//or not the button is true or false
const Toggle = (props) => {
    const {style, children} = props;

    const [show, setShow] = useState(false)

    return(
        <div style={style}>
            {show && children} 
            {/* ANOTHER WAY TO WRITE THE TERNARY {show && children ? children : null} */}
            {/* if show and children are true display */}
            <button onClick={() => {
                setShow(!show);
            }}
            style={style}
            >Show/Hide
            </button>
        </div>
    )
}

export default styleHOC(Toggle)