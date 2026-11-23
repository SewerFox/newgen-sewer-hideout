import { Details } from "../../components"

export function HallOfFame() {
    return (
        <div>
            <h1 className='text-center items-center border-b-2 border-b-green-600 m-1.5 text-green-300 text-2xl pb-1.5'>Tap in one of these boxes to see the hall of each event</h1>
            <div className='mt-2.5 mb-2.5'>
                <Details title="STK Enduro Tournament 1st Edition">
                    <div className="flex flex-col items-center text-center border-b-2 border-green-600 pb-3.5">
                        <p className="rank-1st text-2xl">Champion: FabianF (title-winning race: Tux Tollway)</p>
                        <p className="rank-2nd text-xl">Runner-up: Sauss-Ente</p>
                        <p className="rank-3rd text-lg">3th: ElTuneado009</p>
                        <p className="rank-th text-md">4th/5th: Spyker462 / Gustanator</p>
                    </div>
                    <br />
                    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        <div className="mb-3">
                            <h2 className="rank-th text-md">Winners: </h2>
                            <p className="text-sm font-bold">(ElTuneado009 - 3 wins)</p>
                            <p className="text-sm font-bold">(nomagno, nascartux - 2 wins)</p>
                            <p className="text-sm font-bold">(FabianF, Spyker462, mimiz, Sauss-Ente - 1 win)</p>
                        </div>
                        <div className="mb-3">
                            <h2 className="rank-th text-md">Podium-sitters (without wins): </h2>
                            <p className="text-sm font-bold">(Gustanator - 2 podiums)</p>
                            <p className="text-sm font-bold">(Felix-STK, phax, Matthou, Nooonoono, MarcellDavis, dylanf319 - 1 podium)</p>
                        </div>
                        <div className="mb-3">
                            <h2 className="rank-th text-md">Just-Top-5ers's club (without podiums):</h2>
                            <p className="text-sm font-bold">(Trojan7z7VZX, lokpro, super_hun - 2 Top-5)</p>
                            <p className="text-sm font-bold">(gluteq, sparkillay, Matias01jr - 1 Top-5)</p>
                        </div>
                        <div className="mb-3">
                            <h2 className="rank-th text-md">Top 2 of each country:</h2>
                            <p className="text-sm font-bold">🇩🇪 - FabianF (1st) and Sauss-Ente (2nd)</p>
                            <p className="text-sm font-bold">🇨🇱 - ElTuneado009 (3rd)</p>
                            <p className="text-sm font-bold">🇨🇵 - Spyker462 (4th) and nascartux (8th)</p>
                            <p className="text-sm font-bold">🇧🇷 - Gustanator (5th) and Nooonoono (16th)</p>
                            <p className="text-sm font-bold">🇪🇬 - Trojan7z7VZX (11th)</p>
                            <details>
                                <summary className="text-green-300 font-bold">More...</summary>
                                <p className="text-sm font-bold">🇲🇴 - super_hun (10th) and lokpro (13th)</p>
                                <p className="text-sm font-bold">🇦🇷 - phax (9th) and dylanf319 (18th)</p>
                                <p className="text-sm font-bold">🇪🇸 - nomagno (6th) and RadicalBarry (25th)</p>
                                <p className="text-sm font-bold">🇵🇱 - gluteq (17th)</p>
                                <p className="text-sm font-bold">🇮🇹 - mimiz (14th) and dav09 (23rd)</p>
                                <p className="text-sm font-bold">🇧🇴 - sparkillay (19th)</p>
                                <p className="text-sm font-bold">🇵🇾 - Matias01jr (20th)</p>
                                <p className="text-sm font-bold">🇹🇷 - foxymel (21th)</p>
                                <p className="text-sm font-bold">🇬🇧 - Vi-King (24th)</p>
                                <p className="text-sm font-bold">🇮🇱 - Rabbi_Zilberman (26th)</p>
                                <p className="text-sm font-bold">🇦🇹 - SeniorRadior (27th)</p>
                            </details>
                        </div>
                    </div>
                </Details>
            </div>
        </div>
    )
}