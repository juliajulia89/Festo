import { useEffect, useState } from 'react'

const useFetchData = () => {
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      await fetch("https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json")
        .then((res) => res.json())
        .then((data) => {
          let requestedData = data.entries

          function groupBy(list, keyGetter) {
            const map = new Map()
            list.forEach((item) => {
              const key = keyGetter(item)
              if (!map.has(key)) {
                map.set(key, [item])
              } else {
                map.get(key).push(item)
              }
            })
            return map
          }

          const groupedMovies = groupBy(
            requestedData,
            (movieData) => movieData.programType
          )

          const groupedSeries = groupBy(
            requestedData,
            (serieData) => serieData.programType
          )

          setMovies(groupedMovies.get('movie'))
          setSeries(groupedSeries.get('series'))
        })
    }

    getMovies()
    .catch((err) => {
      console.log(err);
    });
  }, [])

  return {
    movies,
    series,
  }
}

export default useFetchData
