import React, { useEffect } from 'react'
import { getData } from '../../api'
export default function Index() {
  useEffect(() => {
    getData().then(res => {
      console.log(res)
    })
    console.log(process.env.REACT_APP_API_URL);

  })
  return (
    <div>
      <article>
        <title>456</title>
        <meta name="author" content="Josh" />
        <link rel="author" href="https://twitter.com/joshcstory/" />
        <meta name="keywords" content={789} />
      </article>
    </div>
  )
}
