import styleHOC from './styleHOC';
//styleHOC is not capitalized nbc it's a function even though it's called a Higher Order Component

const GoodButton = (props) => {
    return (
    <button {...props} style={props.style}>
        {props.text ? props.text : 'Good Button'}
    </button>
    )
}

export default styleHOC(GoodButton)
