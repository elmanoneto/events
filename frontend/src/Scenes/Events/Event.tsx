import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { IEvent } from '../../Interfaces/Event'

interface Props {
    event: IEvent
}

const Event = ({ event }: Props) => {
    return (
        <Wrapper background={event.eventImage}>
            <div className="item">
                { event.dates[0] }
            </div>
            <div className="item bottom">
                <h3>{ event.title }</h3>
                <Link to={{ pathname: `/events/${event._id}`, state: event }}>
                    <button>View</button>
                </Link>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.article<{background: string}>`
    display: flex;
    width: 250px;
    height: 350px;
    background-color: red;
    padding: 8px;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%,rgba(0,0,0,0.7) 100%), url(${props => props.background}) repeat 0 0;
    margin: 10px 5px 0;

    .item {
        display: flex;
    }

    .bottom {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        
        button {
            height: 30px;
            width: 80px;
            font-weight: bold;
            background: #fff;
            border-radius: 20px;
            outline: 0;
        }
    }
`

export default Event