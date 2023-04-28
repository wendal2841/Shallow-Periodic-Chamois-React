import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Shallow Periodic Chamois</title>
        <meta property="og:title" content="Shallow Periodic Chamois" />
      </Helmet>
    </div>
  )
}

export default Home
