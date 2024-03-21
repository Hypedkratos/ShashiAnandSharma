'use client'
import DownloadResumeButton from "@/components/downloadRes/downloadRes"
import Navbar from "@/components/navbar/navbar"

const about = () => {
    const downloadResume = () => {
        window.location.href='/resume/Shashi Anand Sharma(Resume).pdf';
    }

    return (
        <div className="bg-gradient-to-b from-pink-300 to-blue-300 min-h-screen">
            <div><Navbar /></div>
            <div className="flex justify-between w-full max-w-screen-xl mx-auto mt-16 space-x-24">
                <div className="mr-4 mx-4">
                    <div className="bg-white p-6 rounded-lg shadow-md mt-20">
                        <h2 className="text-black text-2xl font-bold mb-4">About Me</h2>
                        <p className="text-black">
                            As a passionate JavaScript developer, I specialize in crafting robust and dynamic web
                            applications using cutting-edge technologies like React and Next.js. With a keen eye for
                            detail and a drive for innovation, I bring creativity and efficiency to every project.
                            Proficient in React Native as well, I extend my skills to develop cross-platform mobile
                            applications, ensuring seamless user experiences across devices. With a focus on clean code
                            and responsive design, I strive to deliver elegant solutions that exceed expectations.
                            Let's collaborate and bring your ideas to life!
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-8 mb-8" onClick={downloadResume}><DownloadResumeButton /></div>
        </div>
    )
}

export default about