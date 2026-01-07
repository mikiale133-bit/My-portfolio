export default function Testimonials() {
  const testimonials = [
    {
      name: "Alice Johnson",
      role: "Product Manager, SaaS Co.",
      quote:
        "Working with this developer was a game-changer. Projects were delivered on time, communication was flawless, and the final product exceeded expectations.",
    },
    {
      name: "Michael Lee",
      role: "Founder, Startup Hub",
      quote:
        "I’ve hired many developers, but this one stands out for problem-solving and creating high-performance solutions that actually convert.",
    },
    {
      name: "Sophia Martinez",
      role: "UI/UX Designer, Creative Agency",
      quote:
        "Their development skills perfectly complement design. Projects are fast, clean, and scalable.",
    },
  ];

  return (
    <section className="text-white bg-black py-28 max-sm:15 max-sm:pb-5 border-white/20">
      <div className="px-6 mx-auto text-center max-w-7xl">
        <h2 className="text-3xl font-extrabold sm:text-5xl">
          What clients say
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-zinc-400">
          Real feedback from people I’ve collaborated with.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-12 overflow-x-scroll max-sm:flex sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 text-left bg-gray-900 border rounded-2xl border-white/10 backdrop-blur min-w-70"
            >
              <p className="mb-4 text-sm text-zinc-300">&ldquo;{t.quote}&rdquo;</p>
              <div className="">
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-zinc-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
