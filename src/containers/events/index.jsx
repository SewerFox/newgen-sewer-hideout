import { Link } from 'react-router-dom'
import { GridBoxImage } from '../../components/grid_box/index'
import { Details } from '../../components/details/index'
import EoW2026Logo from "../../assets/marathon/2026.png"
import League1stLogo from "../../assets/league/1ed/racing-logo.png"
import Enduro2stLogo from "../../assets/enduro/2ed/enduro-logo.png"
import Mobile27Logo from "../../assets/misc-event/mobile27.png"

export function Events() {
    return (
        <div className="flex flex-col items-center">
            <div className="text-center sm:flex items-center border-b-2 border-b-green-600 m-1.5">
                <h1 className='text-green-400 text-2xl'>Running event:</h1>
                <Link className='text-green-200 hover:text-green-300 text-lg' to="/events/enduro1st">STK Enduro Tournament 1º Ed.</Link>
            </div>
            <div className="text-center items-center border-b-2 border-b-green-600 m-1.5">
                <h1 className='text-green-400 text-2xl mb-1.5'>Planned events:</h1>
                <div className='sm:grid sm:grid-cols-2 xl:flex gap-8 mb-3'>
                    <GridBoxImage src={EoW2026Logo}>
                        <h2 className='text-green-300 font-bold text-xl'>STK End-of-2026 Marathon</h2>
                        <h3 className='text-green-200 text-lg'>Planned date: December 12 at 16:00 UTC</h3>
                        <p className='text-sm'>Planned to be a 90 (or 75)-laps race in some snowy track (maybe Snow Peak)</p>
                    </GridBoxImage>
                    <GridBoxImage src={League1stLogo}>
                        <h2 className='text-green-300 font-bold text-xl'>STK Racing League 1st ed.</h2>
                        <h3 className='text-green-200 text-lg'>Planned date: February-April of 2027</h3>
                        <p className='text-sm'>Planned to be a event with a brand new championship style (inside the STK universe) <br />
                            <span className='text-white font-extralight'>Little spoiler: Will be inspirated in BattleBots Pro League (2026) championship style</span>
                        </p>
                    </GridBoxImage>
                    <GridBoxImage src={Enduro2stLogo}>
                        <h2 className='text-green-300 font-bold text-xl'>STK Enduro Tournament 2nd edition</h2>
                        <h3 className='text-green-200 text-lg'>Planned date: Mid-2027</h3>
                        <p className='text-sm'>Will be the continuation of the 1st edition, with several rule changes (I guess only 10% of the last rules will be maintained)</p>
                    </GridBoxImage>
                    <GridBoxImage src={Mobile27Logo}>
                        <h2 className='text-green-300 font-bold text-xl'>STK Mobile Showdown</h2>
                        <h3 className='text-green-200 text-lg'>Planned date: Maybe Nov 2027</h3>
                        <p className='text-sm'>Planned to be a series of GPs exclusive for mobile players</p>
                    </GridBoxImage>
                </div>
            </div>
            <div className="text-center items-center m-1.5">
                <Details title="Old events:">
                    <p className='text-green-300 text-lg'>For more events, take a look in these links list:</p>
                    <Link className='text-white hover:text-green-400 text-md mb-1.5' to="/links">Click here!</Link>
                </Details>
            </div>
        </div>

    )
}