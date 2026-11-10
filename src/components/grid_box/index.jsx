export function GridBox({ children }) {
    return (
        <div className="w-64 border-3 border-lime-600 rounded-lg p-3">
            {children}
        </div>
    )
}

export function GridBoxImage({ children, src }) {
    return (
        <div className="w-64 border-3 border-lime-600 rounded-lg p-3">
            <img className="w-56 m-auto mb-3 border border-lime-600 rounded-lg" src={src}></img>
            {children}
        </div>
    )
}