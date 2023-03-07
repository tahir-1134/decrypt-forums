import React from 'react'
import NewsHeader from './NewsHeader';
import "./News.css";
import NavLinks from './NavLinks';
import SearchBox from './SearchBox';
import NewsList from './NewsList';

function News() {
  return (
    <div className='news'>
        <NewsHeader />
        <NavLinks />
        <SearchBox />
        <NewsList />
    </div>
  )
}

export default News