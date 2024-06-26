import Link from "next/link";
export default function Header() {
    return (
      <header className="bg-blue-500 text-white">
        <div className="flex justify-between items-center py-4 px-6 w-full">
        <Link href={"/recipes"}>
          <div className="text-2xl font-bold">
            Recipe App
          </div>
          </Link>
          <nav className="flex space-x-4">
          <Link href={"/recipes"}>
          <div className="hover:text-gray-200">Search by categories</div>
          </Link>
          <Link href={"/favorites"}>
            <div className="hover:text-gray-200">Favorites</div>
            </Link>

          </nav>
        </div>
      </header>
    );
  }
  