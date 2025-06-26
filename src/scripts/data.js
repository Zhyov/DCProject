export default [
    {
        messages: [
            "Yo, I found this article saying phones cause brain damage and the government is hiding it.",
            "It's all over this site with popups and dramatic headlines.",
            "Should I share it?"
        ],
        options: [
            { text: "Nah man, I'd fact-check it first. Sounds like clickbait or fake news.", score: 2 },
            { text: "For real? I'll be sharing this with everyone.", score: 0 },
            { text: "It could be true, but I'd still check another source first.", score: 1 },
        ]
    },
    {
        messages: [
            "Hello good sir, I'm a worker at McAfee.",
            "Today's digital world has a lot of dangers for your computer, especially viruses.",
            "I'm here to offer you our Anti-Virus program extension to allow for increased protection.",
            "Give me your user password and the work will be done in a few minutes."
        ],
        options: [
            { text: "I'm not sure, I'll contact you when I've though about it.", score: 1 },
            { text: "No, thank you.", score: 2 },
            { text: "Yeah sure, here is my password.", score: 0 },
        ]
    },
    {
        messages: [
            "I'm in this group chat making fun of a kid from school.",
            "It's full of weird pics, memes, everything.",
            "I'm not sending anything though, just watching.",
            "That's okay, right?"
        ],
        options: [
            { text: "I'm not joining in, so I guess it's fine. But I do feel a bit bad.", score: 1 },
            { text: "Just watching means you're letting it happen. I'd speak up or leave the chat.", score: 2 },
            { text: "Damn that's hilarious, I'd just save the memes. Not my problem.", score: 0 },
        ]
    },
    {
        messages: [
            "I installed this new app and it said I needed to give access to my camera, mic, contacts, and location just to use it.",
            "It's a flashlight app by the way. Should I allow it?",
        ],
        options: [
            { text: "Maybe it's normal? You could allow it for now but keep an eye on it.", score: 1 },
            { text: "Yeah whatever, I'd just hit \"Allow All\" so it works fast.", score: 0 },
            { text: "Hell no. A flashlight app doesn't need all that access.", score: 2 },
        ]
    },
    {
        messages: [
            "Hey, I saw this Instagram post about some girl with issues, bout to send her an offensive message.",
            "What do you think?"
        ],
        options: [
            { text: "Okay, but don't make it too offensive.", score: 1 },
            { text: "Hell yeah, that would be so funny!", score: 0 },
            { text: "That will get you on trouble dude, don't send her that.", score: 2 },
        ]
    },
]