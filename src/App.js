import { Component } from 'react'
import React from 'react';
// import Cards from './components/Cards';
// import Chart from './components/Chart';
// import CountryPicker from './components/CountryPicker';
import styles from './App.module.css';
import {Cards,Chart,CountryPicker} from './components';
import { fetchData } from './api';
import coronaImage from './images/image.png';
import Marquee from 'react-text-marquee';
class App extends Component {
  state = {
    data: {},
    country: '',
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    
    //console.log(data);
  }
  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country:country})

  }
  render() {
    const { data, country } = this.state;
    return (
      
      <div className={styles.container}>
      <marquee className={styles.mar}>How should I protect against COVID-19? :- 
      Clean your hands often. Avoid touching your eyes, nose and mouth.
       Limit social gatherings and time spent in crowded places.
       Avoid close contact with someone who is sick.Clean and disinfect frequently touched objects and surfaces.
      </marquee>
      <img className= {styles.image} src={coronaImage} alt="COVID19 Image"/>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart data={data} country={country} />
      </div>
    )
  }
}
export default App