export function BackgroundContainer({ children }) {

    return (
        <div className="flex min-h-screen w-screen items-center justify-center bg-black sbg-no-repeat text-white" >
            <div className="p-5 bg-[rgba(127,255,127,0.15)] rounded-lg border-4 border-green-600 w-[92vw] max-h-[92vh] overflow-y-auto">
                {children}
            </div>
        </div>
    )
}