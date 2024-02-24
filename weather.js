let tmp = document.getElementById('temp');
let city = document.getElementById('city');
let percnt = document.getElementById('percnt');
let meter = document.getElementById('meter');
let img = document.getElementById('img');

function check() {
    let cty = document.getElementById('cty');
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cty.value}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9e21abe840msha358d522488e0f8p10b1cfjsncba1702082e2',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    (async function () {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            if (cty.value == '') {
                alert('Enter any City Name');
            } else {
                if (result.temp == undefined) {
                    tmp.innerHTML = '0';
                    percnt.innerHTML = `${0}%`;
                    meter.innerHTML = `${0}Km/h`;
                    city.innerHTML = 'InValid City';
                    cty.value = '';
                } else {
                    let get_tmp = result.temp;
                    tmp.innerHTML = get_tmp;
                    percnt.innerHTML = `${result.humidity}%`;
                    meter.innerHTML = `${result.wind_speed}Km/h`;
                    console.log(result);
                    let upr = cty.value;
                    let upr0 = upr.split('');
                    let upr1 = upr0[0].toUpperCase();
                    for (let i = 1; i < upr.length; i++) {
                        upr1 += upr[i];
                    }
                    city.innerHTML = upr1;
                    cty.value = '';

                    if (result.cloud_pct == 0) {
                        img.src = "sun.png";
                    } else if (0 < result.cloud_pct <= 50) {
                        img.setAttribute("src", "sunny_cloudy.png");
                    } else if (50 < result.cloud_pct <= 100) {
                        img.setAttribute('src', "cloudy.png");
                    } else if (50 < result.cloud_pct <= 100) {
                        img.setAttribute('src', "rain.png");
                    }
                }
            }
        } catch (error) {
            console.error(error);
        }
    })();
};


let cty = document.getElementById('cty');
const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lahore`;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9e21abe840msha358d522488e0f8p10b1cfjsncba1702082e2',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

(async function () {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        if (result.temp == undefined) {
            tmp.innerHTML = '0';
            percnt.innerHTML = `${0}%`;
            meter.innerHTML = `${0}Km/h`;
            city.innerHTML = 'InValid City';
            cty.value = '';
        } else {
            let get_tmp = result.temp;
                    tmp.innerHTML = get_tmp;
                    percnt.innerHTML = `${result.humidity}%`;
                    meter.innerHTML = `${result.wind_speed}Km/h`;
                    
                    city.innerHTML = 'Lahore';
                    cty.value = '';

                    if (result.cloud_pct == 0) {
                        img.src = "sun.png";
                    } else if (0 < result.cloud_pct <= 50) {
                        img.setAttribute("src", "sunny_cloudy.png");
                    } else if (50 < result.cloud_pct <= 100) {
                        img.setAttribute('src', "cloudy.png");
                    } else if (50 < result.cloud_pct <= 100) {
                        img.setAttribute('src', "rain.png");
                    }
        }
    } catch (error) {
        console.error(error);
    }
})();
