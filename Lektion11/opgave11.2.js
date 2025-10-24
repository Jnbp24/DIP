// opgave11.2.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}


async function showUsers(){
    try {
        const users = await get(userUrl);
        const tbody = document.querySelector('#userTable tbody')
        tbody.innerHTML = '';

        users.forEach(user => {
            const tr = document.createElement('tr');
            tr.innerHTML = // Append the json values to the table data fields
            `
               <td>${user.id}</td> 
               <td>${user.name}</td> 
               <td>${user.username}</td> 
               <td>${user.phone}</td> 
               <td>${user.email}</td> 
               <td>${user.website}</td> 
            `;
            tr.addEventListener('click', () => showPosts(user.id));
            tbody.appendChild(tr);
        });
    } catch (error){
        console.error('Error when fetching user:', error.message)
    }
}

async function showPosts(userId){
    try{
        const posts = await get(postUrl + userId);
        const tbody = document.querySelector('#postTable tbody');
        tbody.innerHTML = '';

        posts.forEach(post => {
            const tr = document.createElement('tr');
            tr.innerHTML =  // Append the json values to the table data fields
            `
                <td>${post.id}</td> 
                <td>${post.title}</td>
                <td>${post.body}</td>
            `;
            tbody.appendChild(tr);
        });
    } catch (error){
        console.error('Error when fetching posts:', error.message)
    }
}
document.addEventListener('DOMContentLoaded', showUsers); // When DOM is loaded, show the users 