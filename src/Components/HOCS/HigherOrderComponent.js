import React from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const HigherOrderComponent = WrappedComponent => {
    //HigherOrderComponent is a function that takes in a WrappedComponent 
    //this is where you add the functionality or data to the component 
    //then it does something to the component

    const otherProp = 'cole'

    return props => {
        return <WrappedComponent {...props} name={otherProp} /* You can add additional props here *//>
    }
}

export default HigherOrderComponent


/*
HOC example with withRouter
const FunctionName = (Header) => {

    const location = {}
    const match = {}
    const history = {}

return(props) => {
   return (
    <WrappedComponent
    location={location}
    match={match}
    history={history}
    />
    )
   }
}*/
