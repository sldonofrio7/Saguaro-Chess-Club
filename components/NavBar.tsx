import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    return ( 

        <nav className="flex justify-between sticky top-0 z-50">
            <div className="m-4">
                <Image src="/logo.png" alt="logo" width="35" height="35"></Image>
            </div>
            <div className= "space-x-5 m-7">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/donate">Donate</Link>
            </div>
        </nav>

     );
}
 
export default NavBar;