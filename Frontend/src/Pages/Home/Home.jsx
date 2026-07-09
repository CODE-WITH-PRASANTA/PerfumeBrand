import React from 'react'
import HomeUniqueStyle from '../../Components/HomeUniqueStyle/HomeUniqueStyle'
import HomePopularPerfume from '../../Components/HomePopularPerfume/HomePopularPerfume'
import HomeLookbook from '../../Components/HomeLookbook/HomeLookbook'
import HomeDeal from '../../Components/HomeDeal/HomeDeal'

const Home = () => {
  return (
    <div>
        <HomeUniqueStyle/>
        <HomePopularPerfume/>
        <HomeLookbook/>
        <HomeDeal/>

    </div>
  )
}

export default Home