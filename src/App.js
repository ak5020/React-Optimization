import React, { Suspense, useState } from "react"
import './index.css'

const FirstComponent = React.lazy( () => import( "./components/FirstComponent" ) )

function App () {
  const [count, setCount] = useState( 0 )
  return (
    <div className="App">
      <header>React Optimization</header>
      <Suspense fallback={<p>Loading...</p>}>
        <FirstComponent state={count} />
      </Suspense>
      <button onClick={() => setCount( val => val + 1 )}>Increment</button>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8zU_yLBGMXMOzE3dpORNzgZ8vh09KsVyszg&usqp=CAU" alt="" />
      </div>
    </div>
  )
}

export default App
