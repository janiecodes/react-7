//Toggle Render Props with Children

import {useState} from 'react';
import styleHOC from '../HOCS/styleHOC';

const ToggleRPC = props => {
    const [show, setShow] = useState(false)
    const {style, children} = props;

    return children({show, setShow, style})
}

export default styleHOC(ToggleRPC)