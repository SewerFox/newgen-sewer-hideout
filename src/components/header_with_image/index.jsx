export function HeaderWithImage({ children, src, border }) {
    return (
        <div className="flex flex-col items-center justify-center gap-6
        md:flex-row
        border-b-2 border-b-green-600 pb-2.5 pt-2.5">
            <div className="md:w-2xl-">
                {children}
            </div>
            <div>
                <img className={`w-56 m-auto mb-3 border ${border ? "border-lime-600" : "border-transparent"} rounded-lg`} src={src} />
            </div>
        </div>
    )
}