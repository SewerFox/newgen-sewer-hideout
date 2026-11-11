import { HeaderWithImage } from '../../../components/header_with_image/index'
import { Details } from '../../../components/details/index'
import { RankingTable } from '../../../components/ranking-tables'
import Enduro1stLogo from "../../../assets/events/enduro/1ed/enduro-logo.png"

export function Enduro1st() {

    return (
        <>
            <HeaderWithImage src={Enduro1stLogo} border={true}>
                <h1 className='text-green-400 text-2xl'>Welcome to the 1st Edition of STK Enduro tournament!</h1>
                <p> This tournament will be played between <b>October and November of 2026</b>, starting October 3 and ending November 14.<br /> It's being organized by Gusta, with some support by FabianF. <br /> The races are happening in the server <i>Konqi's Endurance Resort</i>. <br /> You don't need to register to participate in this event. <br /> Just enter in the dedicated server on the scheduled days (see calendar below) and have fun :) <br /> Also, please make sure to read the rules below.</p>
            </HeaderWithImage>
            <div className='mt-2.5 mb-2.5'>
                <Details title="0 - Ranking table">
                    <RankingTable csvUrl={"https://raw.githubusercontent.com/SewerFox/sewer-hideout/refs/heads/sewer-site/results-assets/enduro/results/enduro-1st.csv"}>
                        <p>#</p>
                        <p>Player</p>
                        <p>Points</p>
                        <p>STK Enterprise</p>
                        <p>Cornfield Crossing</p>
                        <p>Lost Chasm</p>
                        <p>Immin. Cold Effects</p>
                        <p>Nothern Resort</p>
                        <p>Supertux Raceway</p>
                        <p>Hacienda</p>
                        <p>Shifting Sands</p>
                        <p>Tux Tollway</p>
                        <p>Green Valley (cancelled)</p>
                        <p>Antediluvian Abyss</p>
                        <p>Subsea</p>
                    </RankingTable>
                </Details>

                <Details title="1 - Calendar">
                    <p>All rounds will be started on a <b>Saturday, at 16:00 UTC</b> (converted times to your region in: <a href="https://www.timeanddate.com/worldclock/fixedtime.html?msg=STK+Enduro+Tournament%27s+races+start+time&iso=20261010T16&p1=1440" target="_blank">Time zone converter</a>).</p>
                    <p><i>Click in any races wrote here to watch its recording</i></p>
                    <h3 className='font-bold'>1.1 Opening stage</h3>
                    <p>All these races will be played in <b>normal</b> direction!</p>
                    <ul>
                        <li className='text-green-200'>
                            <a className='font-bold' href="https://youtu.be/CUHQCjFhCQk?is=xAsZk5PTLyl-lxDg">
                                October 3: <span className='text-green-300 hover:text-green-400'>STK Enterprise 20 laps – Cornfield Crossing 20 laps;</span>
                            </a>
                        </li>
                        <li className='text-green-200'>
                            <a className='font-bold' href="https://youtu.be/RP91QqEhtuI?is=Qo38G5ml4ksHpN8s">
                                October 10: <span className='text-green-300 hover:text-green-400'>Lost Chasm 20 laps – Imminent Cold Effects 20 laps (both add-ons);</span>
                            </a>
                        </li>
                        <li className='text-green-200'>
                            <a className='font-bold' href="https://www.youtube.com/live/W7m7Liwa-Ww">
                                October 17: <span className='text-green-300 hover:text-green-400'>Northern Resort 20 laps – Supertux Raceway 20 laps (add-on).</span>
                            </a>
                        </li>
                    </ul>

                    <h3 className='font-bold'>1.2 Closing stage</h3>
                    <p>All these races will be played in <b>reverse</b> direction!</p>
                    <ul>
                        <li className='text-green-200'>
                            <a className='font-bold' href="https://www.youtube.com/watch?v=IJTgrvLNS3Y">
                                October 31: <span className='text-green-300 hover:text-green-400'>Hacienda 20 laps – Shifting Sands 20 laps;</span>
                            </a>
                        </li>
                        <li className='text-green-200'>
                            <a className='font-bold' href="https://youtu.be/_d2OaWxxw7U?is=cfMWTYGNFpjj0uWq">
                                November 7: <span className='text-green-300 hover:text-green-400'>Tux Tollway 20 laps – Green Valley 20 laps (was cancelled for these reasons: </span>
                            </a>
                            <a className='font-extrabold text-green-300 hover:text-green-400' href="https://forum.supertuxkart.net/thread-437-post-1319.html#pid1319" target='_blank'>click here
                            </a>
                        </li>
                        <li className='text-green-200'>
                            <a className='font-bold' >
                                November 14: <span className='text-green-300 hover:text-green-400'>Antediluvian Abyss 20 laps – Subsea 12 laps (add-on).</span>
                            </a>
                        </li>
                    </ul>
                </Details >

                <Details title="2 - Scoring system">
                    <p>The tournament will use the following basic system (based on F1 2000s system): </p>
                    <div className='mt-2 mb-2 text-lime-400'>
                        <p>(1st - +10 points)</p>
                        <p>(2nd - +8 points)</p>
                        <p>(3rd - +6 points)</p>
                        <p>(4th - +5 points)</p>
                        <p>(5th - +4 points)</p>
                        <p>(6th - +3 points)</p>
                        <p>(7th - +2 points)</p>
                        <p>(8th - +1 points)</p>
                    </div>
                    <p>We won't add points for fastest laps.</p>
                </Details>

                <Details title="3 - Rules">
                    <h3 className='font-bold'>3.1 Schedule</h3>
                    <ul>
                        <li className='text-green-200'>All rounds will start on a Saturday, at 16:00 UTC (converted times to your region in: <a className='text-green-400 hover:text-green-500' href="https://www.timeanddate.com/worldclock/fixedtime.html?msg=STK+Enduro+Tournament%27s+races+start+time&iso=20261010T16&p1=1440" target="_blank">Time zone converter</a>).</li>
                        <li className='text-green-200'> The first race will start at most 5 minutes after the scheduled time (to wait for more players), and the second race will start after a break of 5–7 minutes, as it's exhausting to play two 20 laps races  without resting a little :)</li>
                        <li className='text-green-200'>The majority of the races are planned to have 20 laps, so each race will likely last 20–30 minutes.</li>
                    </ul>

                    <h3 className='font-bold'>3.2 Add-on tracks</h3>
                    <ul>
                        <li className='text-green-200'>Some rounds will contain some add-on tracks. You MUST have these add-ons installed. If not, you won't be able to play on these tracks (you can just spectate in this case).</li>
                        <li className='text-green-200'>You can install these add-ons <a className='text-green-400 hover:text-green-500' href="https://github.com/Gustanator/stk-enduro-archive/releases/tag/addons" target="_blank">here</a>. In the server motd, there will be a direct link to install the add-ons  inside the game.</li>
                    </ul>

                    <h3 className='font-bold'>3.3 Prohibited behaviour list</h3>
                    <ul>
                        <li className='text-green-200'> Don't drive in the reverse direction of the players (or do anything that will disturb, like stopping in the middle of the track without any reason). If you try to do this, well… the server (that was modded by Heuchi1/kimden) will just kick you :)</li>
                        <li className='text-green-200'> Don't offend anyone with extremely heavy words (racism or another type of prejudice, many swear words directed at some players, the organizers or anyone else, or any big scuffle). If you dare to do this, you can be banned for the rest of the tournament or, in worse cases, of all future events.</li>
                    </ul>
                    <p className='text-green-300'><i>Depending on your behaviour, organizers may report you to STK admins, and the consequences can be even bigger for you.</i></p>
                </Details>

                <Details title="4 - Suggestions">
                    <p>If you want to give us suggestions for this event (and futures events also), send an email here: <a className='text-green-400 hover:text-green-500' href='mailto:sewerfox456@proton.me' target="_blank">sewerfox456@proton.me</a></p>
                </Details>
            </div>
        </>
    )
}