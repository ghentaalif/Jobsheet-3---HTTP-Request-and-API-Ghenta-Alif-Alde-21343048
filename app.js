// // Createad by 21343019_Arafil Azmi

const request = require('postman-request')

// const url = 'http://api.weatherstack.com/current?access_key=07cd34f996534253afc23af78b708a1b&query=-0.8973336742862399,%20100.34932741752685'
// const url = 'http://api.weatherstack.com/current?access_key=07cd34f996534253afc23af78b708a1b&query=-0.8968723908932165,%20100.3501320802042units=m'

// request({ url: url }, (error, response) => {
// // console.log(response)

// const data = JSON.parse(response.body)
// // console.log(data)
// // console.log(data.current)
// console.log(data.current.temperature)
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Bekasi.json?access_token=pk.eyJ1IjoiYXBpbGVlZTI1IiwiYSI6ImNsbWtwamdlazAzd3Ayd253c2ZxNzFheTAifQ.KRP89K-ReHx12P7avjkL3g&limit=3'

// request({ url: geocodeURL, json: true }, (error,response) => {

// const latitude = response.body.features[1].center[1]
// const longitude = response.body.features[1].center[1]
// console.log(latitude, longitude)

// })

// Lanjutan ( Latihan 3 Memanggil data API)
// No 1
// // Createad by 21343019_Arafil Azmi

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Jakarta%20Timur.json?access_token=pk.eyJ1IjoiYXBpbGVlZTI1IiwiYSI6ImNsbWtwamdlazAzd3Ayd253c2ZxNzFheTAifQ.KRP89K-ReHx12P7avjkL3g&limit=1%27'

// request({ url: geocodeURL, json: true }, (error,response) => {
//     if (error) 
//     {
//         console.error('Terjadi kesalahan:', error)
//     } 
//     else if (response.body.features.length === 0) 
//     {
//         console.error('Data tidak ditemukan')
//     } 
//     else 
//     {
//         const data = response.body.features[0]
//         const query = response.body.query
//         const name = data.text
//         const place_name =  data.place_name
//         const place_type = data.place_type[0]

//         console.log('Data yang dicari adalah :', query[0],query[1])
//         console.log('Data yang ditemukan adalah :', name)
//         console.log('Informasi lengkap dari data lokasi : ', place_name)
//         console.log('Tipe dari lokasi tersebut adalah :', place_type)
//     }
// })

// No 2
// // Createad by 21343019_Arafil Azmi

// URL Mapbox

const MapboxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Koto%20Laweh.json?access_token=pk.eyJ1IjoiYXBpbGVlZTI1IiwiYSI6ImNsbWtwamdlazAzd3Ayd253c2ZxNzFheTAifQ.KRP89K-ReHx12P7avjkL3g&limit=1%27'

request({ url: MapboxURL, json: true }, (error,response) => {
    if (error) 
    {
        console.error('Terjadi kesalahan pada Mapbox API:', error)
    } 
    else if (response.body.features.length === 0) 
    {
        console.error('Data tidak ditemukan di Mapbox API')
    } 
    else 
    {
        // Mengambil data dan koordinat pada Mapbox 
        const data = response.body.features[0]
        const query = response.body.query
        const place_name = data.place_name
        const place_type = data.place_type
        const coordinates = data.geometry.coordinates
        const latitude = coordinates[1]
        const longitude = coordinates[0]

        console.log('Koordinat lokasi anda adalah : ', latitude + ', ' + longitude )
        console.log('Data yang anda cari adalah   : ', query[0],query[1] )
        console.log('Data yang ditemukan adalah   : ', place_name )
        console.log('Tipe lokasi adalah           : ', place_type[0])

         // URL Weatherstack API

        const WeatherURL = ( 'http://api.weatherstack.com/current?access_key=07cd34f996534253afc23af78b708a1b&query=' + latitude + ', ' + longitude )

        // Mengambil Data dari weather menggunakan koordinat pada Mapbox
        request({ url: WeatherURL, json: true }, (error, response) => {
            if (error) 
            {
                console.error('Terjadi kesalahan pada Weatherstack API:', error)
            } 
            else if (response.body.error) 
            {
                console.error('Data cuaca tidak ditemukan di Weatherstack API')
            } else 
            {
                const temperature = response.body.current.temperature
                const precip = response.body.current.precip;

                console.log('\nSaat ini suhu di ' + query[0], query[1]  + ' adalah ' + temperature + ' derajat celcius. ')
                console.log('Kemungkinan terjadinya hujan adalah ' + precip + '%');
            }
        });
    }
})