import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { IEvent } from '../../Interfaces/Event'
import http from '../../config/http'
import Event from './Event'

const Events: React.FC = () => {
    const [events, setEvents] = useState<IEvent[]>([])

    useEffect(() => {
        async function fetchEvents() {
            try {
                const events = await http.get('/events')
                setEvents(events.data.reverse())
            } catch (error) {
                console.log(error);
            }
        }

        fetchEvents()
    }, [])

    const renderEvents = () => {
        return events.map(event => {
            return <Event event={event} key={event._id}></Event>
        })
    }

    return (
        <Page>
            <section className="list">
                { !!events && renderEvents() }
            </section>
            <section className="featured">TODAY'S HIGHLIGHT</section>
        </Page>
    )
}

const Page = styled.section`
    padding: 0 10px;
    display: flex;
    font-size: 12px;

    .list {
        display: flex;
        flex: 2;
        flex-wrap: wrap;
    }

    .featured {
        display: flex;
        flex: 1
    }
`

export default Events