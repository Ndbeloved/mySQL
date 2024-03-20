import express from 'express'
import dotenv from 'dotenv'
import { getNote ,getNotes, createNote } from './database.js'
dotenv.config()
const app = express()
app.use(express.json())

const PORT = process.env.PORT


app.get('/notes', async(req, res)=>{
    try{
        const notes = await getNotes()
        res.send(notes)
    }
    catch(err){
        res.status(404).json({message: 'No resourse found'})
    }
})

app.get('/notes/:id', async(req, res)=>{
    const {id} = req.params
    const note = await getNote(id)
    res.send(note)
})

app.post('/note/new', async(req, res)=>{
    const {title, content} = req.body
    const create = await createNote(title, content)
    res.send(create)
})

app.use((err, req, res, next)=>{
    console.error(err.stack)
    res.status(500).json({message: 'something broke 💩'})
})

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})