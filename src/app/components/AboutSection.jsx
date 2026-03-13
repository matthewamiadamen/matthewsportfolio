"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Dublin City University — BSc in Computer Science (Expected May 2027)</li>
        <li>Limerick College of Further Education — Introduction to Computer Programming (QQI Level 5, Dec 2021)</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5 grid grid-cols-2 gap-x-8 gap-y-1">
        <li>Python</li>
        <li>Java</li>
        <li>C</li>
        <li>C++</li>
        <li>SQL</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>TensorFlow</li>
        <li>Django</li>
        <li>Docker</li>
        <li>Git</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Introduction to Computer Programming — QQI Level 5</li>
        <li>UL Cyber Security Camp</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image src="/images/about-image.png" width={500} height={500} /> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hello my name is Matthew I am a student and aspiring software developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, Java, React, Node.js, Express, Mongo DB,
            Docker, HTML, CSS, and Git. <br></br>
            I am a quick learner and I am always looking to expand my knowledge and skill set. I work with a strong commitment to
            building intuitive user experiences writing efficient, maintainable code.
            I am a team player and I am excited to work with others to create amazing applications.
          
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
