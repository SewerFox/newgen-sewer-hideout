export function Footer() {
    const mySTKChats = // My Social Medias
        [
            { text: "Discord server", href: "https://discord.gg/9A5XvTZs8" },
            { text: "Matrix space", href: "https://matrix.to/#/#supertuxkart_b-side_space:matrix.org" },
            { text: "The channels have text", href: "about:blank" },
            { text: "and voice-call bridges", href: "about:blank" },
        ]
    const socialMedia = // My Social Medias
        [
            { text: "My GitHub main page", href: "https://github.com/SewerFox" },
            { text: "My GitHub alt page", href: "https://github.com/Gustanator" },
            { text: "My YouTube channel", href: "https://www.youtube.com/@Gusta_TheSewerFox" },
        ]

    const superTuxKart = // SuperTuxKart
        [
            { text: "Official website", href: "https://supertuxkart.net" },
            { text: "STK Official Forum", href: "https://forum.supertuxkart.net" },
            { text: "STK Patreon", href: "https://members.supertuxkart.net" },
        ]

    const KDE = // KDE Project
        [
            { text: "Official website", href: "https://kde.org" },
            { text: "KDE Community Wiki", href: "https://community.kde.org/Main_Page" },
            { text: "Konqi goofies :3", href: "https://community.kde.org/Promo/Material/Mascots" },
        ]

    const miscThings = // My other interests
        [
            { text: "Sonic prime", href: "https://sonic.fandom.com/wiki/Sonic_Prime" },
            { text: "BattleBots", href: "https://battlebots.com/" },
            { text: "Formula One", href: "https://www.formula1.com/" },
        ]


    return (
        <div className="flex flex-col gap-2.5 md:items-center justify-between text-2xl
        border-t-2 border-t-green-600 pb-1.5">
            <h3 className="text-green-500 text-left text-3xl mt-2" >Some sites</h3>
            <div className="flex flex-col md:flex-row items-start text-left justify-around gap-10">
                <div className="sm:flex sm:flex-col sm:justify-between">
                    <p>My STK chat channels</p>
                    <div className="sm:flex sm:flex-col ">
                        {mySTKChats.map((button, index) => (
                            <a key={index} className="flex text-lime-500 hover:text-lime-600 text-left text-lg md:text-sms" href={button.href} target="_blank">
                                {button.text}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="sm:flex sm:flex-col sm:justify-between">
                    <p>My Social Medias</p>
                    <div className="sm:flex sm:flex-col ">
                        {socialMedia.map((button, index) => (
                            <a key={index} className="flex text-lime-500 hover:text-lime-600 text-left text-lg md:text-sms" href={button.href} target="_blank">
                                {button.text}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="sm:flex sm:flex-col sm:justify-between">
                    <p>SuperTuxKart</p>
                    <div className="sm:flex sm:flex-col ">
                        {superTuxKart.map((button, index) => (
                            <a key={index} className="flex text-lime-500 hover:text-lime-600 text-left text-lg" href={button.href} target="_blank">
                                {button.text}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="sm:flex sm:flex-col sm:justify-between">
                    <p>KDE Project</p>
                    <div className="sm:flex sm:flex-col ">
                        {KDE.map((button, index) => (
                            <a key={index} className="flex text-lime-500 hover:text-lime-600 text-left text-lg" href={button.href} target="_blank">
                                {button.text}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="sm:flex sm:flex-col sm:justify-between">
                    <p>My other interests</p>
                    <div className="sm:flex sm:flex-col ">
                        {miscThings.map((button, index) => (
                            <a key={index} className="flex text-lime-500 hover:text-lime-600 text-left text-lg" href={button.href} target="_blank">
                                {button.text}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}