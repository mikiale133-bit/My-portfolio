export default function Contact() {
  return (
    <section id="contact" className="text-white bg-black py-28 max-sm:pb-10">
      <div className="max-w-3xl px-6 mx-auto text-center">
        <h2 className="px-2 text-2xl font-extrabold sm:text-4xl">
          Let’s build something together
        </h2>
        <p className="w-full mt-4 px- 2 text-zinc-400">
          Whether it’s a website, web app, or consultation — I’m ready to help
          bring your ideas to life.
        </p>

        <form className="flex flex-col gap-4 mt-10">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 text-white border rounded-xl border-white/20 bg-white/5 placeholder:text-zinc-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 text-white border rounded-xl border-white/20 bg-white/5 placeholder:text-zinc-400"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-4 text-white border rounded-xl border-white/20 bg-white/5 placeholder:text-zinc-400"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-4 mt-2 font-semibold text-white transition rounded-2xl bg-gradient-to-r from-purple-700 to-cyan-700 hover:opacity-90"
          >
            Send Message
          </button>
        </form>

        <p className="mt-6 text-sm text-zinc-500">
          Or reach me directly at{" "}
          <a href="mailto:youremail@example.com" className="underline text-white/100">
            youremail@example.com
          </a>
        </p>
      </div>
    </section>
  );
}
