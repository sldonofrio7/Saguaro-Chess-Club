import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    return ( 

        <nav className="flex justify-between sticky top-0 z-50 border-b-4 border-b-white">
            <div className="m-6">
                <Image src="/logo.png" alt="logo" width="40" height="40"></Image>
            </div>
            <div className= "space-x-5 p-10">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </div>
        </nav>

     );
}
 
export default NavBar;