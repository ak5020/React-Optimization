import React, { useState, useEffect, useMemo, useCallback } from 'react'

const FirstComponent = ( props ) => {

  const [list, setList] = useState( [] )

  useEffect( () => {
    fetchData()
  }, [] )

  const totalLength = useMemo( () => list.length, [list] )

  const onWindowLoad = useCallback( () => {
    console.log( 'object' )
  }, [] )
  useEffect( () => {
    window.addEventListener( "load", onWindowLoad )

    return () => {
      window.removeEventListener( "load", onWindowLoad )
    }
  }, [onWindowLoad] )

  const fetchData = async () => {
    try {
      const response = await fetch( 'https://jsonplaceholder.typicode.com/photos' )
      const jsonData = await response.json()
      setList( jsonData )
    } catch ( error ) {
      console.error( 'Error fetching data:', error )
    }
  }

  return (
    <div className="first-component">
      <p>FirstComponent</p>
      <p>{props.state}</p>
      <p>Totlat Length: {totalLength}</p>
    </div>
  )
}
export default FirstComponent