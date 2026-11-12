import { HeaderWithImage } from '../../../components/header_with_image/index'
import { Details } from '../../../components/details/index'
import { RankingTable } from '../../../components/ranking-tables'
import EoW2026Logo from "../../../assets/events/marathon/2026.png"

export function EoW2026() {

    return (
        <>
            <HeaderWithImage src={EoW2026Logo} border={true}>
                <h1 className='text-red-400 text-2xl'>Welcome to the STK End-of-Year Marathon of 2026 page!</h1>
                <p>This event will be day <b>December 12 of 2026</b>. <br /> It will be organized by Gusta, with some support by FabianF. <br /> The race will be hosted into the server <i>Konqi's Enduro Resort</i>. <br />You don't need to register to participate in this event. <br /> Just enter in the specified day at 16:00 UTC (converted times to your region in: <a className='text-red-400 hover:text-red-500' href="https://www.timeanddate.com/worldclock/fixedtime.html?msg=STK+Enduro+Tournament%27s+races+start+time&iso=20261010T16&p1=1440" target="_blank">Time zone converter</a>). and have fun! </p>
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
                    <h3 className='font-bold'>1.1 Schedule</h3>
                    <ul>
                        <li className='text-red-200'>The will start at 16:00 UTC (converted times to your region in: <a className='text-red-400 hover:text-red-500' href="https://www.timeanddate.com/worldclock/fixedtime.html?msg=STK+Enduro+Tournament%27s+races+start+time&iso=20261010T16&p1=1440" target="_blank">Time zone converter</a>).</li>
                        <li className='text-red-200'> The race will start at most 10 minutes after the scheduled time (to wait for more players), and we can host one more race, if the players wants this</li>
                    </ul>

                    <h3 className='font-bold'>1.2 Prohibited behaviour list</h3>
                    <ul>
                        <li className='text-red-200'> Don't drive in the reverse direction of the players (or do anything that will disturb, like stopping in the middle of the track without any reason). If you try to do this, well… the server (that was modded by Heuchi1/kimden) will just kick you :)</li>
                        <li className='text-red-200'> Don't offend anyone with extremely heavy words (racism or another type of prejudice, many swear words directed at some players, the organizers or anyone else, or any big scuffle). If you dare to do this, you can be banned for the rest of the tournament or, in worse cases, of all future events.</li>
                    </ul>
                    <p className='text-red-300'><i>Depending on your behaviour, organizers may report you to STK admins, and the consequences can be even bigger for you.</i></p>
                </Details>

                <Details title="2 - Suggestions">
                    <p>If you want to give us suggestions for this event (and futures events also), send an email here: <a className='text-red-400 hover:text-red-500' href='mailto:sewerfox456@proton.me' target="_blank">sewerfox456@proton.me</a></p>
                </Details>
            </div>
        </>
    )
}