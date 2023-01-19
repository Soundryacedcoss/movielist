import React, { useContext, useEffect } from 'react'
import { movie } from '../App'

export const MovieList = () => {
  const Movie: any = useContext(movie)

  // console.log(Movie.data[0].duration);
  useEffect(() => {
    let a: any
    let b: any
    if (Movie.data.length > 1) {
      for (let i = 0; i < Movie.data.length; i++) {
        a = Movie.data[i].duration.slice(0, -2)
        b = Movie.data[i+1].duration.slice(0, -2)
      }
    
    for (let i = 0; i < Movie.data.length; i++) {
      // a = Movie.data[i].duration.slice(0, -2)
      Movie.data.sort(
        function (a: any, b: any) {
          console.log('hj');
          // Movie.setData(a-b)
          return Movie.data[i].duration.slice(0, -2) - Movie.data[i+1].duration.slice(0, -2)
        }
      )
      console.log(a, b)
      // var obj = {
      //   duration: Movie.data[i].duration.slice(0, -2),
      //   name: Movie.data[i].name,
      //   rate: Movie.data[i].rate
      // }
      // Movie.data.push(obj)
      // Movie.setData([...Movie.data])
      // }
    }

    }
  }, [Movie.data.length])
  return (
    <div className='card mb-3'>
      {Movie.data.map((val: any) =>
        <div className='card'>
          <div className='card-body' style={{ width: "100%", border: "solid gray 2px" }}>
            <h4 className='card-tittle'>{val.name}</h4>
            <b className='card-link'>{val.duration}</b>
            <div style={{ float: "right" }}>
              rating<b className='card-link'>{val.rate}⭐</b>
            </div>

            {/* </div> */}
          </div>
        </div>
      )}

    </div>
  )
}
