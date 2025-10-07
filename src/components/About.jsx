import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex-grow flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          {/* <div className="sm:text-right text-4xl font-bold">
            <p className="whitespace-nowrap">
              Hi. I'm Purity, nice to meet you!
            </p>

            <p className="text-lg font-normal mt-4 text-gray-400">
              I’m passionate about building impactful software and continuously
              improving my skills.
            </p>
          </div> */}
          <div className="sm:text-right text-4xl font-bold transform -translate-x-16">
            <p className="whitespace-nowrap">
              Hi. I'm Purity, nice to meet you!
            </p>
            {/* <p className="mt-2 text-base font-normal italic text-gray-300 leading-relaxed">
              I’m passionate about building impactful software and continuously
              improving my skills.
            </p> */}
            <p className="mt-2 text-base font-normal italic text-gray-300 text-left whitespace-normal">
              I’m passionate about building impactful software and continuously
              improving my skills.
            </p>
          </div>

          <div>
            <p>
              I have experience in <strong>full-stack development</strong>,{" "}
              <strong>UI/UX design</strong>, and{" "}
              <strong>AI integrations</strong>. During my internship, I
              contributed as a team lead on a sports AI coaching project,
              gaining hands-on practice in agile teamwork, project management,
              and production-level coding.
              <br />
              <br />I also bring an international perspective from my background
              in sales and marketing, strengthening communication and
              problem-solving. I’m eager to keep learning, contribute to
              meaningful projects, and grow as part of a dynamic team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
