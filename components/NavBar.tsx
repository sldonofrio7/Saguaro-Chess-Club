import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    return ( 

        <nav className="flex justify-between">
            <div className="m-6">
                <Image src="/logo.png" alt="logo" width="50" height="50"></Image>
            </div>
            <div className= "space-x-5 p-10">
                <Link href="/" className="hover:text-xl">Home</Link>
                <Link href="/about" className="hover:text-xl">About</Link>
            </div>
        </nav>

     );
}
 
export default NavBar;