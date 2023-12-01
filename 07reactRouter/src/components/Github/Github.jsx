import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])

    // useEffect(() => {
    //   fetch('https://api.github.com/users/navneetsharma1988')
    //     .then(response => response.json())
    //       .then(data => {
    //           console.log(data)
    //           setData(data)
    //         })
    // }, [])

    const data = useLoaderData();
    

  return (
      <div className="text-center m-4 bg-gray-600 text-white text-3xl p-4">Github followers: {data.followers}
        <img src={ data.avatar_url } alt="Git picture" width={ 300 } />
      </div>
  )
}

export default Github 

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () => {
    const response =  await fetch('https://api.github.com/users/navneetsharma1988')
        
    return response.json();
}