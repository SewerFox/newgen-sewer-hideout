import { HeaderWithImage } from '../../../components/header_with_image/index'
import { Details } from '../../../components/details/index'
import { RankingTable } from '../../../components/ranking-tables'
import MobileGPLogo from "../../../assets/events/misc-event/mobile27.png"

export function MobileGP() {

    return (
        <>
            <HeaderWithImage src={MobileGPLogo} border={true}>
                <h1 className='text-yellow-400 text-2xl'>Welcome to the STK Mobile Showdown!</h1>
                <p> This tournament will be played between <b>(?) of 2027</b>, starting xxx z and ending yyy a.<br /> It will be organized by Gusta, with some support by FabianF (I hope). <br /> The races will happen in the server <i>STK Konqi Racing League</i>. <br /> You don't need to register to participate in this event. <br /> Just enter in your mobile device! (Make sure to send a recording to prove that you really played in mobile) <br /> Also, please make sure to read the rules below.</p>
            </HeaderWithImage>
            <div className='mt-2.5 mb-2.5'>
                <Details title="0 - Showdown overview">
                    <h2 className=' text-center font-bold text-xl mb-2.5'>⚠️ Under construction ⚠️</h2>
                    <RankingTable
                        csvUrl={"about:blank"}
                        tableStyle={"ranking-cols"} cols={5}
                        allowSorting={true} allowDropping={0}
                        scoringSystem={[0, 12, 10, 8, 6, 5, 4, 3, 2, 1]}
                    >
                        <p>#</p>
                        <p>Player</p>
                        <p>Points</p>
                        <p>GP1</p>
                        <p>GP2</p>
                    </RankingTable>
                </Details>

                <Details title="1 - Rules and calendar">
                    <h2 className='font-bold text-xl mb-2.5'>⚠️ Under construction ⚠️</h2>
                </Details>

                <Details title="2 - Suggestions">
                    <p>If you want to give us suggestions for this event (and futures events also), send an email here: <a className='text-yellow-400 hover:text-yellow-500' href='mailto:sewerfox456@proton.me' target="_blank">sewerfox456@proton.me</a></p>
                </Details>
            </div>
        </>
    )
}