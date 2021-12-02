import {useState, useEffect} from 'react'
import { FormattedMessage } from "react-intl";

function Main(){

  const [startDate, setStartDate] = useState(new Date())
  const [startTime, setStartTime] = useState(()=>getTime())
  const [endDate, setEndDate] = useState(new Date(new Date().getTime() + (24 * 60 * 60 * 1000)))
  const [endTime, setEndTime] = useState(()=>getTime())
  const [remaining, setRemaining] = useState(0)

  function getTime(){
    let time = new Date()
    let hours = time.getHours().toString()
    let minutes = time.getMinutes().toString()
    if(parseInt(hours) < 10){
      hours = '0' + hours
    }
    if(parseInt(minutes) < 10){
      minutes = '0' + minutes
    }
    return `${hours}:${minutes}`
  }

 useEffect(()=>{
   let days = endDate.getTime() - startDate.getTime()
   let end = parseInt(endTime.split(':')[0])*(60*60*1000) + parseInt(endTime.split(':')[1])*(60*1000)
   let start = parseInt(startTime.split(':')[0])*(60*60*1000) + parseInt(startTime.split(':')[1])*(60*1000)
   setRemaining(days + (end-start))
 }, [startDate, startTime, endDate, endTime])


  return(
    <div id='mainContainer'>

    <div id='inputContainer'>

    <div className='inputContainerSmall'>
      <h2><FormattedMessage id='start' defaultMessage="Enter the start date"/></h2>
      <div className='inputs'>
      <div>
      <label>
      <input type='date' value={startDate.toISOString().split('T')[0]} onChange={(e)=>setStartDate(new Date(e.target.value))} required/>
      </label>
      <label>
      <input type='time' value={startTime} onChange={(e)=>setStartTime(e.target.value)} required/>
      </label>
      </div>

      <div>
      <p>{startDate.toISOString().split('T')[0]}</p>
      <p>{startTime}</p>
      </div>
      </div>
    </div>

    <div className='inputContainerSmall'>
    <h2><FormattedMessage id='end' defaultMessage="Enter the end date"/></h2>
    <div className='inputs'>
    <div>
    <label>
    <input type='date' value={endDate.toISOString().split('T')[0]} onChange={(e)=>setEndDate(new Date(e.target.value))} required/>
    </label>
    <label>
    <input type='time' value={endTime} onChange={(e)=>setEndTime(e.target.value)} required/>
    </label>
    </div>

    <div>
    <p>{endDate.toISOString().split('T')[0]}</p>
    <p>{endTime}</p>
    </div>
    </div>
    </div>
    </div>

    <div id='outputContainer'>
    <div id='outputContainerSmall'>
    <h1><FormattedMessage defaultMessage="Time differnce" id='title'/></h1>
    {remaining > 0 ?
    <div>
    <p><FormattedMessage defaultMessage="In months: {time}" id='result_m' values={{time: Math.round(remaining / (1000*60*60*24*30)*100)/100}}/></p>
    <p><FormattedMessage defaultMessage="In days: {time}" id='result_d' values={{time: Math.round(remaining / (1000*60*60*24)*100)/100}}/></p>
    <p><FormattedMessage defaultMessage="In hours: {time}" id='result_h' values={{time: Math.floor(remaining / (1000*60*60))}}/></p>
    <p><FormattedMessage defaultMessage="In total: {months} {months, plural, one{month}other{months}}, {days} {days, plural, one{day} other{days}} and {hours} {hours, plural, one{hour} other{hours}}" id='result_t' values=
    {{months: Math.floor(remaining / (1000*60*60*24*30)),
       days: Math.floor((remaining % (1000*60*60*24*30))/ (1000*60*60*24)),
       hours: Math.floor(((remaining % (1000*60*60*24*30))% (1000*60*60*24))/(1000*60*60))}}
     /></p>
    </div>
    : <FormattedMessage defaultMessage="The end date must be after the starting date" id='err'/>}
    </div>
    </div>

    </div>
  )
}

export default Main
