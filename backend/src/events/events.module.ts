import { Module } from '@nestjs/common'
import { EventsController } from './controllers/events.controller'
import { EventsService } from './services/events.services'
import { MongooseModule } from '@nestjs/mongoose'
import EventSchema from './schemas/event.schema'

@Module({
    imports: [MongooseModule.forFeature([
        { name: 'Event', schema: EventSchema }
    ])],
    controllers: [EventsController],
    providers: [EventsService]
})

export class EventsModule {}