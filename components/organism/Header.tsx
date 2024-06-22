export default function Header() {
    return (
      <header className="bg-blue-500 text-white">
        <div className="flex justify-between items-center py-4 px-6 w-full">
          <div className="text-2xl font-bold">
            Recipe App
          </div>
          <nav className="flex space-x-4">
          <a href="#" className="hover:text-gray-200">Search by categories</a>
            <a href="#" className="hover:text-gray-200">Favorites</a>
            <a href="#" className="hover:text-gray-200">My recipes</a>
          </nav>
        </div>
      </header>
    );
  }
  