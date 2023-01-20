import React, { useContext, useEffect } from 'react'
import { movie, SearchContext, valueContext } from '../App'

export const MovieList = () => {
  const Movie: any = useContext(movie)
  const input: any = useContext(valueContext)
  const result: any = useContext(SearchContext)
  console.log(result.search.length)
  // // console.log(Movie.data[0].duration);
  // useEffect(() => {
  //   if (Movie.data.length > 1) {
  //     Movie.data.sort(a: any, b: any) => {b.sort - a.sort
  //       }
  //       Movie.setData([...Movie.data])
  //     )
  //   }

  //   }
  // }, [Movie.data.length])
  useEffect(() => {
    console.log(input.value);
    let duration1: any
    for (let i = 0; i < Movie.data.length; i++) {


      // if (Movie.data.length>1) {
      // var obj = {
      duration1 = Movie.data[i].duration.slice(0, -2)
      // }
      // Movie.data.push(obj)
      // Movie.setData([...Movie.data])
      Movie.data.sort((a: any, b: any) => b.duration1 - a.duration1)
      Movie.setData([...Movie.data])
    }
  }, [Movie.data.length])
  return (
    <div className='card mb-3'>
      {
        input.value.length > 0 && result.search.length >= 0 ?
          <div>
            {result.search.map((val: any) =>
              <div className='card'>
                <div className='card-body' style={{ width: "100%", border: "solid gray 2px" }}>
                  <h4 className='card-tittle'>{val.name}</h4>
                  <b className='card-link'>{val.duration}</b>
                  <div style={{ float: "right" }}>
                    rating<b className='card-link'>{val.rate}⭐</b>
                  </div>
                </div>
              </div>
            )}
          </div>
          :
          <div>
            {Movie.data.map((val: any) =>
              <div className='card'>
                <div className='card-body' style={{ width: "100%", border: "solid gray 2px" }}>
                  <h4 className='card-tittle'>{val.name}</h4>
                  <b className='card-link'>{val.duration}</b>
                  <div style={{ float: "right" }}>
                    rating<b className='card-link'>{val.rate}⭐</b>
                  </div>
                </div>
              </div>
            )}
          </div>
      }
    </div>
  )
}
