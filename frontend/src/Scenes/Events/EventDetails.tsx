import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { IEvent } from '../../Interfaces/Event'

interface Props {
    location: any
    history: any
    match: any
}

const EventDetails = (props: Props) => {
    const history = useHistory()
    const event: IEvent = props?.location?.state ?? false

    if (!event) history.push('/')

    return (
        <div>
            {event.title}
        </div>
    )
}

export default EventDetails