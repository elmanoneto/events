import Events from './Events'
import EventDetails from './EventDetails'

export interface IRoute {
    path: string
    component: any
}

const routes: IRoute[] = [
    { path: '/', component: Events },
    { path: '/events/:id', component: EventDetails }
]

export default routes