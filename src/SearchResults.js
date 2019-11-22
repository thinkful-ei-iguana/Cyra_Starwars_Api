import React from 'react'

function SearchResults(props) {
    const results = props.results.map(result=>{
        const keys = Object.keys(result)
        return (<ul>
            {keys.map(key=><li>{`${key}: ${result[key]}`}</li>)}
        </ul>)
    })

    return (
        <div className='results'>
            {results}
        </div>
    );
}

export default SearchResults