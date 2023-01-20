import React, { ChangeEvent, useContext, useRef, useState } from 'react'
import { movie } from '../App'

export const MovieForm = () => {
    const Movie: any = useContext(movie)
    const nameRef = useRef<HTMLInputElement>(null!)
    const rateRef = useRef<HTMLInputElement>(null)
    const durationRef = useRef<HTMLInputElement>(null)
    const [name, setName] = useState("")
    const [rate, setRate] = useState("")
    const [duration, setDuration] = useState("")
    console.log(duration.endsWith("hr"));

    const NameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const RateHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setRate(e.target.value)
    }
    const DurationHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDuration(e.target.value)
    }
    const ClickHandler = () => {
        let regex = /^[0-9]?.?[0-9]hr$/g
        console.log(regex);
        console.log(duration.endsWith("hr"));
        if (nameRef.current.value === "" && null !== nameRef.current) {
            alert("Enter movie name....")
            nameRef.current.focus()
        }
        else if (rate === "" && null !== rateRef.current) {
            alert("Enter rating...")
            rateRef.current.focus()
            console.log(rateRef.current.value);
        }
        else if (duration === "" && null !== durationRef.current) {
            alert("Enter movie duration...")
            durationRef.current.focus()
        }
        else if (!regex.test(duration) && null !== durationRef.current) {
            alert("Please write duration in hourse ex- 2.2hr")
            durationRef.current.focus()
        }
        else {
            var obj = {
                name: name,
                rate: rate,
                duration: duration
            }
            Movie.data.push(obj)
            Movie.setData([...Movie.data])
            console.log(Movie.data);
            alert("Added successfully !")
        }
    }
    return (
        <div className='Container'>
            <div className='Card'>
                <input type="text"
                    className="form-control mb-3"
                    placeholder="Movie Name.."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    ref={nameRef}
                    onChange={NameHandler}

                />
                <input type="number"
                    ref={rateRef}
                    className="form-control mb-3"
                    placeholder="Rating between 0-100"
                    onChange={RateHandler}
                    aria-label="Username" aria-describedby="basic-addon1" />
                <input type="text"
                    ref={durationRef}
                    className="form-control mb-3"
                    placeholder="Duration"
                    aria-label="Username"
                    onChange={DurationHandler}
                    aria-describedby="basic-addon1" />
                <button className='btn btn-info' onClick={ClickHandler}>Add Movie</button>
            </div>
        </div>
    )
}
