import { createHashRouter } from 'react-router-dom'
import { Main } from './App'
import {
  Home,
  Events,
  Enduro1st,
  Enduro2nd,
  RacingLeague1st,
  EoW2026,
  MobileGP,
  HallOfFame,
  ServersList,
  BunchOfLinks,
  ErrorScreen
} from "./containers"

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