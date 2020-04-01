import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Event } from '../interfaces/event.interface'
import { EventDTO } from '../interfaces/event.dto'
import mongoose, { Model } from 'mongoose'

@Injectable()
export class EventsService {
    constructor(@InjectModel('Event') private eventService: Model<Event>) {}

    create(event: EventDTO) {
        const eventModel = new this.eventService(event)
        eventModel.validateSync()
        return eventModel.save()
    }

    async findAll(): Promise<Event[]> {
        return this.eventService.find({}).exec()
    }

    async getById(id: any): Promise<Event> {
        if ( mongoose.Types.ObjectId.isValid(id) ) {
            return this.eventService.findById(id).exec()
        }

        return null
    }
}
