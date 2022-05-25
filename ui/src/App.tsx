import React, { useState } from 'react'
import './App.css';
const apiHost = process.env.REACT_APP_API_HOST

const App = () => {
  const [now, setNow] = useState()

  async function onClick() {
    const res = await fetch(`${apiHost}/now`)
    const json = await res.json()
    setNow(json)
  }

  return (
    <div>
      <button onClick={onClick}>Present</button>
      {now && <p>{now}</p>}
    </div>
  );
}

export default App;
