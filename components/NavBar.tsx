import Link from "next/link";

const NavBar = () => {
    return ( 

        <nav>
            <div className="text-xs flex justify-end items-end mt-2.5 mx-auto mb-20 py-2.5 px-0">
                <Link href="/">home</Link>
                <Link href="/about">about</Link>
            </div>
        </nav>

     );
}
 
export default NavBar;