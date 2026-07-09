import React from 'react'
import HomeUniqueStyle from '../../Components/HomeUniqueStyle/HomeUniqueStyle'
import HomePopularPerfume from '../../Components/HomePopularPerfume/HomePopularPerfume'
import HomeLogoPage from '../../Components/HomeLogoPage/HomeLogoPage'

const Home = () => {
  return (
    <div>
        <HomeUniqueStyle/>
        <HomePopularPerfume/>
        <HomeLogoPage/>
    </div>
  )
}

export default Home