import { createElement } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const DatiTempo = (props) => { 

    let gradiKelvin = 273
    console.log(props.dati);
    console.log(props.datiNextDays);

    let sunrise = Date(props.dati?.sys?.sunrise)
    let sunset = Date(props.dati?.sys?.sunset)
    console.log(sunrise.slice(17, 24));
    console.log(sunset);

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

    let oggi = []
    function todayMeteo() {
        props?.datiNextDays.list?.forEach((el) => {
            el.dt_txt.includes(currentDate.slice(0,10)) &&
                oggi.push(el)
        })
    } todayMeteo()
    
    let nextDaysDate = []
    let sett = []
    function nextdayMeteo() {

        props?.datiNextDays.list?.forEach((el) => {
            if(el.dt_txt.includes('12:00:00') === true){
                console.log(true);
                nextDaysDate.push(el)
                console.log(el);
            } else {
                console.log(false);
            }
        })
    } nextdayMeteo()

    const graficoData = []
    let partenza = 0
    function datiGrafico(){
        props?.datiNextDays?.list?.forEach((el) => {
            graficoData.push({name: `${partenza < 23 ? partenza += 3 : partenza = null}:00`/* `${el.dt_txt.slice(11)}` */, uv: (el.main.temp_max - gradiKelvin), pv: (el.main.temp - gradiKelvin), amt: (el.main.min - gradiKelvin)})
        })
    } datiGrafico()

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
                            <h1><span className="display-1 fw-bold">{(props.dati?.main?.temp - gradiKelvin).toFixed()}</span> °C</h1>
                            <div className='d-flex gap-2 align-item-center'>
                                <i className="bi bi-cloud-fill"></i>
                                <p>{props.dati?.clouds?.all}</p>
                            </div>
                        </div>

                    </div>
                    <div id="bottomDati" className="d-flex flex-column gap-2">
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
                                        <p></p>
                                        <p>{parseInt((props.dati?.sys?.sunrise / (1000 * 60 * 60)) % 24)} : {parseInt((props.dati?.sys?.sunrise / (1000 * 60)) % 60)}</p>
                                        <i class="bi bi-sunrise-fill sunrise"></i>
                                    </div>
                                    <div className="d-flex gap-2 align-items-center">
                                        <p>{parseInt((props.dati?.sys?.sunset / (1000 * 60 * 60)) % 24)} : {parseInt((props.dati?.sys?.sunset / (1000 * 60)) % 60)}</p>
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
                                <div className="mt-3" id="collapseExample">
                                    {nextDaysDate.map((el, index) => 
                                        <div className="d-flex justify-content-between align-items-center" key={index}>
                                            <p className="col-3 fw-bold">{giorniSettimana[(day += 1)]}</p>
                                            <div className="d-flex gap-2">
                                                <i class="bi bi-moisture"></i>
                                                <p>{el.main.humidity}%</p>
                                            </div>
                                            <img src={`https://openweathermap.org/img/wn/${el.weather[0].icon}.png`} alt="" />
                                            <p>{(el?.main?.temp_max - gradiKelvin).toFixed()}-{(el?.main?.temp_min - gradiKelvin).toFixed()} °C</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div id="grafico">
                                <LineChart className="mx-auto" width={1100} height={300} data={graficoData}>
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


/* let icon
    let descriptiondata

    const icona = () => {
        props.dati?.weather.forEach((el) => {
            console.log(el.icon); 
            icon = el.icon
        })
    }; icona()

    const description = () => {
        props?.dati?.weather?.forEach((element) => {
        console.log(element.description);
        descriptiondata = element.description
    })}; description() */

/* const sfondo = () => {
    if((props.dati?.main?.temp - gradiKelvin).toFixed() > 3){
        let body = document.getElementsByName('body')
        body.style.backgroundColor = '#C7F9CC'
    }
}
sfondo() */

/* let msDurata = props.dati?.sys?.sunrise
console.log(msDurata = parseInt((msDurata/(1000*60*60))%24));
console.log(msDurata = parseInt((msDurata/(1000*60))%60));

function msToTime(msDurata) {
    var millisecondi = parseInt((msDurata%1000)/100)
        , secondi = parseInt((msDurata/1000)%60)
        , minuti = parseInt((msDurata/(1000*60))%60)
        , ore = parseInt((msDurata/(1000*60*60))%24);
 
    ore = (ore < 10) ? "0" + ore : ore;
    minuti = (minuti < 10) ? "0" + minuti : minuti;
    secondi = (secondi < 10) ? "0" + secondi : secondi;
 
    console.log(ore + ":" + minuti + ":" + secondi + "." + millisecondi);
} 

    <i id="arrowUp" className="bi bi-arrow-up"></i>
    function ruotaArrow(){
        let arrowDown = document.getElementById('arrowDown')
        let stato = arrowDown.getAttribute('stato').valueOf

        if(stato === true){
            arrowDown.style.rotate = '180deg'
            stato = false
        } else if (stato === false) {
            arrowDown.style.rotate = '-180deg'
            stato = true
        }

    }
*/