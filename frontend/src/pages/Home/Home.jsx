import React, { useState } from 'react' 
import './Home.css' 
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import ProductReels from '../../components/ProductReels/ProductReels'
import BlogSection from '../../components/Blog/BlogSection'
import ProductSlides from '../../components/ProductsSlide/ProductSlide'

const Home = () => {


  const [category, setCategory] = useState('All')

  return (
    <div>
      <Header/>
      <ProductSlides/>
      <ExploreMenu  category={category} setCategory={setCategory} />

      <FoodDisplay category={category} />

      <ProductReels/>

      <BlogSection />
    </div>
  )
}

export default Home
