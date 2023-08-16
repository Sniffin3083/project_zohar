import Link from 'next/link'

export default function NavBar() {
    return (
        <nav className="sticky top-0">
            <ul>
                <li className="text-5xl text-sky-400 hover:underline">
                    <Link href="/sign-in">Sign In</Link>
                </li>
            </ul>
        </nav>
    )
}