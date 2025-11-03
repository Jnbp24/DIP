import express from 'express';

const earthquakeUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

const app = express();
app.get('/api/earthquakes/:minimumMagnitude', async(request, response) => {
    const data = await get(earthquakeUrl);
    const minimumMagnitude = Number(request.params.minimumMagnitude);
    const result = filteredEarthquakes(data,minimumMagnitude);
    response.json(result);
});

app.get('/', (req, res) => {
  res.redirect('/minimumMagnitude/5');
});

app.get('/minimumMagnitude/:value', (req, res) => {
  res.sendFile('index.html', { root: 'assets' });
});

app.use(express.static('assets')); 

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200)
        throw new Error(respons.status);
    const data = await respons.json()
    return data.features
}


function filteredEarthquakes(earthquakes, minimumMagnitude){
    const number = Number(minimumMagnitude);
    const result = earthquakes
    .filter(quake => quake.properties.mag >= number)
    .sort((quake1, quake2) => quake2.properties.mag - quake1.properties.mag);
    return result
}


app.listen(5500, () => {
    console.log("Server is running");
});