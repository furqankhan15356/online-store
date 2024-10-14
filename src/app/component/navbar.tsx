import Link from "next/link";


export default function Navbar(){
    return(
        <main>
            <nav>
            <div className="pl-10 mt-5">
                <img src="logo.png" height={300} width={300} alt="logo image" />
            </div>
            <div>
                <ul className="flex lg:flex-row  gap-9 justify-center py-15 bg-white">
              
                    <li className="text-slate-600 font-semibold hover:bg-gray-700 py-2 px-5 rounded-lg hover:text-slate-50"> <Link href="/">Home</Link> </li>
                    <li className="text-slate-600 font-semibold hover:bg-gray-700 py-2 px-5 rounded-lg hover:text-slate-50"><Link href="/about">About</Link></li>
                    <li className="text-slate-600 font-semibold hover:bg-gray-700 py-2 px-5 rounded-lg hover:text-slate-50"><Link href="/contact">Contact</Link></li>
                </ul>
                </div>
            </nav>
        </main>
    )
}