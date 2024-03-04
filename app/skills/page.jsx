'use client'
import Navbar from "@/components/navbar/navbar"
const skill = () => {
    return (
        <div className="bg-gradient-to-b from-pink-300 to-blue-300 min-h-screen">
            <div><Navbar /></div>
            <div className="container mx-auto mt-8">
                <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-black text-2xl font-bold mb-4">Familiar Technologies</h2>
                    <div className="flex justify-between">
                        <SkillIcon src="/Icons/figma.png" label="Figma" />
                        <SkillIcon src="/Icons/javascript.png" label="Javascript" />
                        <SkillIcon src="/Icons/react.png" label="React" />
                        <SkillIcon src="/Icons/tailwind-css.png" label="Tailwind CSS" />
                    </div>
                </div>
                <div className="mt-10 mx-auto max-w-4xl bg-white p-5 rounded-lg shadow-lg">
                    <p>
                     As a frontend web developer I am familiar with NEXT JS and React JS.
                     I am also proficient in leveraging React native for developing android apps.
                     I am also familiar with database technologies like MongoDB, MS SQL,etc.
                     Sound knowledge of frameworks like Bootstrap and Tailwind CSS. My preferred programming 
                     language is Javascript, although I also have hands on experience with alternate 
                     languages like Python, C and Java. 
                    </p>
                </div>
            </div>
        </div>
    )
}

const SkillIcon = ({ src, label }) => {
    return (
        <div className="flex flex-col items-center ">
            <img src={src} alt="Icon" className="w-24 h-24 mb-2" />
            <span className="text-black hover:scale-150 transistion duration:300">{label}</span>
        </div>
    );
};

export default skill