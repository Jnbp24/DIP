let text = document.querySelectorAll('p');
let headers = document.querySelectorAll('h1');
let lists = document.querySelectorAll('li')

// Opgave 5.1 - uses text
for (let t of text){
    t.className = "red";
}

// Opgave 5.2 - uses headers list
for (let header of headers){

    let first = header.nextElementSibling;

    if(first && first.nextElementSibling){
        first.nextElementSibling.style.color = "brown";
    }
}

// Opgave 5.3 - uses lists list
   lists.forEach((li, index) => {
        if (index % 2 === 1){
            li.style.backgroundColor = 'lightgrey'
        }
   });

// Opgave 5.4 - uses headers list
   for (let header of headers){
        let next = header.nextElementSibling;

        if(next){
            let subtitle = document.createElement('h2');
            subtitle.textContent = next.textContent;
            subtitle.style.color = 'blue';
            next.replaceWith(subtitle);
        }
   }

// Opgave 5.5
let linkContainer = document.createElement('div');
linkContainer.id = "header-links";
document.body.prepend(linkContainer);

headers.forEach((header, index) => {
    let id = "header-" + (index+1);
    header.id = id;

    let link = document.createElement("a"); //Lowercase to ensure <a href> works
    link.href = "#" + id;
    link.textContent = header.textContent;

    linkContainer.appendChild(link);
    linkContainer.append(document.createTextNode(" | "));
});