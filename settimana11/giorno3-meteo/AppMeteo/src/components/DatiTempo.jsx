
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
            <div id="DatiContainer" className="container">
                <div className="text-center my-3">
                    <h2>{props.name} {props.sys.country}</h2>
                </div>
                <div id="topDati" className="d-flex flex-column align-items-center">

                    <div className="d-flex flex-column gap-2">
                        <h1><span  className="display-1 fw-bold">{(props.main.temp - gradiKelvin).toFixed()}</span> °C</h1>
                        <div className='d-flex gap-2 justify-content-center align-item-center'>
                            <i class="bi bi-cloud-fill"></i>
                            <p >{props.clouds.all}</p>
                        </div>
                    </div>

                </div>
                <div id="bottomDati" className="d-flex gap-2 align-items-center">
                    <div id="leftDati" className="col d-flex flex-column justify-content-center gap-2">
                        <div className=' d-flex justify-content-between'>
                            <p>{props.wind.speed}Km/h</p>
                            <p>{props.wind.deg}°</p>
                        </div>
                        <div className=''>
                            <p>Sunrise:{props.sys.sunrise}</p>
                            <p>Sunset:{props.sys.sunset}</p>
                        </div>
                    </div>
                    <div id="righttDati" className="col d-flex flex-column gap-2">
                        <div className='border-bottom border-dark d-flex justify-content-between'>
                            <p>Feel Like:</p>
                            <h6>{(props.main.feels_like - gradiKelvin).toFixed()} °C</h6>
                        </div>
                        <div className='border-bottom border-dark d-flex justify-content-between'>
                            <p>Humidity:</p>
                            <h6>{props.main.humidity}%</h6>
                        </div>
                        <div className='border-bottom border-dark d-flex justify-content-between'>
                            <p>Pressure:</p>
                            <h6>{props.main.pressure}mbar</h6>
                        </div>
                        <div className='border-bottom border-dark d-flex justify-content-between'>
                            <p>Max:</p>
                            <h6>{(props.main.temp_max - gradiKelvin).toFixed()} °C</h6>
                        </div>
                        <div className='border-bottom border-dark d-flex justify-content-between'>
                            <p>Min:</p>
                            <h6>{(props.main.temp_min - gradiKelvin).toFixed()} °C</h6>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="dropdown-item lat">Lat:{props.coord.lat}</p>
                    <p className="dropdown-item text-end lon">lon:{props.coord.lon}</p>
                    {/* 44°29′38.00″ N, 11°20′34.00″  */}
                </div>
            </div>
        </>
    )
}

export default DatiTempo