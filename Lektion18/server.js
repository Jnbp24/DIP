import express from 'express'
import session from 'express-session'
import fs from 'node:fs/promises'
import path from 'node:path'


const PORT = 8080
const app = express()

app.set('view engine', 'pug')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('assets'))
app.use(session({
    secret: 'hej',
    saveUninitialized: true,
    resave: true
}))

app.get('/', async (request, response) => {
    const data = await fs.readdir('assets/public')
    response.render('frontpage', {
        files: data,
        folder: ''
    })
})

app.get('/:folder/', async(request, response) => {
    const folder = request.params.folder
    const data = await fs.readdir(path.join('assets', 'public', folder))
    response.render('frontpage', {
        files: data,
        folder: folder
    })
})

app.get('/:folder/:file', async(request, response) => {
    const { folder, file } = request.params
    const filePath = path.join('assets', 'public', folder, file)
    const data = await fs.readFile(filePath, 'utf-8')
    response.render('contentview', {
        files: data,
        folder: folder
    })
})

app.delete('/:folder/:file', async (request, response) => {
    const { folder, file} = request.params
    const filePath = path.join('assets', 'public', folder, file)
    try {
        await fs.rm(filePath, {recursive: true, force: true})
        response.send('File removed successfully')
    } catch (error) {
        console.error(error)
        response.status(500).send('Error removing file')
    }
})




app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`);
})