import { createHashRouter } from 'react-router-dom'
import { Main } from './App'
import { Home } from './containers/homepage'
import { Events } from './containers/events'
import { Enduro1st } from './containers/events/enduro/1ed'
import { HallOfFame } from './containers/hall_fame'
import { ErrorScreen } from './containers/error'

export const router = createHashRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorScreen />,
    children: [
      { index: true, element: <Home /> },
      { path: "/events", element: <Events /> },
      { path: "/events/enduro1st", element: <Enduro1st /> },
      { path: "/hallfame", element: <HallOfFame /> },
    ]
  }
]);

export default router