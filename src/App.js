import React from 'react'
import Hooks from './Components/Hooks/Hooks'
import Hocs from './Components/HOCS/Hocs'
import Counter from './Components/Hooks/Counter'
import RenderProps from './Components/RenderProps/RenderProps'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header-text">React 7 Lecture - Advanced React</h1>
      </header>
      <Counter/>
      <Hooks />
      <Hocs />
      <RenderProps />
    </div>
  )
}

export default App

//The Render Prop example written out
//<RenderProps render={() => {
//   <div>I am the captain now</div>
// }}/>

{/* 
<Switch>
  <Route exact path='/' component={RenderProps}/>
  <Route render={() => {
    <div>Page 4040 Not Found</div>/>
    instead of putting a component in, this is a way how Render Props could be used
</Switch> 
*/}