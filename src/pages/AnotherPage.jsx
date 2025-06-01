import React, { useState, useEffect } from 'react'
function AnotherPage() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])
  return (
    <div>
      <h1>Another Page</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}

export default AnotherPage
