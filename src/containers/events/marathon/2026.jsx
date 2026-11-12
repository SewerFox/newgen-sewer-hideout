import { HeaderWithImage } from '../../../components/header_with_image/index'
import { Details } from '../../../components/details/index'
import { RankingTable } from '../../../components/ranking-tables'
import EoW2026Logo from "../../../assets/events/marathon/2026.png"

export function EoW2026() {

    return (
        <>
            <HeaderWithImage src={EoW2026Logo} border={true}>
                <h1 className='text-red-400 text-2xl'>Welcome to STK the End-of-Year Marathon of 2026!</h1>
                <p> This tournament will be played day <b>December 12 of 2026</b>. <br /> It will be organized by Gusta, with some support by FabianF (I hope). <br /> The races will happen in the server <i>Konqi's Enduro Resort</i>. <br /> You don't need to register to participate in this event. <br /> Just enter in the specified day at 16:00 UTC and have fun! </p>
                <strong className='text-red-500'>Selected track of the year: Snow Peak 75 laps (normal direction)</strong>
            </HeaderWithImage>
            <div className='mt-2.5 mb-2.5'>
                <Details title="0 - Table ">
                    <h2 className=' text-center font-bold text-xl mb-2.5'>⚠️ Under construction ⚠️</h2>
                    <RankingTable
                        csvUrl={"https://raw.githubusercontent.com/SewerFox/newgen-sewer-hideout/39ff15a63385bada6fd3a0e3fc7ebc5f00c708ec/src/assets/results/eow26-results.csv"} 
                        tableStyle={"ranking-single"}
                        allowSorting={false} allowDropping={0}
                        scoringSystem={[0]}
                    >
                        <p>#</p>
                        <p>Player</p>
                        <p>Racing Time</p>
                    </RankingTable>
                </Details>

                <Details title="1 - Rules">
                    <p>Will the exactly same rules of STK Enduro Tournament 1st</p>
                </Details>

                <Details title="2 - Suggestions">
                    <p>If you want to give us suggestions for this event (and futures events also), send an email here: <a className='text-red-400 hover:text-red-500' href='mailto:sewerfox456@proton.me' target="_blank">sewerfox456@proton.me</a></p>
                </Details>
            </div>
        </>
    )
}