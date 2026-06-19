export default function Contact() {
  return (
    <div className="min-h-screen px-8 py-20">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold mb-8">
          Contact Us
        </h1>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-white/5"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-xl bg-white/5"
          />

          <textarea
            rows={6}
            placeholder="Message"
            className="w-full p-4 rounded-xl bg-white/5"
          />

          <button
            className="
            px-8
            py-4
            rounded-xl
            bg-gradient-to-r
            from-violet-600
            to-cyan-500
            "
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}