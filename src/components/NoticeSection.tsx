const notices = [
  "🚀 Enrollment Now Open — Grades 4–12, University & IELTS Prep",
  "📝 Book Your Intake Assessment Today",
  "💻 Virtual Tutoring via Zoom Now Available",
  "🎓 Admission Prep for Canada's Top 10 Universities",
  "🗣️ ESL & IELTS Preparation Classes Enrolling Now",
  "👨‍👩‍👧‍👦 20% Discount for Families with 2+ Kids Enrolled",
  "📐 Math & Science Tutoring for Grades 4–12",
  "📍 Visit Us at 131 Woodward Ave, Regina, SK",
];

export default function NoticeSection() {
  const text = notices.join("   ✦   ");
  const doubled = `${text}   ✦   ${text}`;

  return (
    <div className="bg-[#fcdf46] border-b-4 border-black py-3 overflow-hidden relative">
      <div
        className="flex animate-marquee whitespace-nowrap select-none"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        <span className="font-black text-sm md:text-base text-[#483d00] pr-8">
          {doubled}
        </span>
      </div>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#fcdf46] to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#fcdf46] to-transparent pointer-events-none z-10" />
    </div>
  );
}
