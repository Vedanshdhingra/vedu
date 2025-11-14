
const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Jaypee university of Engineering & Technology',
                degree: 'Btech, Computer Science Engineering',
                detail: "Bachelor's Degree in Computer Science Engineering from Jaypee university of Engineering & Technology.",
                year: '2024-2028'
            },
            {
                id: 1,
                title: 'Mount Litera Zee School,Jhansi',
                degree: 'Class 12',
                detail: "Completed class 12 from Mount Litera Zee School,Jhansi.",
                year: '2023-2024'
            },
            {
                id: 2,
                title: 'Mount Litera Zee School,Jhansi',
                degree: 'Class 10',
                detail: "Completed class 10 from Mount Litera Zee School,Jhansi.",
                year: '2021-2022'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Tachyon',
                role: 'Frontend Developer',
                url: '',
                desc: 'As a frontend developer, I use React & JavaScript to build user interfaces for web applications for this event.',
                year: '11/2024',
                location: 'Guna'
            },
            {
                id: 2,
                title: 'HauzaTech',
                role: 'Internee',
                url: 'no website',
                desc: 'As an Internee, I learned how to use React & JavaScript to build interactive websites.',
                year: '02/2023 - Present',
                location: 'Peshawar, Pakistan'
            },

        ]
    }
]

export default function handler(req, res) {
    res.status(200).json(background)
}
