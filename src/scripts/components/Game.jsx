import { useRef, useState, useEffect } from "react"
import data from "../data"
import Message from "./Message"

export default function Game() {

    const scenarios = data
    const [currentStep, setCurrentStep] = useState(0)
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [currentScore, setCurrentScore] = useState(0)
    const [messages, setMessages] = useState([
        { content: scenarios[0].messages[0], who: "other" }
    ])
    const [showOptions, setShowOptions] = useState(false)
    const [showFeedback, setShowFeedback] = useState(false)

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

    useEffect(() => {
        if (currentMessageIndex + 1 < scenarios[currentStep].messages.length) {
            const timeout = setTimeout(() => {
                setMessages(prev => [
                    ...prev,
                    { content: scenarios[currentStep].messages[currentMessageIndex + 1], who: "other" }
                ])
                setCurrentMessageIndex(prev => prev + 1)
            }, 2000)

            return () => clearTimeout(timeout)
        } else {
            setShowOptions(true)
        }
    }, [currentMessageIndex, currentStep])

    function handleAnswer(option) {
        setMessages(prev => [
            ...prev,
            { content: option.text, who: "user" }
        ])
        
        setCurrentScore(option.score)
        setScore(prev => prev + option.score)
        setShowOptions(false)
        setShowFeedback(true)
        
        if (currentStep + 1 < scenarios.length) {
            const nextStep = currentStep + 1
        
            setTimeout(() => {
                setMessages([
                    { content: scenarios[nextStep].messages[0], who: "other" }
                ])
                setCurrentStep(nextStep)
                setShowFeedback(false)
                setCurrentMessageIndex(0)
            }, 3000)
        } else {
            setTimeout(() => {
                setShowFeedback(false)
            }, 2000)
        }
    }

    const chatRef = useRef(null)
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight
        }
    }, [messages])

    const scenarioElements = scenarios[currentStep].options.map((option, idx) => (
        <button
            key={idx}
            onClick={() => handleAnswer(option)}
            className="mt-4 bg-gray-300 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hover:cursor-pointer px-4 py-2 rounded-lg transition-colors"
        >
        {option.text}
        </button>
    ))

    return (
        <main className="flex flex-col items-center w-full">
            <h1 className="font-semibold text-3xl my-4 text-center max-w-[min(90vw,1200px)]">Try having a mock conversation to test your digital citizenship knowledge!</h1>
            <div className="w-full flex md:flex-row flex-col justify-between items-center 2xl:px-60 xl:px-40 lg:px-20 px-10">
                <div className="mt-4 h-180 w-90 ring-10 ring-black rounded-4xl flex flex-col flex-nowrap">
                <nav className="flex flex-col flex-nowrap basis-1/6 rounded-t-4xl bg-[#f8f8f8] dark:bg-[#1a1a1a] border-b-2 border-b-[#f0f0f0] dark:border-b-[#161618]">
                    <div className="flex flex-row flex-nowrap justify-between">
                        <span className="text-black dark:text-white text-center text-[16px] font-[550] font-nunito mt-2 pl-10">
                            {time}
                        </span>
                        <div className="h-8 w-30 mt-1 bg-black rounded-full"></div>
                        <div className="flex flex-row flex-nowrap gap-x-2 justify-center pt-1 mt-1.5 pr-10">
                            <img className="size-5 dark:invert" alt="wifi logo" src="https://www.svgrepo.com/show/779/wifi.svg" />
                            <img className="size-5 dark:invert" alt="battery logo" src="https://www.svgrepo.com/show/67096/phone-battery-with-full-charge-and-a-bolt-symbol.svg" />
                        </div>
                    </div>
                    <div className="flex flex-row flex-nowrap justify-between px-2 mt-2">
                        <svg className="size-5 mt-3" width="62" height="112" viewBox="0 0 62 112" fill="none">
                            <path d="M56 6L6 56L56 106" stroke="#438cfc" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className="flex flex-col flex-nowrap items-center">
                            <img className="size-8 rounded-full" alt="icon" src="./assets/pfp.jpg" />
                            <span className="text-sm text-black dark:text-white">Contact</span>
                        </div>
                        <svg className="size-9 mt-3" width="80" height="120" viewBox="0 0 80 120" fill="none">
                            <path d="M72.9,14.4L56,25.3V22c0-4.4-3.6-8-8-8H8c-4.4,0-8,3.6-8,8v32c0,4.4,3.6,8,8,8h40c4.4,0,8-3.6,8-8v-3.3   l16.9,10.9c1.9,1,3.1-0.7,3.1-1.7V16C76,15,74.9,13.2,72.9,14.4z M52,54c0,2.2-1.8,4-4,4H8c-2.2,0-4-1.8-4-4V22c0-2.2,1.8-4,4-4h40   c2.2,0,4,1.8,4,4V54z M72,56.3L56,46V30l16-10.3V56.3z" stroke="#438cfc" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </nav>
                <div className="basis-full rounded-b-4xl bg-white dark:bg-black">
                    <main className="bg-white dark:bg-black flex flex-col flex-nowrap w-full h-[96%] rounded-b-full">
                        <div ref={chatRef} className="flex flex-col w-full h-[540px] px-2 py-1 gap-y-1 overflow-y-auto scrollbar-hidden">
                            {messages.map((msg, idx) => (
                                <Message key={idx} content={msg.content} who={msg.who} />
                            ))}
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
            <div className="w-80 lg:w-140 my-10 lg:my-0 h-auto text-center flex flex-col gap-y-8">
                <div className="w-full h-full ring-8 ring-black rounded-xl flex flex-col text-center p-8">
                    
                    {showOptions ? (
                        <>
                            <h2 className="text-2xl font-semibold">Choose the best answer to the user's message.</h2>
                            {scenarioElements}
                        </>
                    ) : showFeedback ? (
                        <div>
                            <span className="text-2xl font-semibold">Your response: {currentScore} points</span>
                            <p>
                            {currentScore == 2
                                ? "Great choice! You scored well!"
                                : currentScore == 1
                                ? "Could've been better, but it's a start."
                                : "That wasn't the best choice."
                            }
                            </p>
                        </div>
                    ) : currentStep >= scenarios.length - 1 && !showOptions && !showFeedback && currentMessageIndex === scenarios[scenarios.length - 1].messages.length - 1 ? (
                        <div>
                            <span className="text-2xl font-semibold">Final Score: {score} / 10</span>
                            <p>
                            {score < 6
                                ? "You might want to review your digital citizenship."
                                : score < 8
                                ? "You're on the right track!"
                                : "Excellent work! You're a great digital citizen!"}
                            </p>
                        </div>
                    ) : (
                        <p className="text-2xl font-semibold">Wait for the message to finish.</p>
                    )}
                </div>
            </div>
            </div>
        </main>
    )
}