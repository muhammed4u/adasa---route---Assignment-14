import React from 'react'
import Hero from '../components/Home/Section1/Hero'
import FeaturedArticles from '../components/Home/Section2/FeaturedArticles'
import Categories from '../components/Home/Section3/Categories'
import LatestArticles from '../components/Home/Section4/LatestArticles'
import Subscribe from '../components/Home/Section5/Subscribe'
const Home = ({data}) => {
  return (
    <>
    <Hero/>
    <FeaturedArticles data={data}/>
    <Categories data={data}/>
    <LatestArticles data={data}/>
    <Subscribe data={data}/>
    </>
  )
}

export default Home

