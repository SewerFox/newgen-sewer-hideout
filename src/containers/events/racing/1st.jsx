import { HeaderWithImage } from '../../../components/header_with_image/index'
import { Details } from '../../../components/details/index'
import { RankingTable } from '../../../components/ranking-tables'
import Race1stLogo from "../../../assets/events/league/1ed/racing-logo.png"

export function RacingLeague1st() {

    return (
        <>
            <HeaderWithImage src={Race1stLogo} border={true}>
                <h1 className='text-yellow-400 text-2xl'>Welcome to the 1st Edition of STK Racing League!</h1>
                <p> This tournament will be played between <b>February(?) and April(?) of 2027</b>, starting xxx z and ending yyy a.<br /> It will be organized by Gusta, with some support by FabianF (I hope). <br /> The races will happen in the server <i>STK Konqi Racing League</i>. <br /> You need to register to participate in this event. <br /> Enter *here* to register <br /> Also, please make sure to read the rules below.</p>
            </HeaderWithImage>
            <div className='mt-2.5 mb-2.5'>
                <Details title="0 - League Overview ">
                    <h2 className='font-bold text-xl mb-2.5'>⚠️ Under construction ⚠️</h2>
                </Details>

                <Details title="1 - Calendar">
                    <h2 className='font-bold text-xl mb-2.5'>⚠️ Under construction ⚠️</h2>
                </Details >

                <Details title="2 - League matchs style">
                    <h2 className='font-bold text-xl mb-2.5'>⚠️ Under construction ⚠️</h2>
                </Details>

                <Details title="3 - Rules">
                    <h2 className='font-bold text-xl mb-2.5'>⚠️ Under construction ⚠️</h2>
                </Details>

                <Details title="4 - Suggestions">
                    <p>If you want to give us suggestions for this event (and futures events also), send an email here: <a className='text-yellow-400 hover:text-yellow-500' href='mailto:sewerfox456@proton.me' target="_blank">sewerfox456@proton.me</a></p>
                </Details>
            </div>
        </>
    )
}