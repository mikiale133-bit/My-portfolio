import { ArrowRight, CheckCircle, Code, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white bg-black">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-[-20%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="absolute right-1/4 bottom-[-20%] h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative px-6 mx-auto max-w-7xl py-28">
        {/* Headline */}
        <h1 className="text-4xl tracking-tight text-center sm:text-6xl">
          I build{" "}
          <span
            className="text-transparent bg-gradient-to-r from-blue-500 via-blue-500 to-blue-400 bg-clip-text"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            high-performance
          </span>{" "}
          websites & web applications
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto mt-6 text-lg text-center text-zinc-300">
          From landing pages to full-scale web applications — I deliver fast,
          scalable, and conversion-focused digital solutions.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-black transition bg-white rounded-2xl hover:bg-zinc-200"
          >
            View My Work
            <ArrowRight size={18} />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition border rounded-2xl border-white/20 hover:bg-white/10"
          >
            Let’s Work Together
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-6 mt-20 sm:grid-cols-3">
          <StatCard
            icon={<CheckCircle className="w-6 h-6 text-purple-400" />}
            value="10+"
            label="Successful Solutions Delivered"
          />
          <StatCard
            icon={<Globe className="w-6 h-6 text-cyan-400" />}
            value="100%"
            label="Job Success & Client Satisfaction"
          />
          <StatCard
            icon={<Code className="w-6 h-6 text-pink-400" />}
            value="5+ Years"
            label="Professional Web Development"
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <div className="p-8 rounded-3xl backdrop-blur">
      <div className="flex items-center justify-center mb-4">{icon}</div>
      <p className="text-4xl font-bold text-center">{value}</p>
      <p className="mt-2 text-sm text-center text-zinc-400">{label}</p>
    </div>
  );
}
