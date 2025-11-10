// opgave12.1.js
const earthquakeUrl = // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php 
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';


async function fillEarthquakeTable(earthquakeUrl) {
    try {
        const earthquakes = await get(earthquakeUrl);


        const strongQuakes = earthquakes // Use HoF to filter and sort the list of earthquakes by magnitude
            .filter(eq => earthquakeMagnitudeGreaterThanFive(eq.properties.mag))
            .sort((quake1, quake2) => quake2.properties.mag - quake1.properties.mag);

        document.body.innerHTML = '';
        
        // Create the header rows and the table elements
        const header = document.createElement('h1');
        header.textContent = "Earthquakes with a magnitude greater than 5";
        document.body.appendChild(header);

        // Create the table elements
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tr = document.createElement('tr');
        const tbody = document.createElement('tbody');


        // Create table headers for each string in the array
        const headers = ['Strength', 'Location', 'Time'];
        headers.forEach(text => {
            const th = document.createElement('th');
            th.textContent = text;
            tr.appendChild(th);
        });

        
        thead.appendChild(tr); // Add the table row element to the table head
        table.appendChild(thead); // Add the table head to the table


        // Go through all earthquakes that meet criteria, and add to a table row 
        for (const eq of strongQuakes) {
            const tr = document.createElement('tr');

            const magTd = document.createElement('td');
            magTd.textContent = eq.properties.mag;
            tr.appendChild(magTd);

            const placeTd = document.createElement('td');
            placeTd.textContent = eq.properties.place;
            tr.appendChild(placeTd);

            const timeTd = document.createElement('td');
            const date = new Date(eq.properties.time)
            timeTd.textContent = date.toLocaleString();
            tr.appendChild(timeTd);


            tbody.appendChild(tr); // Add the table rows to the table body
        }
        table.appendChild(tbody); // Add the table body to the table
        document.body.appendChild(table) // Add the table to the document body

    }
    catch (error) {
        console.log('Could not fetch earthquake data', error);
    }
}


function earthquakeMagnitudeGreaterThanFive(magnitude) {
    return magnitude >= 5;
}


async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    const data = await respons.json();
    return data.features
}

document.addEventListener('DOMContentLoaded', () => {
});

window.onload = function(){
    fillEarthquakeTable(earthquakeUrl)
}