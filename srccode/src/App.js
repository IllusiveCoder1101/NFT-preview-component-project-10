import React from 'react'

function App() {
  return (
    <div className="box">
      <div className='container'>
        <img src={require("./assets/image-equilibrium.jpg")} alt="equilibrium" className='equilibrium' />
        <h1 className='title'>Equilibrium #3429</h1>
        <p className='about'>Our Equilibrium collection promotes balance and calm.</p>
        <body className='body'>
          <div className="ethereum">
            <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8"/></svg>
            <p className='price'>0.041 ETH</p>
          </div>
          <div className="time">
          <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9"/></svg>
            <p className='tm'>3 days left</p>

          </div>
        </body>
        <div className='line'></div>
        <footer className='footer'>
          <img src={require("./assets/image-avatar.png")} alt="avatar" className='avatar' />
          <p className='creator'>Creation of <em>Jules Wyvern</em></p>
        </footer>
      </div>
    </div>
  )
}

export default App