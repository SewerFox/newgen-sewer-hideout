import { HeaderWithImage } from '../../../components/header_with_image/index'
import { Details } from '../../../components/details/index'
import { RankingTable } from '../../../components/ranking-tables'
import Enduro2stLogo from "../../../assets/events/enduro/2ed/enduro-logo.png"

export function Enduro2nd() {

    return (
        <>
            <HeaderWithImage src={Enduro2stLogo} border={true}>
                <h1 className='text-yellow-400 text-2xl'>Welcome to the 2nd Edition of STK Enduro tournament!</h1>
                <p> This tournament will be played between <b>xxx and yyy of 2027</b>, starting xxx z and ending yyy a.<br /> It will be organized by Gusta, with some support by FabianF (I hope). <br /> The races will happen in the server <i>Konqi's Endurance Resort</i>. <br /> You don't need to register to participate in this event. <br /> Just enter in the dedicated server on the scheduled days (see calendar below) and have fun :) <br /> Also, please make sure to read the rules below (we did several changes there).</p>
            </HeaderWithImage>
            <div className='mt-2.5 mb-2.5'>
                <Details title="0 - Ranking table">
                    <RankingTable csvUrl={"https://about:blank"}>
                        <p>#</p>
                        <p>Player</p>
                        <p>Points</p>
                        <p>undefined yet</p>
                        <p>undefined yet</p>
                        <p>undefined yet</p>
                        <p>undefined yet</p>
                        <p>undefined yet</p>
                        <p>undefined yet</p>
                        <p>undefined yet</p>
                        <p>undefined yet</p>
                        <p>undefined yet</p>
                        <p>undefined yet</p>
                        <p>undefined yet</p>
                        <p>undefined yet</p>
                    </RankingTable>
                </Details>

                <Details title="1 - Calendar">
                    <p>All rounds will be started on a <b>Saturday, at 16:00 UTC</b> (converted times to your region in: <a href="https://www.timeanddate.com/worldclock/fixedtime.html?msg=STK+Enduro+Tournament%27s+races+start+time&iso=20261010T16&p1=1440" target="_blank">Time zone converter</a>).</p>
                    <p><b>Will be defined soon</b></p> 
                </Details >

                <Details title="2 - Scoring system">
                    <p>The tournament will use the following basic system (near of F1 2000s system): </p>
                    <div className='mt-2 mb-2 text-amber-400'>
                        <p>(1st - +12 points)</p>
                        <p>(2nd - +10 points)</p>
                        <p>(3rd - +8 points)</p>
                        <p>(4th - +6 points)</p>
                        <p>(5th - +5 points)</p>
                        <p>(6th - +4 points)</p>
                        <p>(7th - +3 points)</p>
                        <p>(8th - +2 points)</p>
                        <p>(9th - +1 points)</p>
                    </div>
                    <p>We won't add points for fastest laps.</p>
                    <p>NOTE: This edition will start to use a dropped-scores system: <br /> The worst THREE results of each player will be dropped in the final rankings, including races that the player was absent or just was with a horrible pace.</p>
                </Details>

                <Details title="3 - Rules">
                    <h2 className='font-bold text-xl mb-2.5'>⚠️ Under construction ⚠️</h2>
                    <h3 className=''>Changes are marked in green</h3>
                    <h3 className='font-bold'>3.1 Schedule</h3>
                    <ul>
                        <li className='text-yellow-200'>All rounds will start on a Saturday, at 16:00 UTC (converted times to your region in: <a className='text-yellow-400 hover:text-yellow-500' href="https://www.timeanddate.com/worldclock/fixedtime.html?msg=STK+Enduro+Tournament%27s+races+start+time&iso=20261010T16&p1=1440" target="_blank">Time zone converter</a>).</li>
                        <li className='text-yellow-200'> The first race will start at most 5 minutes after the scheduled time (to wait for more players), and the second race will start after a break of 5–7 minutes, as it's exhausting to play two 20 laps races  without resting a little :)</li>
                        <li className='text-yellow-200'>The majority of the races are planned to have 20 laps, so each race will likely last 20–30 minutes.</li>
                    </ul>

                    <h3 className='font-bold'>3.2 Add-on tracks</h3>
                    <ul>
                        <li className='text-yellow-200'>Some rounds will contain some add-on tracks. You MUST have these add-ons installed. If not, you won't be able to play on these tracks (you can just spectate in this case).</li>
                        <li className='text-yellow-200'>You can install these add-ons <a className='text-yellow-400 hover:text-yellow-500' href="https://github.com/Gustanator/stk-enduro-archive/releases/tag/addons" target="_blank">here</a>. In the server motd, there will be a direct link to install the add-ons  inside the game.</li>
                    </ul>

                    <h3 className='font-bold'>3.3 Prohibited behaviour list</h3>
                    <ul>
                        <li className='text-yellow-200'> Don't drive in the reverse direction of the players (or do anything that will disturb, like stopping in the middle of the track without any reason). If you try to do this, well… the server (that was modded by Heuchi1/kimden) will just kick you :)</li>
                        <li className='text-yellow-200'> Don't offend anyone with extremely heavy words (racism or another type of prejudice, many swear words directed at some players, the organizers or anyone else, or any big scuffle). If you dare to do this, you can be banned for the rest of the tournament or, in worse cases, of all future events.</li>
                    </ul>
                    <p className='text-yellow-300'><i>Depending on your behaviour, organizers may report you to STK admins, and the consequences can be even bigger for you.</i></p>
                </Details>

                <Details title="4 - Suggestions">
                    <p>If you want to give us suggestions for this event (and futures events also), send an email here: <a className='text-yellow-400 hover:text-yellow-500' href='mailto:sewerfox456@proton.me' target="_blank">sewerfox456@proton.me</a></p>
                </Details>
            </div>
        </>
    )
}