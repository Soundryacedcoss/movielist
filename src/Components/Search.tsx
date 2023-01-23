import React, { useContext } from 'react'
import { movie, SearchContext, valueContext } from '../App'
export const Search = () => {
    const Movie: any = useContext(movie)
    const result: any = useContext(SearchContext)
    const input: any = useContext(valueContext)
    const SearchHandler = (e: any) => {
        // seraching movie via name
        input.setvalue(e.target.value)
        if (input.value.length >= 2) {
            let arr = [];
            for (let i = 0; i < Movie.data.length; i++) {
                if (Movie.data[i].name.startsWith(e.target.value)) {
                    arr.push(Movie.data[i])
                    result.setSearch(arr)
                }
                else {
                    result.setSearch([])
                }
            }
        }
    }
    return (
        <div className=''>
            <div className='w-100 mb-3'>
                <div className="input-group mb-3 mt-3">
                    <input type="text"
                        className="form-control"
                        placeholder="Search Here ..."
                        aria-label="Search Here ..."
                        onChange={SearchHandler}
                        aria-describedby="button-addon2"
                    />
                </div>
            </div>
        </div>

    )
}
