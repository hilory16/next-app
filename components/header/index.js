import Link from 'next/link';
function Header() {
    return (
        <div>
            <ul>
                <li className="px-4">
                    <Link href="/">
                    <a>Home</a>
                    </Link>
                </li>
                <li className="px-4">
                    <Link href="/">
                    <a>About</a>
                    </Link>
                </li>

                <li className="px-4">
                    <Link href="/posts">
                    <a>Posts</a>
                    </Link>
                </li>

                <li className="px-4">
                    <Link href="/contact">
                    <a>Contact</a>
                    </Link>
                </li>

                <li className="px-4">
                    <Link href="/contact">
                    <a>Develop Branch</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
