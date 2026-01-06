import { Code2, Palette, Lightbulb } from "lucide-react";

export default function Services() {
  return (
    <section className="relative text-white bg-black">
      <div className="px-6 py-24 mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
           My{" "}
            <span
              className="text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              Services
            </span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-zinc-400">
            End-to-end solutions focused on performance, usability, and real
            business impact.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <ServiceCard
            icon={<Code2 className="text-purple-400 h-7 w-7" />}
            title="Development"
            description="Modern, scalable websites and web applications built with clean code, performance, and maintainability in mind."
            items={[
              "Frontend & backend development",
              "Responsive & accessible builds",
              "API integration & optimization",
            ]}
          />

          <ServiceCard
            icon={<Palette className="text-pink-400 h-7 w-7" />}
            title="UI / UX Design"
            description="Intuitive, visually refined interfaces that enhance usability and drive user engagement."
            items={[
              "User-centered interface design",
              "Design systems & consistency",
              "UX audits & improvements",
            ]}
          />

          <ServiceCard
            icon={<Lightbulb className="h-7 w-7 text-cyan-400" />}
            title="Consultation"
            description="Strategic guidance to help you make the right technical and product decisions from day one."
            items={[
              "Project planning & architecture",
              "Tech stack recommendations",
              "Performance & scalability reviews",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description, items }) {
  return (
    <div className="p-8 transition border max-md:p-5 max-md:p-3 group rounded-3xl border-white/10 bg-white/5 backdrop-blur hover:border-white/20">
      <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-2xl bg-white/10">
        {icon}
      </div>

      <h3 className="mb-3 text-xl font-semibold">{title}</h3>

      <p className="mb-6 text-sm text-zinc-400">{description}</p>

      <ul className="space-y-3 text-sm text-zinc-300">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
