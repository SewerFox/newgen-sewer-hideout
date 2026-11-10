import { Link } from 'react-router-dom'

export function NavigationBar() {
    const navButtons =
        [
            { text: "Homepage", href: "/" },
            { text: "STK events", href: "/events" },
            { text: "Hall of fame", href: "/halloffame" },
            { text: "STK Konqi servers", href: "/servers" },
            { text: "Bunch of links", href: "/links" },
        ]


    return (
        <div className="flex flex-col gap-2.5 items-center justify-between text-2xl
        sm:flex-row 
        border-b-2 border-b-green-600 pb-1.5">
            {navButtons.map((button, index) => (
                <Link key={index} className="text-lime-500 hover:text-lime-600 text-center" to={button.href}>
                    {button.text}
                </Link>
            ))}
        </div>
    )
}