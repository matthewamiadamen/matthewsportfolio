"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "University Database Management System",
    description: "Full Stack CRUD application built with react & django deployed with Supabase and Render",
    image: "/images/projects/unidatabaseimage.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/matthewamiadamen/unidatabaseapp",
    previewUrl: "https://matthewsunidatabaseapp.vercel.app/",
  },
  {
    id: 2,
    title: "Custom Linux Shell",
    description: "A custom linux shell built in C with features like command execution, piping, and redirection, also built online acessible emulator for testing",
    image: "/images/projects/myshellimage.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/matthewamiadamen/customunixshell",
    previewUrl: "https://customunixshell.vercel.app/",
  },
  {
    id: 3,
    title: "Procedural Generation in p5.js demo",
    description: "Demo of procedural generation implemented with Multi-Octave Fractal Noise, Deterministic Seeds, Chunk Generation, Blender Animations and NPC Collison Detection",
    image: "/images/projects/proceduralgenimage.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/matthewamiadamen/procedural_generation_demo",
    previewUrl: "https://world.novanai.dev",
  },
  {
    id: 4,
    title: "Irish County Ankinator Game",
    description: "Unique spin on the classic Akinator game, where users test ai models to guess their chosen Irish county based on a series of questions.",
    image: "/images/projects/countyank.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/matthewamiadamen/countyankinator",
    previewUrl: "https://countyankinator.vercel.app/",
  },
  {
    id: 5,
    title: "CheerpJ Chess App",
    description: "A chess application built with CheerpJ, allowing users to play chess in their browser with a Java-based backend for game logic and state management.",
    image: "/images/projects/chessimage.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/matthewamiadamen/mychessapp/tree/main",
    previewUrl: "https://mychessapp.vercel.app/",
  },
  {
    id: 6,
    title: "TFI Leap Card Overhaul",
    description: "A complete redesign and rethinking of the tfi leap card app built in kotlin, focused on an improved user experience and added features.",
    image: "/images/projects/TFI_Live_icon.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/matthewamiadamen/tfi_leapcard_app_overhaul",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
