const mongoose = require('mongoose')
const db = require('./database.js')

const songSchema = new mongoose.Schema({
    title: String,
    artist: String,
    duration: Number
})

const Song = mongoose.model('Songs', songSchema)


async function connectToDB() {
    await mongoose.connect('url')
    console.log('connected to db!')

}

async function main() {
    await connectToDB()
    const firstSong = new Song({
        title: 'Happy birthday', 
        artist: 'Me', 
        duration: 1
    })
    await firstSong.save()

    const songs = await Song.find() // get all documents in collection
    const birthdaysSong = await Song.find({title: 'Happy Birthday'})
    console.log(birthdaysSong)
    const firstBirthdaySong = birthdaysSong[0]
    await Song.updateOne({

    })
}

module.exports
