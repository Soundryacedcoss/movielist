import React, { useContext } from 'react'
import { movie, SearchContext, valueContext } from '../App'
export const Search = () => {
    const Movie: any = useContext(movie)
    const result: any = useContext(SearchContext)
    const input: any = useContext(valueContext)
    console.log("Data", Movie.data);
    const SearchHandler = (e: any) => {
        input.setvalue(e.target.value)
        console.log("box", input.value);
        if (input.value.length >= 2) {
            let arr = [];
            for (let i = 0; i < Movie.data.length; i++) {
                if (Movie.data[i].name.startsWith(input.value)) {
                    console.log("yuppp!");
                    console.log(Movie.data[i]);
                    arr.push(Movie.data[i])
                    result.setSearch([...arr])
                }
            }
        }
    }
    return (
        <div className=' mb-3' style={{ margin: "16% 4%" }}>
            <div className="input-group mb-3">
                <input type="text"
                    className="form-control"
                    placeholder="Search Here ..."
                    aria-label="Search Here ..."
                    onChange={SearchHandler}
                    aria-describedby="button-addon2"
                />
            </div>
        </div>
    )
}
