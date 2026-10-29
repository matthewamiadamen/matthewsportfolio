"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experience = [
  {
    role: "Software Engineer (Part-Time)",
    org: "consulting.ie",
    dates: "September 2026 – Present",
    note: "Part-time alongside final year of BSc Computer Science",
    points: [
      "Work directly with CTO to architect Pulse, a multi-tenant enterprise agentic ERP (TypeScript, Fastify, PostgreSQL), co-authoring 20+ architecture decisions on auth, embeddings, vector search and row-level security.",
      "Designed LLM routing across Amazon Bedrock and a Cerebras fast tier for sub-1.5 s voice and triage turns, with per-tenant cost metering and prompt caching projected to cut repeated-prompt input cost by ~60%.",
      "Implemented tenant-scoped B-tree indexing (70+ composite indexes) so multi-tenant lookups run as logarithmic seeks instead of full scans, alongside vector search over Bedrock embeddings.",
      "Built client-app integrations through a Composio bridge (39-toolkit catalogue): allowlisted, version-pinned actions, idempotent writes, per-tenant rate-limit sharing and OAuth tokens held in AWS Secrets Manager.",
      "Built data integration for a 70-staff, 19-coach operation with 500k+ bookings: a PostgreSQL mirror at 2–4 s replication lag, live fleet telematics ingest and 8,000+ documents in a RAG index.",
      "Cut assistant latency by up to 44% (14.9 s to 8.4 s) on a production agentic ERP (ECS, S3, EventBridge) by routing lookups to a fast-model lane and parallelising retrieval with intent classification.",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    org: "Dublin City University, Prof. Hyowon Lee",
    dates: "April 2025 – September 2025",
    note: "UN Sustainable Development Goal 8",
    points: [
      "Trained NLP complaint-triage classifiers (Python, spaCy, scikit-learn) for Cabhar, routing workplace-exploitation reports to NGOs at 98% accuracy across 11,000 complaints per year.",
    ],
  },
];

const awards = [
  {
    title: "Bloomberg bpuzzled — 1st Place",
    date: "April 2025",
    text: "Part of team Cubits, scoring 8/9: at the time, the highest score by any Irish university team in the competition's history.",
  },
  {
    title: "Craicathon — Create It Track Winner",
    date: "Lámha",
    text: "Irish Sign Language tutor, now used in Dublin post-primary schools.",
  },
  {
    title: "Pressure Cooker, Dublin AI Week 2026",
    date: "Mayfain",
    text: "One of 10 teams selected.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="text-white py-12" ref={ref}>
      <h2 className="text-center text-4xl font-bold text-white mb-8 md:mb-12">
        Experience
      </h2>
      <div className="flex flex-col gap-8">
        {experience.map((job, i) => (
          <motion.div
            key={job.org}
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            className="bg-[#181818] rounded-xl p-6 md:p-8 border border-[#33353F]"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <h3 className="text-2xl font-semibold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                  {job.org}
                </span>{" "}
                <span className="text-white">— {job.role}</span>
              </h3>
              <span className="text-[#ADB7BE] text-sm">{job.dates}</span>
            </div>
            <p className="text-[#ADB7BE] italic text-sm mt-1 mb-4">{job.note}</p>
            <ul className="list-disc pl-5 space-y-2 text-[#ADB7BE]">
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <h2 className="text-center text-4xl font-bold text-white mt-16 mb-8 md:mb-12">
        Awards
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {awards.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.2 }}
            className="bg-[#181818] rounded-xl p-6 border border-[#33353F]"
          >
            <h3 className="text-lg font-semibold mb-1">{a.title}</h3>
            <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mb-2">
              {a.date}
            </p>
            <p className="text-[#ADB7BE] text-sm">{a.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
