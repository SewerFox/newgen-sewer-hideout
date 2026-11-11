import { createHashRouter } from 'react-router-dom'
import { Main } from './App'
import { Home } from './containers/homepage'
import { Events } from './containers/events'
import { Enduro1st } from './containers/events/enduro/1ed'
import { HallOfFame } from './containers/hall_fame'
import { ErrorScreen } from './containers/error'
import { ServersList } from './containers/servers'
import { BunchOfLinks } from './containers/links'
import { Enduro2nd } from './containers/events/enduro/2ed'
import { RacingLeague1st } from './containers/events/racing/1st'
import { EoW2026 } from './containers/events/marathon/2026'
import { MobileGP } from './containers/events/misc/mobile27'

export const router = createHashRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorScreen />,
    children: [
      { index: true, element: <Home /> },
      { path: "/events", element: <Events /> },
      { path: "/events/enduro1st", element: <Enduro1st /> },
      { path: "/events/enduro2nd", element: <Enduro2nd /> },
      { path: "/events/endyear2026", element: <EoW2026 /> },
      { path: "/events/raceleague1st", element: <RacingLeague1st /> },
      { path: "/events/mobilegp", element: <MobileGP /> },
      { path: "/halloffame", element: <HallOfFame /> },
      { path: "/servers", element: <ServersList /> },
      { path: "/links", element: <BunchOfLinks /> },
    ]
  }
]);

export default router