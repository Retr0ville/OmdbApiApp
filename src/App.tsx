/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Banner from './components/Banner';
import SearchBar from './components/SearchBar';
import Category from './components/Category';

const magicApiUrl = 'http://www.omdbapi.com/?apiKey=7f17bbec&s=harry-potter&page=';
const heroApiUrl = 'http://www.omdbapi.com/?apiKey=7f17bbec&s=batman&page=';

const fetchData = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};
const mappedData = (data: any[]) => data.map((item :any) => ({
  title: item.Title,
  poster: item.Poster,
}));

function App() {
  const [magicCategory, setMagicCategory] = useState<{
    title: string;
    poster: string;
  }[]>([]);
  const [heroCategory, setHeroCategory] = useState<{
    title: string;
    poster: string;
  }[]>([]);
  const [searchCategory, setSearchCategory] = useState<{
    title: string;
    poster: string;
  }[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const fetchLogic = async () => {
    for (let page = 1; page < 3; page++) {
      fetchData(magicApiUrl + page).then((data) => {
        const mappedMag = mappedData(data.Search);
        setMagicCategory([...magicCategory, ...mappedMag]);
      });
      console.log('here');
      fetchData(heroApiUrl + page).then((data) => {
        const mappedHero = mappedData(data.Search);
        setHeroCategory([...heroCategory, ...mappedHero]);
      });
    }
  };
  useEffect(() => {
    fetchLogic();
  }, []);
  useEffect(() => {
    if (searchValue !== '') {
      const searchUrl = `http://www.omdbapi.com/?apiKey=7f17bbec&s=${searchValue}&page=1`;
      fetchData(searchUrl).then((data) => {
        if (data.Search.length > 0) {
          const mappedSearch = mappedData(data.Search);
          setSearchCategory([...mappedSearch]);
        }
      });
    } else {
      fetchLogic();
    }
  }, [searchValue]);
  return (
    <div>
      <Header />
      <Banner />
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      {
        searchValue && searchCategory.length > 0 && (
          <Category categoryName="Search Results" movies={searchCategory} />
        )
      }
      <Category categoryName="Magic" movies={magicCategory} />
      <Category categoryName="Hero" movies={heroCategory} />
    </div>
  );
}

export default App;
