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
        <li>Relevant courses: Advanced Algorithms, AI, Data Mining, Full Stack Development, Linear Algebra, Statistics</li>
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
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>Java</li>
        <li>C / C++</li>
        <li>SQL</li>
        <li>AWS (Bedrock, ECS, S3, EventBridge)</li>
        <li>PostgreSQL (row-level security)</li>
        <li>Vector search &amp; embeddings</li>
        <li>LLM routing &amp; RAG</li>
        <li>Next.js / React</li>
        <li>Node.js / Fastify</li>
        <li>TensorFlow / scikit-learn</li>
        <li>Docker</li>
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
            I&apos;m Matthew, a final-year Computer Science student at Dublin City University and a part-time
            Software Engineer at consulting.ie, where I work directly with the CTO on Pulse, a multi-tenant
            agentic ERP. My work there spans LLM routing on Amazon Bedrock, vector search, row-level security
            and data integration on AWS.
            <br></br><br></br>
            Outside work I build things people actually use: GrianView maps solar potential for every building
            in Belfast, and Lámha teaches Irish Sign Language in Dublin schools. I&apos;m now pointing my machine
            learning work at neural decoding, starting with a cross-subject SSVEP brain-computer interface.
          
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
