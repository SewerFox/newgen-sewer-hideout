import { Outlet } from 'react-router-dom'

import { BackgroundContainer, NavigationBar, Footer} from "./components"

export function Main() {
  return (
    <BackgroundContainer>
      <NavigationBar />
      <Outlet />
      <Footer />
    </BackgroundContainer>
  )
}

export default Main
