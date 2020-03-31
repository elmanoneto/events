import { Document } from 'mongoose'

export class Event extends Document {
    id: number
    title: string
    dates: string[]
    location: string
    eventImage: string
    description: string
}