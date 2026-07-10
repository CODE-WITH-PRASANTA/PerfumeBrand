import React from 'react'
import HomeUniqueStyle from '../../Components/HomeUniqueStyle/HomeUniqueStyle'
import HomePopularPerfume from '../../Components/HomePopularPerfume/HomePopularPerfume'
import HomeLogoPage from '../../Components/HomeLogoPage/HomeLogoPage'
import HomeLookbook from '../../Components/HomeLookbook/HomeLookbook'
import HomeDeal from '../../Components/HomeDeal/HomeDeal'

const Home = () => {
  return (
    <div>
        <HomeUniqueStyle/>
        <HomePopularPerfume/>
        <HomeLogoPage/>
        <HomeLookbook/>
        <HomeDeal/>

    </div>
  )
}

export default Home