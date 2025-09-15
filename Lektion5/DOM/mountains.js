const MOUNTAINS = [
    { name: "Kilimanjaro", height: 5895, location: "Tanzania" },
    { name: "Everest", height: 8848, location: "Nepal" },
    { name: "Mount Fuji", height: 3776, location: "Japan" },
    { name: "Vaalserberg", height: 323, location: "Netherlands" },
    { name: "Denali", height: 6168, location: "United States" },
    { name: "Popocatepetl", height: 5465, location: "Mexico" },
    { name: "Mont Blanc", height: 4808, location: "Italy/France" }
];

// Header
const header = document.createElement('h1');
header.textContent = 'Mountains'
header.id = "header"
document.body.appendChild(header)


const table = document.createElement('table');

// Table header
const theader = document.createElement('thead');
const headerRow = document.createElement('tr');

['Name', 'Height', 'Location'].forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    headerRow.appendChild(th);
});

theader.appendChild(headerRow);
table.appendChild(theader);

// Table body
const tbody = document.createElement('tbody');

MOUNTAINS.forEach(mountain => {
    const row = document.createElement('tr');

    const name = document.createElement('td');
    name.textContent = mountain.name;
    row.appendChild(name);

    const height = document.createElement('td');
    height.textContent = mountain.height;
    row.appendChild(height);

    const location = document.createElement('td');
    location.textContent = mountain.location;
    row.appendChild(location);

    tbody.appendChild(row)
})

table.appendChild(tbody);

document.body.appendChild(table);




