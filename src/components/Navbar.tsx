import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { Home } from "lucide-react";
import { Bell, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between border-b border-gray-200 pb-4'>
        {/* LEFT */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <Image src="/logo.png" alt="Urban Bakery" width={36} height={36} className="w-6 h-6 md:w-10 md:h-10"/>
        <p className="hidden md:block text-md font-medium tracking-wider">Urban Bakery</p>
        </Link>
        {/* MIDDLE */}
        {/* RIGHT */}
        <div className="flex items-center gap-6">
            <SearchBar />
            <Link href="/">
            <Home className="w-4 h-4 text-gray-500"/>
            </Link> 
            <Bell className="w-4 h-4 text-gray-500"/>
            <ShoppingCart className="w-4 h-4 text-gray-500"/>
            <Link href="/">
            Sign In
            </Link>
        </div>
    </nav>
  )
}

export default Navbar;