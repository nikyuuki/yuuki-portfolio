export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto text-center space-y-8 animate-fade-in">
      <h2 className="text-3xl font-bold text-pink-500 dark:text-blue-200">
        Let’s Connect 💌
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        I’d love to hear from you! Whether it’s a friendly chat, a creative
        collaboration, or just to say hi 🌸.
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your name"
          className="w-full px-4 py-2 rounded-lg border border-pink-200 dark:border-blue-900 bg-white/70 dark:bg-black/30 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your email"
          className="w-full px-4 py-2 rounded-lg border border-pink-200 dark:border-blue-900 bg-white/70 dark:bg-black/30 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-blue-500"
        />
        <textarea
          placeholder="Your message"
          rows={5}
          className="w-full px-4 py-2 rounded-lg border border-pink-200 dark:border-blue-900 bg-white/70 dark:bg-black/30 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full py-2 rounded-lg font-semibold bg-gradient-to-r from-pink-300 to-blue-300 hover:from-pink-400 hover:to-blue-400 text-white shadow-md transition-all duration-300"
        >
          Send Message 💫
        </button>
      </form>
    </div>


  );
}
