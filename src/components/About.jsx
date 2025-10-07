import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 flex flex-col items-center justify-center p-2"
    >
      <div className="max-w-[1000px] w-full">
        {/* Header */}
        <div className="mb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            About
          </p>
        </div>

        {/* Content */}
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center sm:items-end">
            <p className="text-4xl font-bold text-center sm:text-right">
              Hi. I'm Purity, nice to meet you!
            </p>
            <p className="mt-3 text-base font-normal italic text-gray-300 text-center sm:text-right max-w-sm">
              I’m passionate about building impactful software and continuously
              improving my skills.
            </p>
          </div>

          <div>
            <p className="text-left leading-relaxed">
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
