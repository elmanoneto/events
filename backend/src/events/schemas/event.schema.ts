import mongoose, { Schema } from 'mongoose'

const EventSchema: Schema = new Schema({
    title: { type: String, required: true },
    dates: { type: Array, of: String, required: true },
    location: { type: String, required: true},
    eventImage: String,
    description: String
})

export default EventSchema