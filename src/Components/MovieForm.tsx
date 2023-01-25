import React, { ChangeEvent, useContext, useRef, useState } from 'react'
import { movie } from '../App'

export const MovieForm = () => {
    // using context here
    const Movie: any = useContext(movie)
    const nameRef = useRef<HTMLInputElement>(null!)
    const rateRef = useRef<HTMLInputElement>(null)
    const durationRef = useRef<HTMLInputElement>(null)
    // State for taking value from user
    const [name, setName] = useState("")
    const [rate, setRate] = useState("")
    const [duration, setDuration] = useState<number | any>("")
    // tasking value from user
    const NameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const RateHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setRate(e.target.value)
    }
    const DurationHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDuration(e.target.value)
    }
    // Adding movie to movie list
    const ClickHandler = () => {
        // VAlidation for movie duration
        let regex1 = /^[0-9]?.?[0-9]h$/g
        let regex2 = /^[0-9]?.?[0-9]m$/g


        // checking validation of input field
        if (nameRef.current.value === "" && null !== nameRef.current) {
            alert("Enter movie name....")
            nameRef.current.focus()
        }
        else if (rate === "" && null !== rateRef.current) {
            alert("Enter rating...")
            rateRef.current.focus()
        }
        else if (duration === "" && null !== durationRef.current) {
            alert("Enter movie duration...")
            durationRef.current.focus()
        }
        else if ((regex1.test(duration) === false && regex2.test(duration) === false) && null !== durationRef.current) {
            alert("Please write duration in hourse ex- 2.2hr")
            durationRef.current.focus()
        }
        // sending the data into state
        else {
            let obj;
            if (duration.match("m")) {
                obj = {
                    name: name,
                    rate: rate,
                    duration: ((parseInt(duration) / 60) + "h"),
                    duration1: duration.slice(0, -2)
                }
            }
            else if (duration.match("h")) {
                obj = {
                    name: name,
                    rate: rate,
                    duration: duration,
                    duration1: duration.slice(0, -2)
                }
            }
            Movie.data.push(obj)
            Movie.setData([...Movie.data])
            alert("Added successfully !")
            // clearing input field
            setName("")
            setDuration("")
            setRate("")
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
                    value={name}

                />
                <input type="number"
                    ref={rateRef}
                    value={rate}
                    className="form-control mb-3"
                    placeholder="Rating between 0-100"
                    onChange={RateHandler}
                    aria-label="Username" aria-describedby="basic-addon1" />
                <input type="text"
                    ref={durationRef}
                    value={duration}
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
