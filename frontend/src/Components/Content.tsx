import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import eventRoutes, { IRoute } from '../Scenes/Events/Events.routes'

const Content: React.FC = () => {
    const content = eventRoutes.map((route: IRoute, i) => <Route exact path={route.path} component={route.component} key={i}></Route>)

    return (
        <Fragment>
            { content }
        </Fragment>
    )
}

export default Content