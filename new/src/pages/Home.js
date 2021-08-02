import React, { Component } from 'react'
import axios from 'axios'
import { Container, Grid, Segment } from 'semantic-ui-react'
import Page from '../layouts/main'
import SectionNowPlaying from '../components/Movies/Grid/Section'
import SectionTrending from '../components/Movies/List/Section'
import SectionNews from '../components/News/Section'
import authentication from '../utils/authentication'

export default class Home extends Component {

  constructor() {
    super()
    this.state = {
        moviesInTheaters: [],
        moviesTrending: [],
        moviesNews: []
    }
    this.fetchNowPlaying = this.fetchNowPlaying.bind(this)
    this.fetchTrendingMoviesThisWeek = this.fetchTrendingMoviesThisWeek.bind(this)
    this.fetchNews = this.fetchNews.bind(this)
  }

  componentDidMount() {
    const { TMDB_API_KEY, NEWSAPI_API_KEY } = authentication
    const NOW_PLAYING_ENDPOINT = `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}`
    const TRENDING_MOVIES_ENDPOINT = `https://api.themoviedb.org/3/trending/all/week?api_key=${TMDB_API_KEY}`
    const NEWS_ENDPOINT = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${NEWSAPI_API_KEY}`
    
    this.fetchNowPlaying(NOW_PLAYING_ENDPOINT)
    this.fetchTrendingMoviesThisWeek(TRENDING_MOVIES_ENDPOINT)
    this.fetchNews(NEWS_ENDPOINT)
  }

  fetchNowPlaying(endpoint) {
    axios.get(endpoint)
      .then(res => {
        this.setState({ moviesInTheaters: res.data.results })
      });
  }

  fetchTrendingMoviesThisWeek(endpoint) {
    axios.get(endpoint)
      .then(res => {
        this.setState({ moviesTrending: res.data.results })
      });
  }

  fetchNews(endpoint) {
    axios.get(endpoint)
      .then(res => {
        this.setState({ moviesNews: res.data.articles })
      });
  }
  
  render() {
    return (
      <Page>
        <SectionNowPlaying 
          title='Currently in Theaters'
          subtitle='Movies currently on show'
          movies={this.state.moviesInTheaters} 
          authentication={authentication} />
      </Page>
    );
  }
}