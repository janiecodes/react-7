import React from 'react'
import '../style.css'
import Toggle from './Toggle';
import ToggleRenderProps from './ToggleRenderProps'
import ToggleRPC from './ToggleRPC'

const RenderProps = props => {
  return (
    <section className="advanced-react-section">
      <h1>
        Render Props
        <a
          href="https://reactjs.org/docs/render-props.html"
          rel="noopener"
          target="__blank"
        >
          Docs
        </a>
      </h1>
      <Toggle>
        <div>I am the child of Toggle</div>
      </Toggle>
      <ToggleRenderProps render={({show, setShow, style}) => {
        return (<div>{show && <h1>This is Toggle Render Props</h1>}
        <button style={style} onClick={() => setShow(!show)}>
          Show/Hide
        </button>
        </div>
        )
      }}
      />

      <ToggleRPC>
        {({show, setShow, style}) => {
          return (<div>{show && (<h1>I got an A on my origami assignment when I turned my paper into my teacher</h1>)}
          <button style={style} onClick={() => setShow(!show)}>
            Show/Hide
          </button>
          </div>
          )
        }
      }
      </ToggleRPC>
    </section>
  )
}
export default RenderProps

//Render props refer to a technique for sharing code between components by passing a render prop that is a function 
//that returns a React element
//The receiving component then invokes this function instead of implement its own render logic.
//