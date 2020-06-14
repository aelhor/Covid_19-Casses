import React from'react'

const Global = (props)=>{
    return(
        <div>
            <div className='newcomfirmed'>
                New Confirmed : <span className='val'>{props.newConfirmed}</span> 
            </div> <br/>

            <div className='newdeaths'>
                New Deaths :<span className='val'>{props.newDeaths}</span> 
            </div> <br/>

            <div className = 'newrecovered'>
                New Recovered :<span className='val'> {props.newRecovered}</span> 
            </div> <br/>

            <div className='newcomfirmed'>
                Total Confirmed :<span className='val'> {props.totalConfirmed}</span>
             </div> <br/>

            <div className='newdeaths'>
                Total Deaths :<span className='val'> {props.totalDeath}</span> 
            </div> <br/>
            
            <div className = 'newrecovered'>
                Total Recovered :<span className='val'>{props.totalRecovered}</span> 
            </div> <br/>
        </div> 
    )
}

export default Global
/*Global:
NewConfirmed: 0
NewDeaths: 0
NewRecovered: 0
TotalConfirmed: 3928672
TotalDeaths: 274425
TotalRecovered: 1287101*/