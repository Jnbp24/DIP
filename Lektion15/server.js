import express from 'express';

const earthquakeUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

const app = express();
app.use(express.static('assets')); 

app.set('view engine', 'pug')


app.get('/', async (req, res) => {
    const minMag = 5;
    const earthquakes = await getEarthquakes();
    const filtered = filterEarthquakes(earthquakes, minMag);
    res.render('index', { earthquakes: filtered });
});

app.get('/:minimumMagnitude', async (req, res) => {
    const minMag = parseInt(req.params.minimumMagnitude) || 5;
    const earthquakes = await get(earthquakeUrl);
    const filtered = filteredEarthquakes(earthquakes, minMag);
    res.render('index', { earthquakes: filtered });
});

app.get('/api/earthquakes/:minimumMagnitude', async(request, response) => {
    const data = await get(earthquakeUrl);
    const minimumMagnitude = parseInt(request.params.minimumMagnitude);
    const result = filteredEarthquakes(data,minimumMagnitude);
    response.json(result);
});

async function get(url) {
    const response = await fetch(url);
    if (response.status !== 200)
        throw new Error(response.status);
    const data = await response.json()
    return data.features
}


function filteredEarthquakes(earthquakes, minimumMagnitude){
    const result = earthquakes
    .filter(quake => quake.properties.mag >= minimumMagnitude)
    .sort((quake1, quake2) => quake2.properties.mag - quake1.properties.mag);
    return result
}

app.listen(8800, () => {
    console.log("Server is running");
});
