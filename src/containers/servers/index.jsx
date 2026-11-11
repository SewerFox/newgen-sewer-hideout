import { GridBox } from '../../components/grid_box/index'

export function ServersList() {
    return (
        <div className="flex flex-col items-center mb-2.5">
            <div className="text-center items-center m-1.5">
                <h1 className='text-green-400 text-2xl mb-1.5'>STK Konqi servers list</h1>
                <p className='text-green-200 text-lg lg:pl-20 lg:pr-20 mb-2.5'>The servers use the kimden fork instead of the upstream version, with plans to update his version to the actual git (1.x and Evo branches) code, as the original code hasn't been updated since Feb/2026.</p>
            </div>
            <div className="text-center items-center mb-1.5">
                <div className='grid gap-4  md:grid-cols-2 md:gap-16 xl:grid-cols-3'>
                    <GridBox>
                        <h2 className='text-green-300 font-bold text-xl'>STK Konqi Racing Club</h2>
                        <h3 className='text-green-200 text-md font-bold'>Game mode: Normal Race</h3>
                        <p className='text-sm'>A normal server for normal races :)<br />There, I'm willing to held the STK Racing Cup (a future event) also.</p>
                    </GridBox>
                    <GridBox>
                        <h2 className='text-green-300 font-bold text-xl'>(STK) Konqi Endurance Resort</h2>
                        <h3 className='text-green-200 text-md font-bold'>Game mode: Normal Race (fixed in 20 laps)</h3>
                        <p className='text-sm'>Meant to be used for endurance races.<br />There, is held the STK Enduro Tournament,<br />and will be held all the editions of STK End-of-Year Marathon also.</p>
                    </GridBox>
                    <GridBox>
                        <h2 className='text-green-300 font-bold text-xl'>
                            STK Evolution Konqi Laboratory
                        </h2>
                        <h2 className='text-yellow-300 text-md font-bold'>(Under construction)</h2>

                        <h3 className='text-green-200 text-md font-bold'>Game mode: Custom</h3>
                        <p className='text-sm'>Special server to test STK Evolution (the next version of STK).</p>
                    </GridBox>
                </div>
            </div>
        </div>
    )
}