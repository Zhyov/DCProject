export default function Card({title, content, question, length}) {
    const colSpan = length === 1 ? "md:col-span-1" : "md:col-span-2";

    return (
        <div className={`flex flex-col ${colSpan} items-center justify-center gap-y-4 p-6 bg-gray-300 dark:bg-gray-800 w-full rounded-lg`}>
            <h3 className="text-3xl font-bold">{title}</h3>
            <p className="text-xl">{content}</p>
            <p className="text-xl italic">{question}</p>
        </div>
    )
}