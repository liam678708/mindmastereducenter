'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

const programs = [
  {
    title: 'School Success Program',
    grade: 'Grades 4-12',
    gradeStyle: 'bg-[#6bb1ff] rotate-12',
    description:
      'Sunshine (4-8), Freshman/Sophomore (8-10), Junior/Senior (11-12) Math & Science — Saskatchewan Curriculum aligned.',
    btnBg: 'bg-[#6bb1ff] text-[#003459]',
    icon: 'calculate',
    iconColor: '#1a84d2',
    accentBg: '#e8f4ff',
    zoomNote: 'In-person & Zoom available',
  },
  {
    title: 'University Prep & Tutoring',
    grade: 'Uni & Pre-Uni',
    gradeStyle: 'bg-[#fcdf46] -rotate-12',
    description:
      'Undergraduate Math & Science Tutoring, Top 10 Canadian University Admission Preparation, and On-Demand Tutoring.',
    btnBg: 'bg-[#fcdf46] text-[#483d00]',
    icon: 'account_balance',
    iconColor: '#6a5b00',
    accentBg: '#fffbe8',
    zoomNote: 'In-person & Zoom available',
  },
  {
    title: 'ESL & IELTS Preparation',
    grade: 'All Ages',
    gradeStyle: 'bg-[#8126cf] rotate-6 text-white',
    description:
      'ESL studies for newcomers and comprehensive IELTS exam preparation with experienced instructors. Achieve your target band score.',
    btnBg: 'bg-[#8126cf] text-white',
    icon: 'translate',
    iconColor: '#8126cf',
    accentBg: '#f5e8ff',
    zoomNote: 'In-person & Zoom available',
  },
];

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

export default function Programs() {
  return (
    <section id='programs' className='py-24 px-6 md:px-8 bg-[#f1f1f1]'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className='flex flex-col md:flex-row justify-between items-end mb-16 gap-6'
        >
          <div>
            <h2
              className='text-4xl md:text-6xl font-black uppercase tracking-tighter'
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Our Programs
            </h2>
            <p
              className='text-xl font-bold mt-2 text-[#5b5b5b]'
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              Top-quality, affordable tutoring customized to each learner&apos;s strengths.
            </p>
          </div>
          <Link
            href="/programs"
            className='brutalist-button bg-black text-white font-black px-8 py-4 border-4 border-black rounded-xl whitespace-nowrap'
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            View All Programs
          </Link>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 gap-8'
          variants={stagger}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
        >
          {programs.map((program) => (
            <motion.div
              key={program.title}
              variants={cardVariant}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className='bg-white border border-black rounded overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col'
            >
              <div className='h-48 relative overflow-hidden flex items-center justify-center'
                style={{ backgroundColor: program.accentBg }}
              >
                <span
                  className='material-symbols-outlined text-7xl opacity-30'
                  style={{ color: program.iconColor }}
                >
                  {program.icon}
                </span>
                <div
                  className={`absolute top-4 right-4 ${program.gradeStyle} border-2 border-black font-black text-xs px-3 py-1 uppercase z-10`}
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {program.grade}
                </div>
              </div>
              <div className='p-8 flex-grow flex flex-col'>
                <h3
                  className='text-2xl font-black mb-4'
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {program.title}
                </h3>
                <p
                  className='text-[#5b5b5b] font-bold mb-3 flex-grow'
                  style={{ fontFamily: 'var(--font-manrope)' }}
                >
                  {program.description}
                </p>
                <p
                  className='text-xs font-black uppercase tracking-wide mb-5'
                  style={{ fontFamily: 'var(--font-space-grotesk)', color: program.iconColor }}
                >
                  {program.zoomNote}
                </p>
                <Link
                  href={`/apply?program=${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`brutalist-button mt-auto w-full text-center ${program.btnBg} font-black py-4 border-4 border-black rounded-xl`}
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  Explore Program
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
