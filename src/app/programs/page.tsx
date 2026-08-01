'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';

const programs = [
  {
    id: 'math-science',
    badge: 'Core Program',
    title: 'School Success Program',
    subtitle: 'Math & Science — Grades 4-12',
    description: 'Mind Masters EduCenter\'s goal is to help our learners develop, study, and learn skills that will help them set up for academic success at the elementary and through secondary and tertiary levels of education. We provide top-quality, affordable, convenient tutoring programs customized to each learner\'s strengths and weaknesses and their best way of learning.',
    details: [
      { icon: 'school', label: 'Grades', value: 'Grade 4 – Grade 12' },
      { icon: 'payments', label: 'Pricing', value: '$35/hr or $150/mo (8 sessions)' },
      { icon: 'schedule', label: 'Schedule', value: 'On-demand & structured batches' },
      { icon: 'videocam', label: 'Format', value: 'In-person & Zoom available' },
    ],
    features: [
      'Sunshine Program (Grades 4-8)',
      'Freshman/Sophomore (Grades 8-10)',
      'Junior/Senior (Grades 11-12)',
      'Saskatchewan Curriculum aligned',
      'Small-group learning for focused attention',
      'Intake assessment to evaluate academic level',
    ],
    accentColor: '#1a84d2',
    accentBg: '#e8f4ff',
    borderColor: 'border-[#86c8ef]',
    tagBg: 'bg-[#6bb1ff]',
    tagText: 'text-[#003459]',
    icon: 'calculate',
    contact: 'Contact us to enroll',
    longDescription: `Mathematics is one of the most essential skills applied in every aspect of life. At Mind Masters, our primary focus is to strengthen problem-solving skills and develop fundamental mathematical techniques. We make math easy enough for our students to fall in love with it. Our highly qualified tutors break down difficult problems into easy-to-learn steps using real-life examples.

Science is the systematic study of the physical and natural world through observation, experimentation, and testing. We teach students the fundamentals necessary for success in advanced science classes such as Biology, Chemistry, and Physics. We provide small-group sessions so every child can learn at their own pace.`,
    zoomNote: 'Virtual tutoring options via Zoom available for students unable to attend in person.',
  },
  {
    id: 'university-support',
    badge: 'Advanced',
    title: 'University Prep & Tutoring',
    subtitle: 'Undergraduate Tutoring & Top 10 Admission Prep',
    description: 'Our university tutoring programs support students navigating the academic demands of undergraduate Mathematics and Science courses. We provide structured, goal-oriented support aligned with university curricula — covering Calculus, Linear Algebra, Statistics, Differential Equations, Physics, Chemistry, and Biology.',
    details: [
      { icon: 'school', label: 'Level', value: 'Pre-University & University' },
      { icon: 'payments', label: 'Pricing', value: '$35/hr or $150/mo (8 sessions)' },
      { icon: 'schedule', label: 'Schedule', value: 'Flexible scheduling' },
      { icon: 'videocam', label: 'Format', value: 'In-person & Zoom available' },
    ],
    features: [
      'University-Level Math & Science Tutoring',
      'Top 10 Canadian Universities Admission Prep',
      'Calculus, Linear Algebra, Statistics',
      'Physics, Chemistry, Biology',
      'Exam-focused strategies',
      'One-on-one & small-group sessions',
    ],
    accentColor: '#6a5b00',
    accentBg: '#fffbe8',
    borderColor: 'border-[#fde68a]',
    tagBg: 'bg-[#fcdf46]',
    tagText: 'text-[#483d00]',
    icon: 'account_balance',
    contact: 'Contact us to enroll',
    longDescription: `We emphasize conceptual understanding over memorization, ensuring students grasp the "why" behind formulas, models, and scientific principles. Our experienced tutors break down complex topics into clear, manageable steps, connect abstract concepts to practical applications, and reinforce learning through guided practice.

The Top 10 Canadian Universities admission preparation program is customized to help students meet the entry requirements of their target institutions. We provide dedicated mentorship, application guidance, and subject-specific preparation to maximize admission success.`,
    zoomNote: 'Virtual tutoring options via Zoom available for students unable to attend in person.',
  },
  {
    id: 'esl-ielts',
    badge: 'Language Program',
    title: 'ESL & IELTS Preparation',
    subtitle: 'English Language & Exam Preparation',
    description: 'The IELTS exam is an important step for individuals planning to study, work, or immigrate to an English-speaking country. Achieving a high band score requires effective test-taking strategies, confidence, and consistent practice — our program delivers exactly that.',
    details: [
      { icon: 'translate', label: 'Level', value: 'All levels welcome' },
      { icon: 'payments', label: 'Pricing', value: 'Contact for pricing' },
      { icon: 'schedule', label: 'Schedule', value: 'Flexible scheduling' },
      { icon: 'videocam', label: 'Format', value: 'In-person & Zoom available' },
    ],
    features: [
      'Reading, Writing, Listening, Speaking',
      'Interactive lessons & practical exercises',
      'Personalized feedback on writing',
      'Comprehensive speaking practice',
      'Printed study materials & audio resources',
      'Pronunciation, fluency & body language guidance',
    ],
    accentColor: '#8126cf',
    accentBg: '#f5e8ff',
    borderColor: 'border-[#c4b5fd]',
    tagBg: 'bg-[#e5c6ff]',
    tagText: 'text-[#4f0089]',
    icon: 'translate',
    contact: 'Contact us to enroll',
    longDescription: `Our ESL studies support immigrants and newcomers in developing English language proficiency for daily life, work, and further education. Our IELTS Preparation Class helps students build confidence and techniques to excel in all four exam components.

We work through reading passages and listening tasks together, provide detailed feedback on writing assignments, and offer comprehensive speaking practice covering every part of the IELTS interview. Our goal is to make IELTS preparation engaging, practical, and results-oriented, helping every student achieve their desired band score.`,
    zoomNote: 'Virtual tutoring options via Zoom available for students unable to attend in person.',
  },
];

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa]">

      {/* Page header */}
      <section className="py-16 px-6 md:px-8 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span
              className="inline-block bg-[#6bb1ff] border-2 border-black px-4 py-1 font-black text-xs uppercase tracking-widest mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              All Programs
            </span>
            <h1
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-[#1a1a1a]"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Our Programs
            </h1>
            <p
              className="text-lg font-bold text-[#5b5b5b] mt-3 max-w-xl"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              Mind Masters EduCenter&apos;s goal is to help our learners develop, study, and learn skills for academic success. We provide top-quality, affordable tutoring customized to each learner&apos;s strengths.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs grid */}
      <section className="py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 gap-10"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {programs.map((prog) => (
              <motion.div
                key={prog.title}
                variants={cardVariant}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] flex flex-col`}
              >
                {/* Banner */}
                <div
                  className="px-6 py-6 flex items-center gap-4"
                  style={{ backgroundColor: prog.accentBg }}
                >
                  <div
                    className="w-14 h-14 border-2 border-black rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: prog.accentColor }}
                  >
                    <span
                      className="material-symbols-outlined text-3xl text-white"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {prog.icon}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <span
                      className={`${prog.tagBg} ${prog.tagText} border-2 border-black font-black text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-lg inline-block mb-1`}
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}
                    >
                      {prog.badge}
                    </span>
                    <h3
                      className="text-xl md:text-2xl font-black text-[#1a1a1a] leading-tight"
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}
                    >
                      {prog.title}
                    </h3>
                    <p
                      className="font-bold text-xs uppercase tracking-widest mt-0.5"
                      style={{ fontFamily: 'var(--font-space-grotesk)', color: prog.accentColor }}
                    >
                      {prog.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-7 flex flex-col gap-4 flex-grow">

                  {/* Description */}
                  <p
                    className="font-bold text-sm text-[#5b5b5b] leading-relaxed flex-grow"
                    style={{ fontFamily: 'var(--font-manrope)' }}
                  >
                    {prog.description}
                  </p>

                  {/* Details grid */}
                  <div className="grid grid-cols-2 gap-2">
                    {prog.details.map((d) => (
                      <div
                        key={d.label}
                        className={`flex items-start gap-2 border-2 ${prog.borderColor} rounded-xl p-2.5`}
                        style={{ backgroundColor: prog.accentBg }}
                      >
                        <span
                          className="material-symbols-outlined text-base flex-shrink-0 mt-0.5"
                          style={{ color: prog.accentColor, fontVariationSettings: "'FILL' 1" }}
                        >
                          {d.icon}
                        </span>
                        <div className="min-w-0">
                          <p
                            className="font-black text-[9px] uppercase tracking-wide leading-none mb-0.5"
                            style={{ fontFamily: 'var(--font-space-grotesk)', color: prog.accentColor }}
                          >
                            {d.label}
                          </p>
                          <p
                            className="font-bold text-[11px] text-[#1a1a1a] leading-snug"
                            style={{ fontFamily: 'var(--font-manrope)' }}
                          >
                            {d.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="flex flex-col gap-1.5">
                    {prog.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <span
                          className="w-4 h-4 rounded-full border-2 border-black flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: prog.accentColor }}
                        >
                          <span
                            className="material-symbols-outlined text-[9px] text-white"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            check
                          </span>
                        </span>
                        <span
                          className="font-bold text-xs text-[#1a1a1a]"
                          style={{ fontFamily: 'var(--font-manrope)' }}
                        >
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Long description */}
                  {prog.longDescription && (
                    <div className="border-t-2 border-[#e2e2e2] pt-4">
                      <p
                        className="font-bold text-sm text-[#5b5b5b] leading-relaxed whitespace-pre-line"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                      >
                        {prog.longDescription}
                      </p>
                    </div>
                  )}

                  {/* Zoom note */}
                  {prog.zoomNote && (
                    <div className={`flex items-center gap-2 border-2 ${prog.borderColor} rounded-xl p-3`} style={{ backgroundColor: prog.accentBg }}>
                      <span className="material-symbols-outlined text-base flex-shrink-0" style={{ color: prog.accentColor, fontVariationSettings: "'FILL' 1" }}>videocam</span>
                      <span className="font-bold text-xs text-[#1a1a1a]" style={{ fontFamily: 'var(--font-manrope)' }}>{prog.zoomNote}</span>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    <Link
                      href="/contact"
                      className="brutalist-button font-black text-sm px-4 py-2.5 border-4 border-black rounded-xl flex items-center gap-1.5"
                      style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        backgroundColor: prog.accentBg,
                        color: prog.accentColor,
                      }}
                    >
                      <span
                        className="material-symbols-outlined text-base"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        info
                      </span>
                      Know More
                    </Link>
                    <Link
                      href={`/apply?program=${prog.id}`}
                      className="brutalist-button font-black text-sm px-4 py-2.5 border-4 border-black rounded-xl flex items-center gap-1.5 text-white"
                      style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        backgroundColor: prog.accentColor,
                      }}
                    >
                      <span
                        className="material-symbols-outlined text-base"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        arrow_forward
                      </span>
                      Apply Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-6 md:px-8 bg-black border-t-4 border-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Ready to join?
            </h2>
            <p
              className="text-lg font-bold text-[#aaa] mt-2"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              Contact us today and we'll help you find the right program.
            </p>
          </div>
          <Link
            href="/contact"
            className="brutalist-button bg-[#6bb1ff] text-black font-black text-lg px-10 py-4 border-4 border-[#6bb1ff] rounded-xl whitespace-nowrap"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Contact Us →
          </Link>
        </div>
      </section>

    </main>
  );
}
