
const DatiTempo = (props) => {
    
    console.log(props.dati);
    
    let gradiKelvin = 273

    /* const sfondo = () => {
        if((props.dati.main.temp - gradiKelvin).toFixed() > 22){
            let body = document.getElementsByName('body')
            body.style.backgroundColor = '#C7F9CC'
        }
    } */

    return(
        <>
            {props.dati != null &&
            <div id="DatiContainer" className="container">
                <div className="text-center my-3">
                    <h2>{props.dati.name} {props.dati?.sys?.country}</h2>
                </div>
                <div className="d-flex justify-content-between">
                    {/* <p className="dropdown-item lat">Lat:{props.dati?.coord?.lat}</p>
                    <p className="dropdown-item text-end lon">lon:{props.dati?.coord?.lon}</p> */}
                    {/* 44°29′38.00″ N, 11°20′34.00″  */}

                </div>
                <div id="topDati" className="d-flex flex-column align-items-center">

                    <div className="d-flex flex-column gap-2 align-items-center">
                        <h1><span  className="display-1 fw-bold">{(props.dati?.main?.temp - gradiKelvin).toFixed()}</span> °C</h1>
                        <div className='d-flex gap-2 justify-content-center align-item-center'>
                            <i class="bi bi-cloud-fill"></i>
                            <p >{props.dati?.clouds?.all}</p>
                        </div>
                        {/* <p><b>{props.dati?.weather[0].description}</b></p> */}
                        {/* <img src={`https://openweathermap.org/img/wn/${props.dati?.weather[0].icon}.png`} alt="" /> */}
                    </div>

                </div>
                <div id="bottomDati" className="d-flex gap-2 align-items-center">
                    <div id="leftDati" className="col d-flex flex-column justify-content-center gap-2">
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div className=' d-flex justify-content-between w-100'>
                                <p>{props.dati?.wind?.speed}Km/h</p>
                                <p>{props.dati?.wind?.deg}°</p>
                            </div>
                        </div>
                        <div className='d-flex flex-column justify-content-center'>
                            <div className="d-flex gap-2 align-items-center">
                                <p>{props.dati?.sys?.sunrise}</p>
                                <i class="bi bi-sunrise-fill sunrise"></i>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                                <p>{props.dati?.sys?.sunset}</p>
                                <i class="bi bi-sunset-fill sunset"></i>
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
                
            </div>}
        </>
    )
}

export default DatiTempo