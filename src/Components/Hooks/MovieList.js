import React, {useState} from 'react'

export default () => {
    const [movies, setMovies] = useState([
        'Shrek',
        'Shrek 2',
        'Shrek 3',
        'Shrek the Halls'
    ])

    const [input, setInput] = useState('')

    //One way to do it but this can be more confusing
    //const [state, useState] = useState({movies: [], inout: ''})

    return(
        <div>
            {movies.map((movie, index) => {
                return <h2 key={movie + index} >{movies}</h2> 
                //key is only for React so it knows what you're mapping over
            })}
            <input
            value={input}
            type='text'
            onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => {
                setMovies([...movies, input]) //input just adds a movie to the end 

                //Another way to write it is below but it's longer to code
                // const updatedMovies = [...movies]
                // updatedMovies.push(input)
                // setMovies(updatedMovies)

                setInput('') //this will clear the input box 
            }}>Add Movie</button>
        </div>
    )

}