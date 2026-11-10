export function Details({ children, title }) {
    return (
        <details>
            <summary className='text-green-400 text-2xl'>{title}</summary>
            {children}
        </details>
    )
}