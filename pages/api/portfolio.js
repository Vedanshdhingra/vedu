const portfolio = [
    {
        id: 0,
        projectName: "mailgenie",
        url: "https://thedominators-mailgenie.vercel.app/",
        image: "projects/email.png",
        projectDetail: "Smart AI-Powered Email Reply Generator , MailGenie is a sleek web application designed to help users craft professional, emotionally appropriate, and context-aware email replies with the help of Google’s Gemini AI model and a custom sentiment analysis API.",
        technologiesUsed: [
            {
                tech: "js"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Ananda",
        url: "https://v0-ananda-platform-design.vercel.app/",
        image: "projects/ananda.png",
        projectDetail: " Ananda Platform is a digital wellness platform focused on mental health care. It offers features like AI-powered psychological screening (PHQ-9, GAD-7), smart 24/7 support chat, professional counseling network, and confidential peer support groups for students.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "typescipt"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "court-veer",
        url: "https://ved-three.vercel.app/",
        image: "projects/court.png",
        projectDetail: "COURT-VEER is a front-end project having restaurant menu offering a variety of Chinese, Indian, and brunch dishes, with dine-in and reservation options.",
        technologiesUsed: [
            {
                tech: "html"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "BUS",
        image: "projects/bus.png",
        projectDetail: "The Student Verification Matrix page displays the verification and tuition payment status for 10 students. It shows whether each student has paid tuition, their verification status (Verified, Pending, Failed, or Re-verify), and allows filtering by payment status.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
