import React from 'react'
import SearchResults from './SearchResults'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state={results:[]}
    }
    base='https://cors-anywhere.herokuapp.com/swapi.co/api/'
    characterSearch='people/?search='
    apiSearch = (term) => {
        fetch(this.base+this.characterSearch+term)
            .then(response=>{
            if(response.ok) return response.json()
            else throw new Error(response)
        })
        .then(json=> this.setState({results:json.results}))
        .catch(error=> this.setState({results: `Im sorry Dave I cannot let you do that: ${error.message}`}))
    }
    render () {
        return (
        <>
            <main className="StarWarsApi">
                <h1>StarWars Search!</h1>
            <form onSubmit={(e)=> {
                e.preventDefault()
                this.apiSearch(e.target.characterSearch.value)
            }}>
                <label htmlFor="characterSearch">Search Character</label>
                <input type="text" name="characterSearch" id="characterSearch" required/>
                <button type="submit">Search</button>
            </form>
            <div className="results">
            <SearchResults results={this.state.results}/>
            </div>
            </main>
        </>
        )
    }
}
export default Search