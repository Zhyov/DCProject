import { Link } from "react-router-dom"
import Card from "./Card"

export default function AboutInfo() {
    return (
        <div className="w-full text-center">
            <div className="flex flex-col justify-center items-center gap-y-12 mt-4 *:max-w-[min(90vw,1200px)]">
                <h2 className="text-4xl font-bold">
                    What is our project about?
                </h2>
                <p className="text-2xl">
                    Our project is to inform people about the importance of being a digital citizenship and the key areas that make one. This is a project from our Global Perspectives subject where we needed to identify a global problem and try to solve it locally.
                </p>
                <h2 className="text-4xl font-bold">
                    How did we carry it out?
                </h2>
                <p className="text-2xl">
                    Our team has investigated the topic of digital citizenship and its importance in modern day society. We summarized our findings into five key areas: digital literacy, online safety, digital etiquette, digital rights and responsibilities, and digital footprint.
                    <br />
                    <br />
                    To test the knowledge of our classmates, we created a game with mock conversations testing what they learnt and how they apply it.
                </p>
            </div>
        </div>
    )
}