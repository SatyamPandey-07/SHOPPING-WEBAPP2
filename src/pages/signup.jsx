export default function Signup() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#0d0d0d]">
        <div className="bg-[#111] p-8 rounded-2xl shadow-lg shadow-[#0ff] w-96 border border-[#0ff]">
          <h2 className="text-3xl font-extrabold text-center text-[#0ff] mb-6 tracking-wider">
            Sign Up
          </h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 bg-[#222] border border-[#0ff] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ff] transition-all"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-[#222] border border-[#0ff] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ff] transition-all"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-[#222] border border-[#0ff] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ff] transition-all"
            />
            <button
              type="submit"
              className="w-full bg-[#0ff] text-[#111] p-3 rounded-lg font-bold text-lg tracking-wide transition-all hover:bg-[#ff00ff] hover:text-white hover:shadow-lg hover:shadow-[#ff00ff]"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
  