
function generateEarthquakeTable(earthquakes) {
    let html = '<table>';
    for (let quake of earthquakes) {
        let { time, place, mag } = quake.properties;
        html += '<tr><td>' + mag +
            '</td><td>' + place +
            '</td><td>' + new Date(time).toLocaleString() +
            '</td></tr>\n';
    }
    html += '</table><br><div></div>';
    return html;
}

const pathParts = window.location.pathname.split('/');
const minMag = parseInt(pathParts[2]) || 5;

async function loadEarthquakes() {
    const response = await fetch(`/api/earthquakes/${minMag}`);
    const earthquakes = await response.json();
    document.querySelector('#output').innerHTML = generateEarthquakeTable(earthquakes);
}

window.addEventListener('DOMContentLoaded',loadEarthquakes())