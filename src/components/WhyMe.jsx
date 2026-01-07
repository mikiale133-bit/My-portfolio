import { ArrowUpRight } from "lucide-react";

export default function WhyMe() {
  return (
    <section className="text-white bg-black">
      <div className="px-6 mx-auto max-w-7xl py-28 max-sm:pb-5">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
             Why{" "}
              <span
                className="text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text"
                style={{ WebkitTextFillColor: "transparent" }}
              >
                Choose
              </span>
              Me
            </h2>

            <p className="max-w-xl mt-6 text-lg text-zinc-300">
              Clients work with me because I take ownership, communicate clearly,
              and ship products that perform in the real world.
            </p>

            <p className="max-w-xl mt-4 text-lg text-blue-400">
             No overengineering. No guesswork. Just focused execution.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center space-y-10">
            <div className="pb-5 border-b border-white/30">
              <WhyLine
                title="Proven delivery"
                text="10+ production-ready projects successfully delivered across multiple industries."
              />
            </div>

            <div className="pb-5 border-b border-white/30">
              <WhyLine
                title="Trust & consistency"
                text="100% job success with repeat clients and long-term collaborations."
              />
            </div>

            <div className="pb-5 border-b border-white/30">
              <WhyLine
                title="Built for outcomes"
                text="Every decision is guided by performance, scalability, and business impact."
              />
            </div>
          </div>
        </div>

        {/* Subtle divider */}
        <div className="flex items-center gap-3 px-5 py-2 mt-10 text-sm bg-gray-800 rounded-lg max-w-150 text-zinc-400">
          <ArrowUpRight className="w-4 h-4" />
          Ready to see how this translates into real projects?
        </div>
      </div>
    </section>
  );
}

function WhyLine({ title, text }) {
  return (
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-400">{text}</p>
    </div>
  );
}
