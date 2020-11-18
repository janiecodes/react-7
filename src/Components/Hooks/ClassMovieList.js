import {Component} from 'react';

class ClassMovieList extends Component {
    constructor(){
        super();

        this.state = {
            movies: [
            'Shrek',
            'Shrek 2',
            'Shrek 3',
            'Shrek the Halls'
            ],
            input: ''
        };
    }

    render() {
        const mappedMovies = this.state.movies.map((movie, index) => {
            return <h2 key={movie + index}>{movie}</h2>
        })
        return(
            <div>
                {mappedMovies}
                <input 
                value={this.state.input}
                type='text'
                onChange={(e) => this.setState({input: e.target.value})}
                />
                <button onClick={() => {
                    this.setState({movies: [...this.state.movies, input], input: ''})
                }}>Add Movie</button>
            </div>
        )
    }
}

export default ClassMovieList

//Hooks are better, the ClassMovieList Class Component has multiple functions to run unlike the MovieList Component using Hooks