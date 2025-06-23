import { Link } from "react-router-dom"
import Card from "./Card"

export default function Info() {
    return (
        <div className="w-full text-center">
            <div className="h-min w-full overflow-hidden">
                <img className="w-full h-100 blur-sm" src="./assets/bg.jpg  " alt="someone being a good digital citizen" />
                <h1 className="text-6xl font-bold font-title relative -top-60 text-white text-shadow- text-shadow-black">
                    What is a good digital citizen?
                </h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-12 mt-4">
                <p className="text-2xl max-w-[min(90vw,1200px)]">
                    Digital citizenship refers to how we behave, interact, and contribute in the digital world. This includes how we use technology, share information, interact with others, and respect digital spaces and communities.
                    <br />
                    <br />
                    As citizens of the internet, we all leave behind a digital footprint and play a role in shaping the online world.            
                </p>
                <h2 className="text-4xl font-bold">
                    Key Areas of Digital Citizenship
                </h2>
                <div className="grid grid-cols-2 gap-4 max-w-[min(90vw,1200px)]">
                    <Card
                        title="Digital Literacy"
                        content="Understanding how technology works and how to find reliable information online."
                        question="Can I tell the difference between real news and misinformation?"
                        length={1}
                    />
                    <Card
                        title="Online Safety"
                        content="Protecting your personal information and being careful about what you share."
                        question="Do I know how to protect my data and avoid scams or predators online?"
                        length={1}
                    />
                    <Card
                        title="Digital Etiquette"
                        content="Being respectful, kind, and responsible in online communication."
                        question="How would I want someone to treat me online?"
                        length={1}
                    />
                    <Card
                        title="Digital Rights & Responsibilities"
                        content="Knowing your rights to access information and your responsibility not to harm others."
                        question="Do I understand my impact on others when I post something online?"
                        length={1}
                    />
                    <Card
                        title="Digital Footprint"
                        content="Everything you do online leaves a trace."
                        question="How would I feel if my future employer or school saw what I posted?"
                        length={2}
                    />
                </div>
                <h2 className="text-4xl font-bold">
                    A moment of reflection...
                </h2>
                <p className="text-2xl max-w-[min(90vw,1200px)]">
                    There is no single definition of a "good digital citizen."
                    <br />
                    But after learning about digital literacy, safety, etiquette, rights, and footprint:
                    <br />
                    <span className="font-bold">
                        What do <span className="italic text-3xl">you</span> think makes someone a good digital citizen?
                    </span>
                    <br />
                    <br />
                    If you feel like you know the answer, you can test your knowledge by taking the test below!
                </p>
                <Link to="/DCProject/test" className="mb-10 bg-gray-800 text-white px-8 py-4 text-xl font-semibold rounded-lg hover:bg-gray-700 transition-colors">
                    Take the test
                </Link>
            </div>
        </div>
    )
}