import { useEffect, useState } from "react";
import { createElement } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Button } from 'react-bootstrap'

const DatiTempo = (props) => { 

    // ho fatto una variabile per calcolare la temperatura in celsius
    let gradiKelvin = 273

    //calcolo l'orario del sorgere e del tramonto del sole, partendo da un valore timestamp
    let timestampSunrise = props.dati?.sys?.sunrise
    let timestampSunset = props.dati?.sys?.sunset

    let dataSunrise = new Date(timestampSunrise * 1000); // Creo un oggetto Date utilizzando il timestamp. Moltiplica per 1000 per convertire da secondi a millisecondi
    let dataSunset = new Date(timestampSunset * 1000);

    let oreSunrise = dataSunrise.getHours(); // Estraggo l'ora e i minuti da dataSunrise/dataSunset
    let minutiSunrise = dataSunrise.getMinutes();
    let oreSunset = dataSunset.getHours();
    let minutiSunset = dataSunset.getMinutes();

    let orarioSunrise = oreSunrise + ':' + minutiSunrise; // Formatto l'orario come stringa
    let orarioSunset =  oreSunset + ':' + minutiSunset;

    // ho creato questo array per poter scrivere in maniera dianmica a che giorno si riferiva il meteo dei prossimi giorni 
    const giorniSettimana = [
        'Domenica',
        'Lunedì',
        'Martedì',
        'Mercoledì',
        'Giovedì',
        'Venerdì',
        'Sabato'
    ]
    let data = new Date()
    let currentDate = data.toJSON()
    let day = data.getDay() // mi restituisce che giorno della settimana è in numeri
    let year = data.getFullYear()
    let month = data.getMonth()

    // recupero i dati della fetch che riguardano il giorno corrente, per poi fare il map dell'array
    let nientePrevisioni
    let oggi = []
    function todayMeteo() {
            props?.datiNextDays.list?.forEach((el) => {
                el.dt_txt.includes(currentDate.slice(0,10)) &&
                    oggi.push(el)
            })

    } todayMeteo()
    
    // salvo in un array i dati della fetch che riguardano i prossimi giorni, per poi fare il map dell'array
    let nextDaysDate = []
    function nextdayMeteo() {
        props?.datiNextDays.list?.forEach((el) => {
            if(el.dt_txt.includes('12:00:00') === true){
                nextDaysDate.push(el)
            }
        })
    } nextdayMeteo()

    // repurero i dati dagli array salvati prima e li sposto in un oggetto che poi passerò al grafico
    let partenza = 0
    const graficoDataNextDays = []
    const graficoDataToday = []
    function datiGrafico(){
        nextDaysDate.map((el) => {
            graficoDataNextDays.push({name: (el.dt_txt.slice(0,10)), uv: (el.main.temp - gradiKelvin), pv: (el.main.temp_max - gradiKelvin), amt: (el.main.min - gradiKelvin)})
        })
        oggi.forEach((el) => {
            graficoDataToday.push({name: `${partenza < 23 ? partenza += 3 : partenza = 0}:00`, uv: (el.main.temp_max - gradiKelvin), pv: (el.main.temp - gradiKelvin), amt: (el.main.min - gradiKelvin)})
        })
    } datiGrafico()
    let daPassare = graficoDataNextDays

    return (
        <>
            {props.dati != null &&
                <div id="DatiContainer" className="container">
                    <div className="d-flex justify-content-center align-items-center gap-2 text-center mt-3 my-md-4">
                        <h2>{props.dati.name} {props.dati?.sys?.country}</h2>
                    </div>
                    <div id="bottomDati" className="mx-auto col-12 d-flex flex-wrap gap-2">
                        <div className="col-12 d-flex flex-row-reverse flex-wrap justify-content-between">
                            <div id="mainTempo" className="imageBackGroundCloud col-12 col-md-6 d-flex flex-column my-3 my-md-0 gap-2 justify-content-center align-items-center">
                                <div className="d-flex gap-1 align-items-center">
                                    <h1 className="display-1">{(props.dati?.main?.temp - gradiKelvin).toFixed()}</h1>
                                    <p className="display-6">°C</p>
                                </div>
                                <div className='d-flex gap-2 align-item-center'>
                                    <i className="bi bi-cloud"></i>
                                    <p>{props.dati?.clouds?.all}</p>
                                </div>
                            </div>
                            <div className="d-flex gap-2 align-items-center col-12 col-md-6">
                                <div id="leftDati" className="col d-flex flex-column justify-content-center gap-2">
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <div className=' d-flex justify-content-between w-100'>
                                            <p>{props.dati?.wind?.speed}Km/h</p>
                                            <p>{props.dati?.wind?.deg}°</p>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center'>
                                        <div className="d-flex gap-2 align-items-center">
                                            <p>{orarioSunrise}</p>
                                            <i className="bi bi-sunrise-fill sunrise"></i>
                                            <small className="opacita">- Sunrise</small>
                                        </div>
                                        <div className="d-flex gap-2 align-items-center">
                                            <p>{orarioSunset}</p>
                                            <i className="bi bi-sunset-fill sunset"></i>
                                            <small className="opacita">- Sunset</small>
                                        </div>
                                    </div>
                                </div>
                                <div id="righttDati" className="col d-flex flex-column gap-2  flex-column justify-content-center align-items-center">
                                    <div className='rightSomeDati'>
                                        <p>Feel Like:</p>
                                        <h6>{(props.dati?.main?.feels_like - gradiKelvin).toFixed()} <span>°C</span></h6>
                                    </div>
                                    <div className='rightSomeDati'>
                                        <p>Humidity:</p>
                                        <h6>{props.dati?.main?.humidity}<span>%</span></h6>
                                    </div>
                                    <div className='rightSomeDati'>
                                        <p>Pressure:</p>
                                        <h6>{props.dati?.main?.pressure}<span>mbar</span></h6>
                                    </div>
                                    <div className='rightSomeDati'>
                                        <p>Max:</p>
                                        <h6>{(props.dati?.main?.temp_max - gradiKelvin).toFixed()} <span>°C</span></h6>
                                    </div>
                                    <div className='rightSomeDati'>
                                        <p>Min:</p>
                                        <h6>{(props.dati?.main?.temp_min - gradiKelvin).toFixed()} <span>°C</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="nextDays" className="col-12 col-md-6 text-dark d-flex flex-wrap gap-2 justify-content-center align-items-md-top">
                            <h5 className="opacita col-12 text-center" id="nientePrevisioni">{nientePrevisioni}</h5>
                            <div className="col-12 col-md-6">
                                <h5 className="opacita col-12 text-center">Today</h5>
                                <div id="today" className="d-flex flex-md-wrap gap-2 p-2">
                                    {oggi.length > 0 ? oggi.map((el, index) => 
                                        <div className="ore col-7 col-md-5 d-flex flex-column" key={index}>
                                            <div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <b>{(el.dt_txt).slice(-8)}</b>
                                                    <img src={`https://openweathermap.org/img/wn/${el.weather[0].icon}.png`} alt="" />
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="me-auto">
                                                    <p>{(el?.main?.temp_max - gradiKelvin).toFixed()}° - {(el?.main?.temp_min - gradiKelvin).toFixed()}°C</p>
                                                </div>
                                                <div className="d-flex gap-2">
                                                    <i className="bi bi-moisture"></i>
                                                    <p>{el.main.humidity}%</p>
                                                </div>
                                            </div>
                                        </div>
                                    ) : <p className="text-center">Non ci sono previsioni per il meteo di oggi</p>}
                                </div>
                            </div>
                            <div id="moreDays" className="col-12 col-md-5">
                                <h5 className="opacita col-12 text-center">Next days</h5>
                                <div className="my-2 container" id="collapseExample">
                                    {nextDaysDate.map((el, index) => 
                                        <div className="row d-flex justify-content-between align-items-center" key={index}>
                                            <p className="col-4 fw-bold">{giorniSettimana[(day < 6 ? day += 1 : day = 0)]}</p>
                                            <div className="col-3 d-flex gap-2">
                                                <i className="bi bi-moisture"></i>
                                                <p>{el.main.humidity}%</p>
                                            </div>
                                            <img className="col-2" src={`https://openweathermap.org/img/wn/${el.weather[0].icon}.png`} alt="" />
                                            <p className="col-3 text-end">{(el?.main?.temp_max - gradiKelvin).toFixed()}-{(el?.main?.temp_min - gradiKelvin).toFixed()} °C</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div id="bigContainer" className="d-flex flex-column gap-2 col-12">
                                <a className=" mx-auto" /* id="graficoDataNextDays"  onClick={() => changeNextday()} */>Next days</a>
                                <div id="containerGrafico">
                                    <LineChart className="mx-auto" width={1100} height={300} data={daPassare}>
                                        <Line type="monotone" dataKey="uv" stroke="rgba(22, 90, 90)" />
                                        <CartesianGrid stroke="rgba(22, 90, 90, 0.6)" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                    </LineChart>
                                </div>
                        </div>
                    </div>

                </div>}
        </>
    )
}

export default DatiTempo

    // cambio il grafico a seconda di quale link premo 

    /* <a className="graficoButton" id="graficoDataNextDays"  onClick={() => changeNextday()} >Next days</a>
        <a className="graficoButton" id="graficoDataToday"  onClick={() => changeToday()} >Next days</a>

    /* const [daPassare, setdaPassare] = useState([graficoDataNextDays]) 

    function changeToday(){
        setdaPassare(graficoDataToday)
        document.getElementById('graficoDataToday').style.backgroundColor = 'rgba(0, 139, 139, 0.4)'
        document.getElementById('graficoDataNextDays').style.backgroundColor = ''
    }
    function changeNextday(){
        setdaPassare(graficoDataNextDays)
        document.getElementById('graficoDataNextDays').style.backgroundColor = 'rgba(0, 139, 139, 0.4)'
        document.getElementById('graficoDataToday').style.backgroundColor = ''
    }

    useEffect(()=>{
        datiGrafico()
    }, []) */