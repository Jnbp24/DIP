document.addEventListener('DOMContentLoaded', () =>{

    const tabs = document.querySelectorAll('span');
    const contents = document.querySelectorAll('p');

    contents.forEach((p,i) => {
        p.style.display = i === 0 ? "block" : "none"; //If it is the first paragraph, make it visible, else make it invisible
    });

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            contents.forEach(p => {
                p.style.display = 'none';
            })
            // Show content for the clicked block
            contents[i].style.display = 'block';
        });
    });



});
