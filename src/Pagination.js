import React from 'react'

function Pagination({goToNextPage, goToPrevPage}) {
    return (
        <div>
            <button onClick={goToPrevPage}>Previous</button>
            <button onClick={goToNextPage}>Next</button>
        </div>
    )
}

export default Pagination
