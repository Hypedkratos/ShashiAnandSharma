const DownloadResumeButton = () => {
  return (
    <div>
      <a
        href="#"
        download="/resume/ShashiResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform transition duration-200 hover:scale-105"
      >
        Download Resume
      </a>
    </div>
  );
};

export default DownloadResumeButton;
