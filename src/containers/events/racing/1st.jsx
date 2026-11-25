import { HeaderWithImage, Details, RankingTable } from '../../../components'
import Race1stLogo from "../../../assets/events/league/1ed/racing-logo.png"
import FinalsJSON from "../../../assets/results/racingleague1st/finals-round.json"

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
                    <div className='mb-5'>
                        <h2 className='font-bold text-xl mt-2.5 text-center'>Groups round</h2>
                        <div className='grid md:grid-cols-5'>
                            <div className='w-fit m-auto md:w-full'>
                                <RankingTable
                                    csvUrl={"https://raw.githubusercontent.com/SewerFox/newgen-sewer-hideout/refs/heads/main/src/assets/results/racingleague1st/groupA.csv"}
                                    tableStyle={"ranking-single"}
                                    allowSorting={false} allowDropping={0}
                                    scoringSystem={[0]}
                                >
                                    <p>#</p>
                                    <p>Player</p>
                                    <p>Points</p>
                                </RankingTable>

                                <section className='w-11/12 md:w-11/12 m-auto mt-3 mb-3 overflow-x-auto border-2 border-green-600 rounded-md p-0.5 text-sm'>
                                    <p><b>GROUP A</b> - 00/00/2027</p>
                                </section>
                            </div>
                            <div className='w-fit m-auto md:w-full'>
                                <RankingTable
                                    csvUrl={"https://raw.githubusercontent.com/SewerFox/newgen-sewer-hideout/refs/heads/main/src/assets/results/racingleague1st/groupB.csv"}
                                    tableStyle={"ranking-single"}
                                    allowSorting={false} allowDropping={0}
                                    scoringSystem={[0]}
                                >
                                    <p>#</p>
                                    <p>Player</p>
                                    <p>Points</p>
                                </RankingTable>

                                <section className='w-11/12 m-auto mt-3 mb-3 overflow-x-auto border-2 border-green-600 rounded-md p-0.5 text-sm'>
                                    <p><b>GROUP B</b> - 00/00/2027</p>
                                </section>
                            </div>
                            <div className='w-fit m-auto md:w-full'>
                                <RankingTable
                                    csvUrl={"https://raw.githubusercontent.com/SewerFox/newgen-sewer-hideout/refs/heads/main/src/assets/results/racingleague1st/groupC.csv"}
                                    tableStyle={"ranking-single"}
                                    allowSorting={false} allowDropping={0}
                                    scoringSystem={[0]}
                                >
                                    <p>#</p>
                                    <p>Player</p>
                                    <p>Points</p>
                                </RankingTable>

                                <section className='w-11/12 m-auto mt-3 mb-3 overflow-x-auto border-2 border-green-600 rounded-md p-0.5 text-sm'>
                                    <p><b>GROUP C</b> - 00/00/2027</p>
                                </section>
                            </div>
                            <div className='w-fit m-auto md:w-full'>
                                <RankingTable
                                    csvUrl={"https://raw.githubusercontent.com/SewerFox/newgen-sewer-hideout/refs/heads/main/src/assets/results/racingleague1st/groupD.csv"}
                                    tableStyle={"ranking-single"}
                                    allowSorting={false} allowDropping={0}
                                    scoringSystem={[0]}
                                >
                                    <p>#</p>
                                    <p>Player</p>
                                    <p>Points</p>
                                </RankingTable>

                                <section className='w-11/12 m-auto mt-3 mb-3 overflow-x-auto border-2 border-green-600 rounded-md p-0.5 text-sm'>
                                    <p><b>GROUP D</b> - 00/00/2027</p>
                                </section>
                            </div>
                            <div className='w-fit m-auto md:w-full'>
                                <RankingTable
                                    csvUrl={"https://raw.githubusercontent.com/SewerFox/newgen-sewer-hideout/refs/heads/main/src/assets/results/racingleague1st/groupE.csv"}
                                    tableStyle={"ranking-single"}
                                    allowSorting={false} allowDropping={0}
                                    scoringSystem={[0]}
                                >
                                    <p>#</p>
                                    <p>Player</p>
                                    <p>Points</p>
                                </RankingTable>

                                <section className='w-11/12 m-auto mt-3 mb-3 overflow-x-auto border-2 border-green-600 rounded-md p-0.5 text-sm'>
                                    <p><b>GROUP E</b> - 00/00/2027</p>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <h2 className='font-bold text-xl mt-2.5 text-center'>Finals round</h2>
                        <div className='flex gap-5'>
                            <div className='w-fit'>
                                <p className="font-bold text-center">Wild Cards Showdown</p>
                                <RankingTable
                                    csvUrl={"https://raw.githubusercontent.com/SewerFox/newgen-sewer-hideout/refs/heads/main/src/assets/results/racingleague1st/wild-cards.csv"}
                                    tableStyle={"ranking-single"}
                                    allowSorting={false} allowDropping={0}
                                    scoringSystem={[0]}
                                >
                                    <p>#</p>
                                    <p>Player</p>
                                    <p>Points</p>
                                </RankingTable>
                            </div>
                            <div className='w-full border-2 border-green-600 rounded-md p-0.5'>
                                {console.log(FinalsJSON)}
                            </div>
                        </div>
                    </div>
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