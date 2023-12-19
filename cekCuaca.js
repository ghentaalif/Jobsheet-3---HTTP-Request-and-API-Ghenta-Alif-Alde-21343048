// Createad by 21343019_Arafil Azmi

// const request = require('postman-request')
// const urlCuaca =

// 'http://api.weatherstack.com/current?access_key=07cd34f996534253afc23af78b708a1b&query=-0.8968723908932165,%20100.3501320802042&units=s'

// request({ url: urlCuaca, json: true }, (error, response) => {
// console.log('Saat ini suhu diluar mencapai ' +
// response.body.current.temperature + ' derajat celcius. Kemungkinan terjadinya hujan adalah ' + response.body.current.precip + '%')

// })


const request = require('postman-request');
const urlCuaca = 'http://api.weatherstack.com/current?access_key=07cd34f996534253afc23af78b708a1b&query=-0.8968723908932165,%20100.3501320802042';

request({ url: urlCuaca, json: true }, (error, response) => {
    if (error) 
    {
        console.error('Terjadi kesalahan:', error);
    } 
    else if (response.body.error) {
        console.error('Terjadi kesalahan:', response.body.error.info);
    } 
    else 
    {
        const temperature = response.body.current.temperature;
        const precip = response.body.current.precip;
        const weatherDescriptions = response.body.current.weather_descriptions;

        console.log('Saat ini suhu diluar mencapai ' + temperature + ' derajat Celsius.');
        console.log('Kemungkinan terjadinya hujan adalah ' + precip + '%');
        console.log('Deskripsi cuaca saat ini:');
        weatherDescriptions.forEach((description, index) => {
            console.log(`${index + 1}. ${description}`);
        });
    }
});
