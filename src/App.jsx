import { Outlet } from 'react-router-dom'
import { BackgroundContainer } from './components/background/index'
import { NavigationBar } from './components/navbar/index'
import { Footer } from './components/footer/index'
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
