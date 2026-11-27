import { HeaderWithImage, Details, RankingTable } from '../../../components'
import Race1stLogo from "../../../assets/events/league/1ed/racing-logo.png"
import FinalsJSON from "../../../assets/events/league/1ed/results/finals-round.json"

export function RacingLeague1st() {

    return (
        <>
            <HeaderWithImage src={Race1stLogo} border={true}>
                <h1 className='text-yellow-400 text-2xl'>Welcome to the 1st Edition of STK Racing League!</h1>
                <p> This tournament will be played between <b>February(?) and April(?) of 2027</b>, starting xxx z and ending yyy a.<br /> It will be organized by Gusta, with some support by FabianF (I hope). <br /> The races will happen in the server <i>STK Konqi Racing League</i>. <br /> You need to register to participate in this event. <br /> Enter *here* to register <br /> Also, please make sure to read the rules below.</p>
            </HeaderWithImage>
            <div className='mt-2.5 mb-2.5'>
                <Details title="0 - League Overview ">
                    <div className='mb-5'>
                        <h2 className='font-bold text-xl mt-2.5 text-center'>Groups round</h2>
                        <div className='grid md:grid-cols-6 text-center'>
                            <div className='w-fit m-auto md:w-full'>
                                <RankingTable
                                    csvUrl={"https://raw.githubusercontent.com/SewerFox/newgen-sewer-hideout/refs/heads/main/src/assets/events/league/1ed/results/groupA.csv"}
                                    tableStyle={"ranking-single"}
                                    allowSorting={false} allowDropping={0}
                                    scoringSystem={[0]}
                                >
                                    <p>#</p>
                                    <p>Player</p>
                                    <p>Points</p>
                                </RankingTable>
                                <section className='w-11/12 md:w-11/12 m-auto mt-3 mb-3 overflow-x-auto border-2 border-green-600 rounded-md p-0.5 text-sm'>
                                    <a href=''><b>GROUP A</b> - 00/00/2027</a>
                                </section>
                            </div>


                            <div className='w-fit m-auto md:w-full'>
                                <RankingTable
                                    csvUrl={"https://raw.githubusercontent.com/SewerFox/newgen-sewer-hideout/refs/heads/main/src/assets/events/league/1ed/results/groupB.csv"}
                                    tableStyle={"ranking-single"}
                                    allowSorting={false} allowDropping={0}
                                    scoringSystem={[0]}
                                >
                                    <p>#</p>
                                    <p>Player</p>
                                    <p>Points</p>
                                </RankingTable>
                                <section className='w-11/12 m-auto mt-3 mb-3 overflow-x-auto border-2 border-green-600 rounded-md p-0.5 text-sm'>
                                    <a href=''><b>GROUP B</b> - 00/00/2027</a>
                                </section>
                            </div>


                            <div className='w-fit m-auto md:w-full'>
                                <RankingTable
                                    csvUrl={"https://raw.githubusercontent.com/SewerFox/newgen-sewer-hideout/refs/heads/main/src/assets/events/league/1ed/results/groupC.csv"}
                                    tableStyle={"ranking-single"}
                                    allowSorting={false} allowDropping={0}
                                    scoringSystem={[0]}
                                >
                                    <p>#</p>
                                    <p>Player</p>
                                    <p>Points</p>
                                </RankingTable>
                                <section className='w-11/12 m-auto mt-3 mb-3 overflow-x-auto border-2 border-green-600 rounded-md p-0.5 text-sm'>
                                    <a href=''><b>GROUP C</b> - 00/00/2027</a>
                                </section>
                            </div>


                            <div className='w-fit m-auto md:w-full'>
                                <RankingTable
                                    csvUrl={"https://raw.githubusercontent.com/SewerFox/newgen-sewer-hideout/refs/heads/main/src/assets/events/league/1ed/results/groupD.csv"}
                                    tableStyle={"ranking-single"}
                                    allowSorting={false} allowDropping={0}
                                    scoringSystem={[0]}
                                >
                                    <p>#</p>
                                    <p>Player</p>
                                    <p>Points</p>
                                </RankingTable>
                                <section className='w-11/12 m-auto mt-3 mb-3 overflow-x-auto border-2 border-green-600 rounded-md p-0.5 text-sm'>
                                    <a href=''><b>GROUP D</b> - 00/00/2027</a>
                                </section>
                            </div>


                            <div className='w-fit m-auto md:w-full'>
                                <RankingTable
                                    csvUrl={"https://raw.githubusercontent.com/SewerFox/newgen-sewer-hideout/refs/heads/main/src/assets/events/league/1ed/results/groupE.csv"}
                                    tableStyle={"ranking-single"}
                                    allowSorting={false} allowDropping={0}
                                    scoringSystem={[0]}
                                >
                                    <p>#</p>
                                    <p>Player</p>
                                    <p>Points</p>
                                </RankingTable>
                                <section className='w-11/12 m-auto mt-3 mb-3 overflow-x-auto border-2 border-green-600 rounded-md p-0.5 text-sm'>
                                    <a href=''><b>GROUP E</b> - 00/00/2027</a>
                                </section>
                            </div>


                            <div className='w-fit m-auto md:w-full'>
                                <RankingTable
                                    csvUrl={"https://raw.githubusercontent.com/SewerFox/newgen-sewer-hideout/refs/heads/main/src/assets/events/league/1ed/results/groupF.csv"}
                                    tableStyle={"ranking-single"}
                                    allowSorting={false} allowDropping={0}
                                    scoringSystem={[0]}
                                >
                                    <p>#</p>
                                    <p>Player</p>
                                    <p>Points</p>
                                </RankingTable>
                                <section className='w-11/12 m-auto mt-3 mb-3 overflow-x-auto border-2 border-green-600 rounded-md p-0.5 text-sm'>
                                    <a href=''><b>GROUP F</b> - 00/00/2027</a>
                                </section>
                            </div>
                        </div>
                    </div>

                    <div className='mb-5'>
                        <h2 className='font-bold text-xl mb-2.5 text-center'>Finals round</h2>
                        <div className='flex flex-col md:flex-row gap-4'>
                            <div className='md:w-fit border-2 border-gray-300 rounded-md p-2.5 flex flex-col items-center justify-center'>
                                <a href='' className="font-bold text-center">Wild Cards Showdown - 00/00/2027</a>
                                <RankingTable
                                    csvUrl={"https://raw.githubusercontent.com/SewerFox/newgen-sewer-hideout/refs/heads/main/src/assets/events/league/1ed/results/wild-cards.csv"}
                                    tableStyle={"ranking-single"}
                                    allowSorting={false} allowDropping={0}
                                    scoringSystem={[0]}
                                >
                                    <p>#</p>
                                    <p>Player</p>
                                    <p>Points</p>
                                </RankingTable>
                            </div>

                            <div className='md:w-fit overflow-x-auto border-2 border-green-600 rounded-md p-2.5 flex gap-12 items-center text-center'>
                                {console.log(FinalsJSON)}
                                {/* Quarterfinals */}
                                <section className="flex flex-col gap-3">
                                    <a href='' className="font-bold">Quarterfinals 00/00/2027</a>

                                    <div className='w-full border-2 border-green-600 rounded-md p-0.5'>
                                        <div className={`${(FinalsJSON.quarterfinals.number1 === FinalsJSON.semifinals.semi18)
                                            ? "font-black text-green-300"
                                            : "line-through text-red-300"}`}
                                        >
                                            1 - {FinalsJSON.quarterfinals.number1}
                                        </div>
                                        <div className={`${(FinalsJSON.quarterfinals.number8 === FinalsJSON.semifinals.semi18)
                                            ? "font-black text-green-300"
                                            : "line-through text-red-300"}`}
                                        >
                                            8 - {FinalsJSON.quarterfinals.number8}
                                        </div>
                                    </div>
                                    <div className='w-full border-2 border-green-600 rounded-md p-0.5'>
                                        <div className={`${(FinalsJSON.quarterfinals.number4 === FinalsJSON.semifinals.semi45)
                                            ? "font-black text-green-300"
                                            : "line-through text-red-300"}`}
                                        >
                                            4 - {FinalsJSON.quarterfinals.number4}
                                        </div>
                                        <div className={`${(FinalsJSON.quarterfinals.number5 === FinalsJSON.semifinals.semi45)
                                            ? "font-black text-green-300"
                                            : "line-through text-red-300"}`}
                                        >
                                            5 - {FinalsJSON.quarterfinals.number5}
                                        </div>
                                    </div>
                                    <div className='w-full border-2 border-green-600 rounded-md p-0.5'>
                                        <div className={`${(FinalsJSON.quarterfinals.number3 === FinalsJSON.semifinals.semi36)
                                            ? "font-black text-green-300"
                                            : "line-through text-red-300"}`}
                                        >
                                            3 - {FinalsJSON.quarterfinals.number3}
                                        </div>
                                        <div className={`${(FinalsJSON.quarterfinals.number6 === FinalsJSON.semifinals.semi36)
                                            ? "font-black text-green-300"
                                            : "line-through text-red-300"}`}
                                        >
                                            6 - {FinalsJSON.quarterfinals.number6}
                                        </div>
                                    </div>
                                    <div className='w-full border-2 border-green-600 rounded-md p-0.5'>
                                        <div className={`${(FinalsJSON.quarterfinals.number2 === FinalsJSON.semifinals.semi27)
                                            ? "font-black text-green-300"
                                            : "line-through text-red-300"}`}
                                        >
                                            2 - {FinalsJSON.quarterfinals.number2}
                                        </div>
                                        <div className={`${(FinalsJSON.quarterfinals.number7 === FinalsJSON.semifinals.semi27)
                                            ? "font-black text-green-300"
                                            : "line-through text-red-300"}`}
                                        >
                                            7 - {FinalsJSON.quarterfinals.number7}
                                        </div>
                                    </div>
                                </section>

                                {/* Semifinals */}
                                <section className="flex flex-col gap-3">
                                    <a href='' className="font-bold">Semifinals 00/00/2027</a>

                                    <div className='w-full border-2 border-green-600 rounded-md p-0.5'>
                                        <div className={`${(FinalsJSON.semifinals.semi18 === FinalsJSON.finals.finalist1)
                                            ? "font-black text-green-300"
                                            : "line-through text-red-300"}`}
                                        >
                                            {FinalsJSON.semifinals.semi18}
                                        </div>
                                        <div className={`${(FinalsJSON.semifinals.semi45 === FinalsJSON.finals.finalist1)
                                            ? "font-black text-green-300"
                                            : "line-through text-red-300"}`}
                                        >
                                            {FinalsJSON.semifinals.semi45}
                                        </div>
                                    </div>
                                    <div className='w-full border-2 border-green-600 rounded-md p-0.5'>
                                        <div className={`${(FinalsJSON.semifinals.semi36 === FinalsJSON.finals.finalist2)
                                            ? "font-black text-green-300"
                                            : "line-through text-red-300"}`}
                                        >
                                            {FinalsJSON.semifinals.semi36}
                                        </div>
                                        <div className={`${(FinalsJSON.semifinals.semi27 === FinalsJSON.finals.finalist2)
                                            ? "font-black text-green-300"
                                            : "line-through text-red-300"}`}
                                        >
                                            {FinalsJSON.semifinals.semi27}
                                        </div>
                                    </div>
                                </section>

                                {/* Grand Final */}
                                <section className="flex flex-col gap-3">
                                    <a href='' className="font-black">Grand Final 00/00/2027</a>

                                    <div className='w-full border-2 border-green-600 rounded-md p-0.5'>
                                        <div className={`${(FinalsJSON.finals.finalist1 === FinalsJSON.podium.champion)
                                            ? "rank-1st"
                                            : "rank-2nd"}`}
                                        >{FinalsJSON.finals.finalist1}</div>
                                        <div className={`${(FinalsJSON.finals.finalist2 === FinalsJSON.podium.champion)
                                            ? "rank-1st"
                                            : "rank-2nd"}`}
                                        >{FinalsJSON.finals.finalist2}</div>
                                    </div>
                                </section>

                                {/* 3rd place contest */}
                                <section className="flex flex-col gap-3">
                                    <a href='' className="font-bold">3rd place <br />contest  00/00/2027</a>

                                    <div className='w-full border-2 border-green-600 rounded-md p-0.5'>
                                        <div className={`${(FinalsJSON.finals.thirdcontest1 === FinalsJSON.podium.third)
                                            ? "rank-3rd"
                                            : "text-green-100"}`}
                                        >{FinalsJSON.finals.thirdcontest1}</div>
                                        <div className={`${(FinalsJSON.finals.thirdcontest2 === FinalsJSON.podium.third)
                                            ? "rank-3rd"
                                            : "text-green-100"}`}
                                        >{FinalsJSON.finals.thirdcontest2}</div>
                                    </div>
                                </section>
                            </div>

                            <div className='w-full border-2 rank-1st rounded-md p-2.5  flex flex-col items-center text-center'>
                                <div className='m-2'>
                                    <h3 className="text-2xl">Champion</h3>
                                    <p className="text-white text-xl">{FinalsJSON.podium.champion}</p>
                                </div>

                                <div className='m-2'>
                                    <h3 className="rank-2nd text-2xl">Runner-up</h3>
                                    <p className="text-white text-xl">{FinalsJSON.podium.runnerup}</p>
                                </div>

                                <div className='m-2'>
                                    <h3 className="rank-3rd text-2xl">Third</h3>
                                    <p className="text-white text-xl">{FinalsJSON.podium.third}</p>
                                </div>

                                <div className='m-2'>
                                    <h3 className="text-green-100 text-2xl">Fourth</h3>
                                    <p className="text-white text-xl">{FinalsJSON.podium.fourth}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Details>

                <Details title="1 - Rules">
                    <h2 className='font-bold text-xl mb-2.5'>⚠️ Under construction ⚠️</h2>
                </Details>

                <Details title="2 - Suggestions">
                    <p>If you want to give us suggestions for this event (and futures events also), send an email here: <a className='text-yellow-400 hover:text-yellow-500' href='mailto:sewerfox456@proton.me' target="_blank">sewerfox456@proton.me</a></p>
                </Details>
            </div>
        </>
    )
}