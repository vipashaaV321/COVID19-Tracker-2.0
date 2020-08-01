import React from 'react';
// import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart'
// import CountryPicker from './components/CountryPicker/CountryPicker'
import {Cards,Chart,CountryPicker} from './components'
import './App.css';
import styles from './App.module.css';
import {fetchData} from './api'
import covid from './images/cover.png'
// import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component{
state={
  data:{},
  country:'',
}

  async componentDidMount(){
    const fetchedData= await fetchData();
    this.setState({data:fetchedData})
    //console.log(data);
  }
  handleCountryChange=async(country)=>{
    const fetchedData=await fetchData(country);
    // console.log(fetchedData); 
    this.setState({data:fetchedData,country:country})
//fetch the data
//set the state
  }
  render(){
    const mystyle = {
     height:"auto",
     width:"350px",
    
    };
    const footer={
      // position: "fixed",
      left:"0",
      bottom: "0",
      width: "100%",
      color: "white",
      padding:"10px",
      backgroundColor: "#990033",
      textalign:"center"
    }
    const{data,country}=this.state;
    return(
      <div className={styles.container}>
      <div class="footer" style={footer}>
<h1>COVID19 Tracker 2.0</h1>

</div>
<br/>
<br/>
        <img src={covid} style={mystyle}>
        </img>
        
      <Cards data={data}/>
      <br/>
      <h4>Select Country to view State of covid19</h4><br/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <br/>
      <Chart data={data} country={country}/>
      
<div class="footer" style={footer}>
 <h4>Made By Vipashaa</h4>
</div>
      </div>
    )
  }
}

export default App;
