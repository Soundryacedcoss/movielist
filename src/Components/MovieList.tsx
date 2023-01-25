import React, { useContext, useEffect } from 'react'
import { movie, SearchContext, valueContext } from '../App'

export const MovieList = () => {
  // using context
  const Movie: any = useContext(movie)
  const input: any = useContext(valueContext)
  const result: any = useContext(SearchContext)
  useEffect(() => {
    // sorting list via duration of movie
    Movie.data.sort((a: any, b: any) => b.duration1 - a.duration1)
    Movie.setData([...Movie.data])
  }, [Movie.data.length])
  return (
    <div className='card mb-3 w-100'>
      {
        result.search.length >= 0 && input.value.length >= 2 ?
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

          </div>
      }
    </div>
  )
}
