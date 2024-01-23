import { useEffect, useState } from "react";
import { createElement } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

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

    //qua recupero il giorno e l'oario corrente per poter recuperare parte degli oggetti dell'array deelle previsioni dei possimi giorni
    let data = new Date()
    let currentDate = data.toJSON()
    let day = data.getDay() // mi restituisce che giorno della settimana è in numeri
    let year = data.getFullYear()
    let month = data.getMonth()

    // recupero i dati della fetch che riguardano il giorno corrente, per poi fare il map dell'array
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
            } else {
                console.log('non sono stato pushato');
            }
        })
    } nextdayMeteo()

    // repurero i dati dagli array salvati prima e li sposto in un oggetto che poi passerò al grafico
    let partenza = 0
    const graficoDataNextDays = []
    const graficoDataToday = []
    function datiGrafico(){
        nextDaysDate.forEach((el) => {
            graficoDataNextDays.push({name: `${partenza < 23 ? partenza += 3 : partenza = 0}:00`, uv: (el.main.temp - gradiKelvin), pv: (el.main.temp_max - gradiKelvin), amt: (el.main.min - gradiKelvin)})
        })
        oggi.forEach((el) => {
            graficoDataToday.push({name: `${partenza < 23 ? partenza += 3 : partenza = 0}:00`, uv: (el.main.temp_max - gradiKelvin), pv: (el.main.temp - gradiKelvin), amt: (el.main.min - gradiKelvin)})
        })
    } datiGrafico()

    // cambio il grafico a seconda di quale link premo 
    const [daPassare, setdaPassare] = useState(graficoDataNextDays) 

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

    return (
        <>
            {props.dati != null &&
                <div id="DatiContainer" className="container">
                    <div className="text-center my-3">
                        <h2>{props.dati.name} {props.dati?.sys?.country}</h2>
                    </div>
                    <div className="d-flex justify-content-between">
                    </div>
                    <div id="topDati" className="d-flex flex-column align-items-center">
                    <div className="d-flex flex-column gap-2 align-items-center">
                            <div className="d-flex gap-1 align-items-center">
                                <h1 className="display-1">{(props.dati?.main?.temp - gradiKelvin).toFixed()}</h1>
                                <p className="display-6">°C</p>
                            </div>
                            <div className='d-flex gap-2 align-item-center'>
                                <i className="bi bi-cloud-fill"></i>
                                <p>{props.dati?.clouds?.all}</p>
                            </div>
                    </div>
                    </div>
                    <div id="bottomDati" className="mx-auto col-12 col-md-6 d-flex flex-column gap-2">
                        <div className="d-flex gap-2 align-items-center">
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
                                        <i class="bi bi-sunrise-fill sunrise"></i>
                                    </div>
                                    <div className="d-flex gap-2 align-items-center">
                                        <p>{orarioSunset}</p>
                                        <i className="bi bi-sunset-fill sunset"></i>
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
                        <div id="nextDays" className="col-12 text-dark d-flex flex-column gap-2 align-items-center">
                            <div id="today" className="d-flex gap-2 col-12">
                                {oggi.map((el, index) => 
                                    <div id="ore" className="col-7 d-flex flex-column" key={index}>
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
                                                <i class="bi bi-moisture"></i>
                                                <p>{el.main.humidity}%</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div id="moreDays" className="col-12">
                                <div className="my-2 container" id="collapseExample">
                                    {nextDaysDate.map((el, index) => 
                                        <div className="row d-flex justify-content-between align-items-center" key={index}>
                                            <p className="col-4 fw-bold">{giorniSettimana[(day < 6 ? day += 1 : day = 0)]}</p>
                                            <div className="col-3 d-flex gap-2">
                                                <i class="bi bi-moisture"></i>
                                                <p>{el.main.humidity}%</p>
                                            </div>
                                            <img className="col-2" src={`https://openweathermap.org/img/wn/${el.weather[0].icon}.png`} alt="" />
                                            <p className="col-3 text-end">{(el?.main?.temp_max - gradiKelvin).toFixed()}-{(el?.main?.temp_min - gradiKelvin).toFixed()} °C</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div id="bigContainer" className="d-flex flex-column gap-2">
                                <div className="d-flex gap-2 mx-auto">
                                    <a id="graficoDataToday" onClick={() => changeToday()}>Today</a>
                                    <a id="graficoDataNextDays" onClick={() => changeNextday()}>Next days</a>
                                </div>
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
                    </div>

                </div>}
        </>
    )
}

export default DatiTempo


/* const sfondo = () => {
    if((props.dati?.main?.temp - gradiKelvin).toFixed() > 3){
        let body = document.getElementsByName('body')
        body.style.backgroundColor = '#C7F9CC'
    }
}
sfondo() */