import './TodoSearch.css'
import React from 'react';



function TodoSearch({ searchValue, setSerachValue, }) {


    return (
        <div className='input-field'>
            <input className='' type="text" placeholder="Ingrese su búsqueda" onChange={(event) => {

                setSerachValue(event.target.value)

            }
            }
                value={searchValue}
            />

        </div>
    );


}
export { TodoSearch };