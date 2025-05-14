import React, { useRef} from 'react';
import Movies from './Movies';
import Button from './Button';

export default function AddMovieForm({movies, setMovies}) {


    const inputTitleRef = useRef();
    const inputGradeRef = useRef();

    function addItem() {
        const title = inputTitleRef.current.value.trim();
        const grade = Number(inputGradeRef.current.value);

        const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;        

        if (title === "" || grade === 0){
            alert("Både filmtitel och betyg behöver anges!")
            return
        }
            
            setMovies([...movies, {
                id: newId,
                title: title,
                grade: grade
            }]);

            inputTitleRef.current.value = "";
            inputGradeRef.current.value = 0;    
    }
    

    return (
        <div>
            <form>
                <div class="input-group mb-3">
                    <span class="input-group-text">Titel:</span>
                    <input className="form-control" type="text" placeholder="Titel här..." ref={inputTitleRef} />
                </div>

                <div class="input-group mb-4">
                    <span class="input-group-text">Betyg:</span>
                    <select className="form-control" ref={inputGradeRef}>
                            <option value="0">Välj betyg här...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                    </select>
                </div>
            </form>

            <Button text="Spara film" onClick={addItem} />         
                        
        </div>
    )
}