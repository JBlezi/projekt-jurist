// components/SideNav.tsx

const SideNav = () => {
  return (
    <nav className="h-screen w-64 flex flex-col bg-gray-800 text-white p-12">
      {/* Navigation links */}
      <a href="/" className="p-4 hover:bg-gray-700">Home</a>
      <a href="/about" className="p-4 hover:bg-gray-700">About</a>
      {/* Add more links as needed */}
      {/* ... */}
    </nav>
  );
};

export default SideNav;
