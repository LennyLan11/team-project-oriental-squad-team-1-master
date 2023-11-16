import React from 'react'
import './AdminMovieTable.css'

function AdminMovieTable({ movies }) {
    return (
        <div className='movie-table-container'>
            <table className='movie-table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Cover</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie, index) => (
                        <tr key={movie._id}>
                            <td> { index + 1 } </td>
                            <td>
                                <img src={movie.picture} alt={movie.title} className="movie-cover" />
                            </td>
                            <td>{ movie.title }</td>
                            <td>{ movie.description }</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminMovieTable
