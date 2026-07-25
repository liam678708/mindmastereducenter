'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Aisha Rahman',
    role: 'Head of Curriculum',
    icon: 'menu_book',
    bg: '#e8f4ff',
    iconColor: '#1a84d2',
    border: 'border-[#86c8ef]',
    tagBg: 'bg-[#6bb1ff]',
    tagText: 'text-[#003459]',
    desc: 'MA in Education with 12 years developing outcome-driven curricula for K-12 Math & Science learners.',
  },
  {
    name: 'Omar Siddiqui',
    role: 'Lead Math Instructor',
    icon: 'calculate',
    bg: '#f5e8ff',
    iconColor: '#8126cf',
    border: 'border-[#c4b5fd]',
    tagBg: 'bg-[#e5c6ff]',
    tagText: 'text-[#4f0089]',
    desc: 'Former Olympiad coach with a decade of transforming students into confident problem-solvers.',
  },
  {
    name: 'Fatima Al-Noor',
    role: 'Science Specialist',
    icon: 'biotech',
    bg: '#fffbe8',
    iconColor: '#6a5b00',
    border: 'border-[#fde68a]',
    tagBg: 'bg-[#fcdf46]',
    tagText: 'text-[#483d00]',
    desc: 'Biology & Chemistry expert who makes complex scientific concepts accessible and engaging.',
  },
  {
    name: 'Sara Hussain',
    role: 'ESL & IELTS Instructor',
    icon: 'translate',
    bg: '#e8f4ff',
    iconColor: '#1a84d2',
    border: 'border-[#86c8ef]',
    tagBg: 'bg-[#6bb1ff]',
    tagText: 'text-[#003459]',
    desc: 'Certified ESL instructor with proven track record of helping students achieve target band scores.',
  },
  {
    name: 'Yusuf Malik',
    role: 'University Prep Coach',
    icon: 'account_balance',
    bg: '#f5e8ff',
    iconColor: '#8126cf',
    border: 'border-[#c4b5fd]',
    tagBg: 'bg-[#e5c6ff]',
    tagText: 'text-[#4f0089]',
    desc: 'Guides students through Top 10 Canadian university applications with personalized mentorship.',
  },
  {
    name: 'Hassan Qureshi',
    role: 'Technology & STEM Lead',
    icon: 'precision_manufacturing',
    bg: '#fffbe8',
    iconColor: '#6a5b00',
    border: 'border-[#fde68a]',
    tagBg: 'bg-[#fcdf46]',
    tagText: 'text-[#483d00]',
    desc: 'Integrates technology into learning — runs virtual tutoring sessions and interactive STEM workshops.',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa]">

      {/* ── HERO ── */}
      <section className="relative py-20 px-6 md:px-8 bg-black border-b-4 border-black overflow-hidden">
        {/* dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#6bb1ff_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <span
              className="inline-block bg-[#6bb1ff] border-2 border-[#6bb1ff] px-4 py-1 font-black text-xs uppercase tracking-widest mb-6 shadow-[3px_3px_0px_0px_rgba(107,255,143,0.5)]"
              style={{ fontFamily: 'var(--font-space-grotesk)', color: '#003459' }}
            >
              Our Story
            </span>
            <h1
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white mb-6"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              We Are<br />
              <span style={{ color: '#6bb1ff' }}>Mind Masters</span>
            </h1>
            <p
              className="text-lg md:text-xl font-bold text-[#aaa] max-w-2xl leading-relaxed mb-10"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              An after-school tutoring and learning institution dedicated to delivering high-quality Mathematics and Science instruction to Grades 4–12 and university students in Regina, Saskatchewan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/apply"
                className="brutalist-button bg-[#6bb1ff] text-black font-black px-8 py-4 border-4 border-[#6bb1ff] rounded-xl shadow-[6px_6px_0px_0px_rgba(107,255,143,0.4)] text-base"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Apply Now →
              </Link>
              <Link
                href="/contact"
                className="brutalist-button bg-transparent text-white font-black px-8 py-4 border-4 border-white rounded-xl text-base"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT TEXT ── */}
      <section className="py-20 px-6 md:px-8 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Left text */}
            <motion.div variants={fadeUp}>
              <span
                className="inline-block bg-[#fcdf46] border-2 border-black px-4 py-1 font-black text-xs uppercase tracking-widest mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Who We Are
              </span>
              <h2
                className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none text-[#1a1a1a] mb-6"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                More Than a<br />
                <span style={{ color: '#8126cf' }}>Tutoring Centre</span>
              </h2>
              <div className="flex flex-col gap-4" style={{ fontFamily: 'var(--font-manrope)' }}>
                <p className="font-bold text-base text-[#2f2f2f] leading-relaxed">
                  Mind Masters EduCenter Inc. was founded with a clear mission: to provide high-quality, structured, and personalized tutoring in Mathematics and Science for students in Grades 4–12, aligned with the Saskatchewan Curriculum, while supporting broader academic and language proficiency goals.
                </p>
                <p className="font-bold text-base text-[#2f2f2f] leading-relaxed">
                  We offer specialized programs spanning Sunshine Program Math &amp; Science (Grades 4–8), Freshman/Sophomore (Grades 8–10), Junior/Senior (Grades 11–12), university-level tutoring, Top 10 Canadian university admission preparation, and ESL/IELTS examination preparation.
                </p>
                <p className="font-bold text-base text-[#2f2f2f] leading-relaxed">
                  Our programs emphasize interactive, hands-on teaching methods with small-group learning to ensure focused instruction and individualized attention. Every student completes an intake assessment to identify priority learning areas — because we believe that truly personalized education is the key to measurable academic success.
                </p>
              </div>
            </motion.div>

            {/* Right visual */}
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <div className="bg-[#8126cf] border-4 border-black rounded-2xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <span
                  className="material-symbols-outlined text-5xl text-white mb-4 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  lightbulb
                </span>
                <h3
                  className="text-xl font-black text-white mb-2 uppercase tracking-tight"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  Our Mission
                </h3>
                <p
                  className="font-bold text-sm text-[#e5c6ff] leading-relaxed"
                  style={{ fontFamily: 'var(--font-manrope)' }}
                >
                  To provide high-quality, structured, and personalized tutoring in Mathematics and Science for students in Grades 4–12, aligned with the Saskatchewan Curriculum, while supporting broader academic and language proficiency goals.
                </p>
              </div>
              <div className="bg-[#1a84d2] border-4 border-black rounded-2xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <span
                  className="material-symbols-outlined text-5xl text-white mb-4 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  visibility
                </span>
                <h3
                  className="text-xl font-black text-white mb-2 uppercase tracking-tight"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  Our Vision
                </h3>
                <p
                  className="font-bold text-sm text-[#86c8ef] leading-relaxed"
                  style={{ fontFamily: 'var(--font-manrope)' }}
                >
                  To become the leading tutoring and academic support provider in Regina, Saskatchewan, serving students who seek supplemental learning in Mathematics, Sciences, English language development, and post-secondary preparation.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section className="py-20 px-6 md:px-8 bg-white border-y-4 border-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-12"
          >
            <span
              className="inline-block bg-[#6bb1ff] border-2 border-black px-4 py-1 font-black text-xs uppercase tracking-widest mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Our Team
            </span>
            <h2
              className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#1a1a1a]"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Meet Our Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Founder image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="relative border-4 border-black rounded-2xl overflow-hidden shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] aspect-[4/3]">
                <Image
                  src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg"
                  alt="Founder of Mind Masters Edu Center"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {/* Name badge over image */}
                <div className="absolute bottom-5 left-5">
                  <div className="bg-[#fcdf46] border-2 border-black rounded-xl px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <p
                      className="font-black text-base text-[#1a1a1a] leading-none"
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}
                    >
                      Mind Masters Team
                    </p>
                    <p
                      className="font-bold text-xs text-[#483d00]"
                      style={{ fontFamily: 'var(--font-manrope)' }}
                    >
                      Dedicated Educators
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Founder text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="flex flex-col gap-5"
            >
              <div>
              <p
                className="font-black text-xs uppercase tracking-widest mb-1"
                style={{ fontFamily: 'var(--font-space-grotesk)', color: '#8126cf' }}
              >
                A Message from Our Team
              </p>
              <h3
                className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Building Futures,<br />One Student at a Time
              </h3>
              </div>

            <div className="flex flex-col gap-4" style={{ fontFamily: 'var(--font-manrope)' }}>
              <p className="font-bold text-base text-[#2f2f2f] leading-relaxed">
                "We started Mind Masters because we saw too many bright students struggling through the traditional education system — not because they lacked ability, but because they needed instruction tailored to their unique learning styles."
              </p>
              <p className="font-bold text-base text-[#2f2f2f] leading-relaxed">
                "With experienced educators and a commitment to small-group, personalized instruction, Mind Masters was built on the principle that every student deserves focused attention, structured guidance, and the confidence to excel academically."
              </p>
              <p className="font-bold text-base text-[#2f2f2f] leading-relaxed">
                "Today, we are proud to lead a team of passionate tutors who share this vision — and even prouder to see our students grow into confident, capable, and curious learners prepared for university and beyond."
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="bg-[#f5e8ff] border-2 border-[#c4b5fd] rounded-xl px-4 py-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-[#8126cf]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                <span className="font-black text-xs text-[#4f0089]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>Experienced Educators</span>
              </div>
              <div className="bg-[#e8f4ff] border-2 border-[#86c8ef] rounded-xl px-4 py-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-[#1a84d2]" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                <span className="font-black text-xs text-[#003459]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>Saskatchewan Curriculum</span>
              </div>
              <div className="bg-[#fffbe8] border-2 border-[#fde68a] rounded-xl px-4 py-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-[#6a5b00]" style={{ fontVariationSettings: "'FILL' 1" }}>group</span>
                <span className="font-black text-xs text-[#483d00]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>Small-Group Learning</span>
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-20 px-6 md:px-8 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-12"
          >
            <span
              className="inline-block bg-[#8126cf] text-white border-2 border-black px-4 py-1 font-black text-xs uppercase tracking-widest mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Our Educators
            </span>
            <h2
              className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#1a1a1a]"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Meet Our Instructors
            </h2>
            <p
              className="text-lg font-bold text-[#5b5b5b] mt-2 max-w-xl"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              Dedicated educators who pour their hearts into every student&apos;s success.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`bg-white border-4 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col`}
              >
                {/* Top accent */}
                <div
                  className="h-2"
                  style={{ backgroundColor: member.iconColor }}
                />
                <div className="p-6 flex flex-col gap-3 flex-grow">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 border-2 border-black rounded-xl flex items-center justify-center flex-shrink-0`}
                      style={{ backgroundColor: member.bg }}
                    >
                      <span
                        className="material-symbols-outlined text-2xl"
                        style={{ color: member.iconColor, fontVariationSettings: "'FILL' 1" }}
                      >
                        {member.icon}
                      </span>
                    </div>
                    <div>
                      <h3
                        className="font-black text-base text-[#1a1a1a] leading-tight"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                      >
                        {member.name}
                      </h3>
                      <span
                        className={`${member.tagBg} ${member.tagText} border border-black font-black text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-md`}
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                      >
                        {member.role}
                      </span>
                    </div>
                  </div>
                  <p
                    className="font-bold text-sm text-[#5b5b5b] leading-relaxed"
                    style={{ fontFamily: 'var(--font-manrope)' }}
                  >
                    {member.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── JOIN CTA ── */}
      <section className="py-16 px-6 md:px-8 bg-black border-t-4 border-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Become Part of<br />
              <span style={{ color: '#6bb1ff' }}>Our Community</span>
            </h2>
            <p
              className="text-lg font-bold text-[#aaa] mt-2"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              Apply today and give your child the education they deserve.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/apply"
              className="brutalist-button bg-[#6bb1ff] text-black font-black text-base px-8 py-4 border-4 border-[#6bb1ff] rounded-xl shadow-[6px_6px_0px_0px_rgba(107,255,143,0.4)] whitespace-nowrap"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Apply Now →
            </Link>
            <Link
              href="/contact"
              className="brutalist-button bg-transparent text-white font-black text-base px-8 py-4 border-4 border-white rounded-xl whitespace-nowrap"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
