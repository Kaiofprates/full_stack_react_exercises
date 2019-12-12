import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

let [line, setLine ] = useState([])
let [hour, setHour] = useState('')
let [data, setData]  = useState({
  ida: '',
  volta: '',
  ida_dias_uteis: '',
  volta_dias_úteis: '',
})

function showLine(){
  getLine(hour)
  return (
    <>
    <div id="data" >
      <h2>Ida</h2>
      {data.ida}
      <h2>Volta</h2>
      {data.volta}
      <h2>Ida Dias úteis</h2>
      {data.ida_dias_uteis}
      <h2>Volta Dias úteis</h2>
      {data.volta_dias_úteis}
    </div>
    </>
  )
}



function getLine(e){
  //https://mocline.herokuapp.com/
  axios.get(`https://mocline.herokuapp.com/${e}`,{
    method: 'GET',
    mode: 'no-cors'
  })
  .then(function (response) {
    // handle success
    setData({ida : response.data.ida, volta: response.data.volta, ida_dias_uteis:response.data.ida_dias_úteis, volta_dias_úteis: response.data.volta_úteis})
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}



useEffect(()=>{
  axios.get('https://mocline.herokuapp.com/linhas',{
    method: 'GET',
    mode: 'no-cors'
  })
  .then(function (response) {
    // handle success
    setLine(Object.keys(response.data))
    //console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
},[])



  return (
    <div className="App">
      <header className="App-header">
        <form >
        <select  id="options" onClick={(e)=>{
          setHour(e.target.value);
        }}>
          {line.map((e) =>{
          return <option key={e} value={e} >{e}</option>
           })}
        </select>
        </form>
        {showLine()}
      </header>
    </div>
  );
}

export default App;
