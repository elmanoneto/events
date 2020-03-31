import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express'
import { EventsService } from '../services/events.services'
import { EventDTO } from '../interfaces/event.dto'

@Controller('events')
export class EventsController {
    constructor(private eventsService: EventsService) {}

    @Post()
    async create(@Res() res: Response, @Body() eventDTO : EventDTO) {
        try {
            const event = await this.eventsService.create(eventDTO)
            res.status(HttpStatus.CREATED).send({ data: event })
        } catch (error) {
            res.status(HttpStatus.BAD_REQUEST).send({ code: HttpStatus.BAD_REQUEST, data: error.message })
        }
    }

    @Get()
    async findAll(@Res() res: Response) {
        try {
            const events = await this.eventsService.findAll()
            res.status(HttpStatus.OK).send({ data: events })
        } catch (error) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ code: HttpStatus.INTERNAL_SERVER_ERROR, data: error.message })
        }
    }
}
