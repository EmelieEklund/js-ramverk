import Movie from './Movie';

export default function Movies({movies, deleteItem}) {    

    return (
        <div>
            <ul className="list-group mt-3">
                { movies.map(movie => <Movie key={movie.id} item={movie} deleteItem={deleteItem} />) } 
            </ul>
        </div>
    )
}