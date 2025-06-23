import { useRef, useEffect, useState } from "react"

export default function Message({content, who}) {
    const isUser = who === "user" ? true : false
    const bgColor = isUser ? "bg-[#017cfe]" : "bg-[#e9e9eb] dark:bg-[#26252a]"
    const textColor = isUser ? "text-white" : "text-black dark:text-white"
    const alignment = isUser ? "justify-end" : "justify-start"

    const divRef = useRef(null)
    const [isWrapped, setIsWrapped] = useState(false)

    useEffect(() => {
        const el = divRef.current
        if (el) {
            const computedStyle = window.getComputedStyle(el)
            const lineHeight = parseFloat(computedStyle.lineHeight)
            const paddingTop = parseFloat(computedStyle.paddingTop)
            const paddingBottom = parseFloat(computedStyle.paddingBottom)
            const contentHeight = el.clientHeight - paddingTop - paddingBottom
            setIsWrapped(contentHeight > lineHeight)
        }
    }, [content])

    const rounded = isWrapped ? "rounded-xl" : "rounded-full"

    return (
        <div className={`flex w-full ${alignment}`}>
            <div ref={divRef} className={`h-fit w-fit py-1 px-2 max-w-[80%] ${rounded} ${bgColor} ${textColor} ${alignment}`}>
                {content}
            </div>
        </div>
    )
}