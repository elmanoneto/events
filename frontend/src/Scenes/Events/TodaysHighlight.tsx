import React from 'react'
import styled from 'styled-components'

import { IEvent } from '../../Interfaces/Event'

interface Props {
    events: IEvent[]
}

const TodaysHighlight = ({ events }: Props) => {
    const renderItems = () => {
        return events.map(event => {
            return (
                <div className="item" key={event._id}>
                    <img src={event.eventImage} alt=""/>
                    <div className="data">
                        <h4>{event.title} @ {event.dates[0]}</h4>
                        <p>{event?.description?.slice(0, 200) ?? 'No description yet'}...</p>
                    </div>
                </div>
            )
        })
    }

    return (
        <Page>
            <h3>TODAY'S HIGHLIGHT</h3>
            {renderItems()}
        </Page>
    )
}

const Page = styled.section`
    display: flex;
    font-size: 12px;
    padding: 8px 0;
    flex-direction: column;
    flex: 1;

    h3 {
        margin: 0;
        font-weight: normal;
    }

    .item {
        display: flex;
        margin: 5px 0 0;

        img {
            width: 50px;
            height: 50px;
        }

        .data {
            margin: 0 5px 0;

            h4 {
                margin: 0;
                padding: 0;
            }

            p {
                line-height: 1em;
                margin: 5px 0 0;
            }
        }
    }
`

export default TodaysHighlight