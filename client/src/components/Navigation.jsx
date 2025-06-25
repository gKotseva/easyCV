export function Navigation() {
  return (
    <header className="bg-black text-white">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-2">
        <div className="h-16 overflow-hidden flex items-center">
          <img
            src="white-easyCV-logo.png"
            className="object-cover w-32"
            alt="easyCV logo"
          />
        </div>
        <div className="hidden md:block">
          <h1 className="text-lg font-semibold">
            Your Career Starts with a Powerful CV
          </h1>
        </div>
        <nav>
          <ul className="flex gap-6 uppercase tracking-wider">
            <li className="cursor-pointer hover:underline">Sign in</li>
            <li className="cursor-pointer hover:underline">Register</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
