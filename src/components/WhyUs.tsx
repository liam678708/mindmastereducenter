'use client';

import { motion, type Variants } from 'framer-motion';

const reasons = [
  {
    icon: 'lightbulb',
    iconColor: 'text-[#1a84d2]',
    iconBg: 'bg-[#e8f4ff]',
    borderColor: 'border-[#1a84d2]',
    shadowColor: 'rgba(0,106,45,0.25)',
    num: '01',
    numColor: 'text-[#86c8ef]',
    title: 'Personalized Learning',
    body: 'Every student receives a customized learning plan tailored to their strengths and weaknesses.',
  },
  {
    icon: 'diversity_3',
    iconColor: 'text-[#8126cf]',
    iconBg: 'bg-[#f5e8ff]',
    borderColor: 'border-[#8126cf]',
    shadowColor: 'rgba(129,38,207,0.25)',
    num: '02',
    numColor: 'text-[#c4b5fd]',
    title: 'Experienced Tutors',
    body: 'Learn from qualified educators who break down complex topics into easy, manageable steps.',
  },
  {
    icon: 'school',
    iconColor: 'text-[#6a5b00]',
    iconBg: 'bg-[#fffbe8]',
    borderColor: 'border-[#d4a800]',
    shadowColor: 'rgba(212,168,0,0.35)',
    num: '03',
    numColor: 'text-[#fde68a]',
    title: 'SK Curriculum Aligned',
    body: 'All programs are aligned with the Saskatchewan Curriculum for seamless classroom support.',
  },
  {
    icon: 'shield',
    iconColor: 'text-[#1a84d2]',
    iconBg: 'bg-[#e8f4ff]',
    borderColor: 'border-[#1a84d2]',
    shadowColor: 'rgba(0,106,45,0.25)',
    num: '04',
    numColor: 'text-[#86c8ef]',
    title: 'Small-Group Learning',
    body: 'Focused instruction with individualized attention — every student learns at their own pace.',
  },
  {
    icon: 'trending_up',
    iconColor: 'text-[#8126cf]',
    iconBg: 'bg-[#f5e8ff]',
    borderColor: 'border-[#8126cf]',
    shadowColor: 'rgba(129,38,207,0.25)',
    num: '05',
    numColor: 'text-[#c4b5fd]',
    title: 'Measurable Progress',
    body: 'Intake assessments identify priority areas and track academic growth over time.',
  },
  {
    icon: 'videocam',
    iconColor: 'text-[#6a5b00]',
    iconBg: 'bg-[#fffbe8]',
    borderColor: 'border-[#d4a800]',
    shadowColor: 'rgba(212,168,0,0.35)',
    num: '06',
    numColor: 'text-[#fde68a]',
    title: 'Flexible Learning Options',
    body: 'In-person tutoring at our Regina centre or virtual Zoom sessions from anywhere.',
  },
];

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const cardIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 px-6 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span
              className="inline-block bg-[#6bb1ff] border-2 border-black px-4 py-1 font-black text-xs uppercase tracking-widest mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Our Advantage
            </span>
            <h2
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Why Mind<br />Masters?
            </h2>
          </div>
        </motion.div>

        {/* 3-col × 2-row grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              variants={cardIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`relative bg-white border-[3px] ${r.borderColor} rounded-2xl p-7 flex flex-col gap-4 group cursor-default overflow-hidden`}
              style={{ boxShadow: `6px 6px 0px 0px ${r.shadowColor}` }}
            >
              {/* Large number watermark */}
              <span
                className={`absolute top-4 right-5 text-6xl font-black leading-none select-none pointer-events-none ${r.numColor}`}
                style={{ fontFamily: 'var(--font-space-grotesk)', opacity: 0.35 }}
              >
                {r.num}
              </span>

              {/* Icon */}
              <div className={`w-14 h-14 ${r.iconBg} border-2 ${r.borderColor} rounded-xl flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)]`}>
                <span
                  className={`material-symbols-outlined text-3xl ${r.iconColor}`}
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {r.icon}
                </span>
              </div>

              {/* Text */}
              <div>
                <h3
                  className="text-lg font-black text-[#1a1a1a] mb-2 leading-tight"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {r.title}
                </h3>
                <p
                  className="font-bold text-sm text-[#5b5b5b] leading-relaxed"
                  style={{ fontFamily: 'var(--font-manrope)' }}
                >
                  {r.body}
                </p>
              </div>

              {/* Bottom accent line on hover */}
              <div className={`absolute bottom-0 left-0 right-0 h-[3px] ${r.iconBg} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
