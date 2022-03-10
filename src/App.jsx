import InputGroup from "./components/InputGroup";

function App() {
  return (
    <div className="min-h-screen min-w-full p-5 flex flex-col sm:flex-row-reverse sm:p-0">
      <div className="flex flex-col items-center justify-center relative overflow-hidden pb-10 sm:w-1/2 sm:bg-gray-100">
        <div className="bg-indigo-500 w-32 h-32 rounded-full sm:h-72 sm:w-72"></div>
        <div className="w-full h-32 backdrop-blur-md absolute top-16 sm:h-1/2 sm:top-1/2"></div>
      </div>
      <div className="sm:w-1/2 sm:justify-center sm:items-center">
        <div className="flex flex-col gap-5 h-full sm:px-4 2xl:px-48 sm:justify-center">
          <h1 className="font-semibold text-3xl text-center sm:text-left">
            Welcome back
          </h1>
          <p className="text-gray-500 text-center sm:text-left">
            To continue, please login with your credentials below.
          </p>
          <InputGroup
            label="Email"
            placeholder="Enter your email"
            type="email"
          />
          <InputGroup
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
          <div className="flex flex-col-reverse gap-5 sm:flex-row justify-between">
            <div className="flex items-center gap-3">
              <input
                className="border border-zinc-400 h-4 w-4"
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
              />
              <p className="text-indigo-800 font-semibold">
                Remember me for 30 days
              </p>
            </div>
            <p className="text-indigo-800 font-semibold">Forgot password?</p>
          </div>
          <button className="w-full bg-indigo-500 text-white rounded-lg p-3 hover:bg-indigo-600 transition-all ease-linear delay-75">
            Sign in
          </button>
          <button className="p-3 rounded-lg w-full border border-slate-500 hover:bg-gray-700 hover:text-white transition-all ease-linear delay-75">
            Sign in with Google
          </button>
          <p className="text-gray-500 text-center">
            Don't have an account?&nbsp;
            <span className="text-indigo-800 font-semibold">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
