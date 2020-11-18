import React, {useState} from 'react'
import styleHOC from '../HOCS/styleHOC';


const ToggleRenderProps = props => {

    const [show, setShow] = useState(false);
    const {style} = props;


return <div>{props.render({show, setShow, style})}</div>

}

export default styleHOC(ToggleRenderProps)