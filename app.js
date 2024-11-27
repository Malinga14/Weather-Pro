load();

function load() {
    //---------------------------------------New York-----------------------------------------------------
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=00c32db79d684476a03182846240909&q=$New York&days=7`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("newYorkTempC").innerHTML = "Temp:" + data.current.temp_c + "°C";
            document.getElementById("newYorWind").innerHTML = "Wind : " + data.current.wind_kph + " kmph";
        })

    //---------------------------------------london-----------------------------------------------------
    fetch(`http://api.weatherapi.com/v1/current.json?key=255d202456604fcb823191822242311&q=London&aqi=no`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("londonTempC").innerHTML = "Temp:" + data.current.temp_c + "°C";
            document.getElementById("londonWind").innerHTML = "Wind : " + data.current.wind_kph + " kmph";
        })

    //---------------------------------------Tokyo-----------------------------------------------------
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=00c32db79d684476a03182846240909&q=$New York&days=7`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("tokyoTempC").innerHTML = "Temp:" + data.current.temp_c + "°C";
            document.getElementById("tokyoWind").innerHTML = "Wind : " + data.current.wind_kph + " kmph";
        })

    //---------------------------------------Paris-----------------------------------------------------
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=00c32db79d684476a03182846240909&q=$New York&days=7`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("parisTempC").innerHTML = "Temp:" + data.current.temp_c + "°C";
            document.getElementById("parisWind").innerHTML = "Wind : " + data.current.wind_kph + " kmph";
        })

    //---------------------------------------Beijing-----------------------------------------------------
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=00c32db79d684476a03182846240909&q=$New York&days=7`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("beijingTempC").innerHTML = "Temp:" + data.current.temp_c + "°C";
            document.getElementById("beijingWind").innerHTML = "Wind : " + data.current.wind_kph + " kmph";
        })

    //---------------------------------------Dubai-----------------------------------------------------
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=00c32db79d684476a03182846240909&q=$New York&days=7`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("dubaiTempC").innerHTML = "Temp:" + data.current.temp_c + "°C";
            document.getElementById("dubaiWind").innerHTML = "Wind : " + data.current.wind_kph + " kmph";
        })


    //---------------------------------------Sydney-----------------------------------------------------
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=00c32db79d684476a03182846240909&q=$New York&days=7`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("sydneyTempC").innerHTML = "Temp:" + data.current.temp_c + "°C";
            document.getElementById("sydneyWind").innerHTML = "Wind : " + data.current.wind_kph + " kmph";
        })

    //---------------------------------------Mumbai-----------------------------------------------------
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=00c32db79d684476a03182846240909&q=$New York&days=7`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("mumbaiTempC").innerHTML = "Temp:" + data.current.temp_c + "°C";
            document.getElementById("mumbaiWind").innerHTML = "Wind : " + data.current.wind_kph + " kmph";
        })


    //---------------------------------------Rome-----------------------------------------------------
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=00c32db79d684476a03182846240909&q=$New York&days=7`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("romeTempC").innerHTML = "Temp:" + data.current.temp_c + "°C";
            document.getElementById("romeWind").innerHTML = "Wind : " + data.current.wind_kph + " kmph";
        })

    //---------------------------------------Sao Paulo-----------------------------------------------------
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=00c32db79d684476a03182846240909&q=$New York&days=7`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("saoPauloTempC").innerHTML = "Temp:" + data.current.temp_c + "°C";
            document.getElementById("saoPauloWind").innerHTML = "Wind : " + data.current.wind_kph + " kmph";
        })



}