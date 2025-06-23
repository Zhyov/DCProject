import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="pl-8 pr-8 bg-white dark:bg-coal w-100% h-24 flex flex-nowrap flex-row justify-between">
            <div className="flex flex-nowrap flex-row items-center basis-auto gap-x-2">
                <img className="size-8 invert-50" alt="here will be logo" src="https://www.svgrepo.com/show/22031/home-icon-silhouette.svg" />
                <Link to="/DCProject/">
                    <div className="p-2 rounded-md items-center transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:*:invert">
                        <span className="font-[600] text-neutral-400 dark:text-neutral-950 invert-50">Being a digital citizen</span>
                    </div>
                </Link>
                <Link to="/DCProject/test">
                    <div className="p-2 rounded-md items-center transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:*:invert">
                        <span className="font-[600] text-neutral-400 dark:text-neutral-950 invert-50">Take the test</span>
                    </div>
                </Link>
            </div>
            <div className="flex flex-nowrap flex-row items-center gap-x-4">
                <button className="p-2 rounded-md items-center transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:cursor-pointer"
                        onClick={(e) => {
                            const html = document.documentElement
                            const currentTheme = html.getAttribute("data-theme")
                            html.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark")
                            e.target.setAttribute("src", currentTheme === "dark" ?  "https://www.svgrepo.com/show/304625/moon-dark-theme.svg" : "https://www.svgrepo.com/show/433086/light-mode.svg")
                        }}>
                    <img className="font-[600] hover:dark:invert hover:invert-40 invert-50 size-8" alt="change dark-light mode" src="https://www.svgrepo.com/show/433086/light-mode.svg" />
                </button>
            </div>
        </nav>
    )
}