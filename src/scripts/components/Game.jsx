import { useState, useEffect } from "react"
import Message from "./Message"

export default function Game() {

    const [time, setTime] = useState(() => {
        const now = new Date()
        const hour = now.getHours().toString().padStart(2, "0")
        const minute = now.getMinutes().toString().padStart(2, "0")
        return `${hour}:${minute}`
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date()
            const hour = now.getHours().toString().padStart(2, "0")
            const minute = now.getMinutes().toString().padStart(2, "0")
            setTime(`${hour}:${minute}`)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <main className="flex justify-between items-center px-40">
            <div className="mt-4 h-180 w-90 ring-10 ring-black rounded-4xl flex flex-col flex-nowrap">
                <nav className="flex flex-col flex-nowrap basis-1/6 rounded-t-4xl bg-[#f8f8f8] dark:bg-[#1a1a1a] border-b-2 border-b-[#f0f0f0] dark:border-b-[#161618]">
                    <div className="flex flex-row flex-nowrap justify-between">
                        <span className="text-black dark:text-white text-center text-[16px] font-[550] font-nunito mt-2 pl-10">
                            {time}
                        </span>
                        <div className="h-8 w-30 mt-1 bg-black rounded-full"></div>
                        <div className="flex flex-row flex-nowrap gap-x-2 justify-center pt-1 mt-1.5 pr-10">
                            <img className="size-5 dark:invert" alt="soy algo" src="https://www.svgrepo.com/show/779/wifi.svg" />
                            <img className="size-5 dark:invert" alt="soy algo2" src="https://www.svgrepo.com/show/67096/phone-battery-with-full-charge-and-a-bolt-symbol.svg" />
                        </div>
                    </div>
                    <div className="flex flex-row flex-nowrap justify-between px-2 mt-2">
                        <svg className="size-5 mt-3" width="62" height="112" viewBox="0 0 62 112" fill="none">
                            <path d="M56 6L6 56L56 106" stroke="#438cfc" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className="flex flex-col flex-nowrap items-center">
                            <img className="size-8 rounded-full" alt="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7nmvPuHivliG0y_2glZDqMW3aZ4pbd8pzw&s" />
                            <span className="text-sm text-black dark:text-white">name</span>
                        </div>
                        <svg className="size-9 mt-3" width="80" height="120" viewBox="0 0 80 120" fill="none">
                            <path d="M72.9,14.4L56,25.3V22c0-4.4-3.6-8-8-8H8c-4.4,0-8,3.6-8,8v32c0,4.4,3.6,8,8,8h40c4.4,0,8-3.6,8-8v-3.3   l16.9,10.9c1.9,1,3.1-0.7,3.1-1.7V16C76,15,74.9,13.2,72.9,14.4z M52,54c0,2.2-1.8,4-4,4H8c-2.2,0-4-1.8-4-4V22c0-2.2,1.8-4,4-4h40   c2.2,0,4,1.8,4,4V54z M72,56.3L56,46V30l16-10.3V56.3z" stroke="#438cfc" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </nav>
                <div className="basis-full rounded-b-4xl bg-white dark:bg-black">
                    <main className="bg-white dark:bg-black flex flex-col flex-nowrap w-full h-[96%] rounded-b-full">
                        <div className="flex flex-col flex-nowrap w-full h-[92%] px-2 py-1 gap-y-1">
                            <Message content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." who="other" />
                            <Message content="Nunc pretium sapien a ligula." who="other" />
                            <Message content="option 2" who="user" />
                        </div>
                        <div className="flex flex-row flex-nowrap items-center justify-around w-full h-[8%]">
                            <div className="bg-[#f9f9f9] dark:bg-[#161618] rounded-full size-8 p-2">
                                <svg className="size-4e" width="16" height="16" viewBox="0 0 16 16">
                                    <path d="m8 2a1 1 0 0 0 -1 1v4h-4a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4v-4a1 1 0 0 0 -1-1z" fill="#979797" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className="flex flex-row flex-nowrap justify-between items-center w-76 ring-2 ring-[#979797] rounded-full p-2 h-8">
                                <span className="text-[#979797] text-sm">iMessage</span>
                                <svg className="size-5" width="80" height="120" viewBox="0 0 512 512">
                                    <path d="m439.5,236c0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4c0,70-64,126.9-142.7,126.9-78.7,0-142.7-56.9-142.7-126.9 0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4c0,86.2 71.5,157.4 163.1,166.7v57.5h-23.6c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h88c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4h-23.6v-57.5c91.6-9.3 163.1-80.5 163.1-166.7z" fill="#979797" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="m256,323.5c51,0 92.3-41.3 92.3-92.3v-127.9c0-51-41.3-92.3-92.3-92.3s-92.3,41.3-92.3,92.3v127.9c0,51 41.3,92.3 92.3,92.3zm-52.3-220.2c0-28.8 23.5-52.3 52.3-52.3s52.3,23.5 52.3,52.3v127.9c0,28.8-23.5,52.3-52.3,52.3s-52.3-23.5-52.3-52.3v-127.9z" fill="#979797" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </main>
                    <div className="h-[4%] rounded-b-4xl flex flex-row flex-nowrap justify-center">
                        <div className="w-40 h-1.5 bg-black dark:bg-white rounded-full mt-3"></div>
                    </div>
                </div>
            </div>
            <div className="w-200 h-80 text-center flex flex-col gap-y-8">
                <h1 className="font-semibold text-3xl">Try having a mock conversation to test your digital citizenship knowledge!</h1>
                <div className="w-full h-full ring-8 ring-black rounded-xl flex flex-col text-center p-8">
                    <h2 className="text-2xl font-semibold">
                        Choose the best response to the user's message.
                    </h2>
                    <button className="mt-4 bg-[#017cfe] text-white px-4 py-2 rounded-lg hover:bg-[#005bb5] transition-colors">
                        option 1
                    </button>
                    <button className="mt-4 bg-[#017cfe] text-white px-4 py-2 rounded-lg hover:bg-[#005bb5] transition-colors">
                        option 2
                    </button>
                    <button className="mt-4 bg-[#017cfe] text-white px-4 py-2 rounded-lg hover:bg-[#005bb5] transition-colors">
                        option 3
                    </button>
                </div>
            </div>
        </main>
    )
}