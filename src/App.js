import React, { Component } from 'react'; 
import Egypt from './Component/Egypt'
import Global from './Component/Global'
// import img1 from './hotline.jpg'

class App extends Component {
  constructor(props){
    super(props)
    this.state  = {
      NewConfirmed : undefined,
      newDeaths : undefined,
      newRecovered : undefined,
      totalConfirmed : undefined ,
      totalDeaths : undefined,
      totalRecovered : undefined,

      NewConfirmedGlobal : undefined,
      newDeathsGlobal : undefined,
      newRecoveredGlobal : undefined,
      totalConfirmedGlobal : undefined ,
      totalDeathsGlobal : undefined,
      totalRecoveredGlobal : undefined,
      loading : false,
      Date : new Date()
    }
  }

  getCases = async() =>{
    const apiCall = await fetch(`https://api.covid19api.com/summary`)
    const data = await apiCall.json()
    
    console.log(data.Global.NewConfirmed)

    this.setState({
      newConfirmed : data.Countries[51].NewConfirmed,
      newDeaths : data.Countries[51].NewDeaths,
      newRecovered : data.Countries[51].NewRecovered,
      totalConfirmed : data.Countries[51].TotalConfirmed ,
      totalDeaths : data.Countries[51].TotalDeaths,
      totalRecovered : data.Countries[51].TotalRecovered, 

      NewConfirmedGlobal : data.Global.NewConfirmed,
      newDeathsGlobal : data.Global.NewDeaths,
      newRecoveredGlobal : data.Global.NewRecovered,
      totalConfirmedGlobal : data.Global.TotalConfirmed,
      totalDeathsGlobal : data.Global.TotalDeaths,
      totalRecoveredGlobal : data.Global.TotalRecovered,
      loading : true
    })

  }
  
  

  render() {
    return (
      <div className= 'container'>
        <h1 className = 'covid_19'>COVID_19</h1>
        <span>Date :  {this.state.Date.toDateString()} </span>
        <div>{window.onload = this.getCases}</div>
        {this.state.loading === false ? <h2>Loading Pls wait...</h2> :
          <div>
              <h2 className='placetitle'>NEW CASSES AROUND <span className='place'> THE WORLED</span> :</h2>
              <div  className='globalcontainer'>
                <Global
                  newConfirmed = {this.state.newConfirmedGlobal}
                  newDeaths = {this.state.newDeathsGlobal}
                  newRecovered = {this.state.newRecoveredGlobal}
                  totalConfirmed = {this.state.totalConfirmedGlobal}
                  totalDeath ={this.state.totalDeathsGlobal}
                  totalRecovered = {this.state.totalRecoveredGlobal}
                />
              </div>

              <h2 className='placetitle'>NEW CASSES ON <span className='place'>Egypt</span> :</h2>
              <div className= 'egyptcontainer'>
                <Egypt 
                  newConfirmed = {this.state.newConfirmed}
                  newDeaths = {this.state.newDeaths}
                  newRecovered = {this.state.newRecovered}
                  totalConfirmed = {this.state.totalConfirmed}
                  totalDeath ={this.state.totalDeaths}
                  totalRecovered = {this.state.totalRecovered}
                />
              </div>
              <p>دورك جاي</p>
          </div>
        }      
        
        </div>
    )
  }
     
}
 
export default App;
