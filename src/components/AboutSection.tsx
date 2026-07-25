'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

const programs = [
  { icon: 'calculate',          label: 'Math Tutoring',       sub: 'Grades 4-12 + University',     bg: 'bg-white', iconColor: 'text-[#8126cf]', border: 'border-black' },
  { icon: 'biotech',            label: 'Science Tutoring',    sub: 'Biology, Chemistry, Physics',  bg: 'bg-white', iconColor: 'text-[#1a84d2]', border: 'border-black' },
  { icon: 'translate',          label: 'ESL Classes',         sub: 'English for newcomers',        bg: 'bg-white', iconColor: 'text-[#6a5b00]', border: 'border-black' },
  { icon: 'menu_book',          label: 'IELTS Preparation',   sub: 'All four exam components',     bg: 'bg-white', iconColor: 'text-[#8126cf]', border: 'border-black' },
  { icon: 'account_balance',    label: 'Uni Admission Prep',  sub: 'Top 10 Canadian universities', bg: 'bg-white', iconColor: 'text-[#1a84d2]', border: 'border-black' },
  { icon: 'school',             label: 'University Tutoring', sub: 'Undergraduate STEM courses',   bg: 'bg-white', iconColor: 'text-[#6a5b00]', border: 'border-black' },
  { icon: 'videocam',           label: 'Virtual Tutoring',    sub: 'Zoom sessions available',       bg: 'bg-white', iconColor: 'text-[#8126cf]', border: 'border-black' },
  { icon: 'assignment',         label: 'Intake Assessments',  sub: 'Evaluate academic levels',      bg: 'bg-white', iconColor: 'text-[#1a84d2]', border: 'border-black' },
];

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardIn: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function AboutSection() {
  return (
    <section
      id='about'
      className='py-24 px-6 md:px-8 bg-[#f1f1f1] border-b-4 border-black overflow-hidden'
    >
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        {/* LEFT: content */}
        <motion.div
          variants={fadeLeft}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          <span
            className='inline-block bg-[#6bb1ff] border-2 border-black px-4 py-1 font-black text-sm uppercase tracking-widest mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            About Us
          </span>

          <h2
            className='text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-6 text-[#1a1a1a]'
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            We Are
            <br />
            <span style={{ color: '#6a5b00' }}>Mind Masters</span>
          </h2>

          <p
            className='text-lg font-bold text-[#5b5b5b] max-w-md mb-10 leading-relaxed'
            style={{ fontFamily: 'var(--font-manrope)' }}
          >
            Mind Masters EduCenter Inc. is Regina&apos;s after-school tutoring and
            learning institution dedicated to high-quality Mathematics and
            Science instruction for Grades 4–12 and university students. We
            also offer ESL, IELTS preparation, and university admission support
            — all through structured, personalized learning plans.
          </p>

          {/* Motto */}
          <div className='flex flex-wrap gap-5 mb-10'>
            <div
              className='bg-white border-4 border-black px-6 py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
            >
              <p
                className='text-base font-black text-[#005f28]'
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                &quot;Mastering Minds. Shaping Futures&quot;
              </p>
            </div>
          </div>

          <Link
            href='/about'
            className='brutalist-button inline-block bg-[#fcdf46] text-[#483d00] font-black px-8 py-4 border-4 border-black rounded-xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]'
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Our Story
          </Link>
        </motion.div>

        {/* RIGHT: program cards */}
        <motion.div
          variants={fadeRight}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className='flex items-center justify-between mb-6'>
            <p
              className='font-black text-xl uppercase tracking-tight'
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Our Programs
            </p>
            <Link
              href='/programs'
              className='brutalist-button bg-black text-white font-black text-sm px-5 py-2.5 border-4 border-black rounded-lg shadow-[3px_3px_0px_0px_rgba(107,177,255,1)]'
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              View All Programs
            </Link>
          </div>

          <motion.div
            className='grid grid-cols-2 gap-4'
            variants={stagger}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.1 }}
          >
            {programs.map((prog) => (
              <motion.div
                key={prog.label}
                variants={cardIn}
                whileHover={{ y: -4, transition: { duration: 0.18 } }}
                className={`${prog.bg} border-2 ${prog.border} rounded-xl p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer`}
              >
                <span
                  className={`material-symbols-outlined text-4xl ${prog.iconColor} block mb-3`}
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {prog.icon}
                </span>
                <p
                  className='font-black text-sm text-[#1a1a1a] leading-tight'
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {prog.label}
                </p>
                <p
                  className='font-bold text-xs text-[#5b5b5b] mt-1'
                  style={{ fontFamily: 'var(--font-manrope)' }}
                >
                  {prog.sub}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
