import Link from "next/link";
import "./globals.css";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body>
                <h1>
                    <Link href="/">Web!!!</Link>
                </h1>
                <input type="text" placeholder="검색" />
                <ul>
                    <li>
                        <Link href="/read/1">html</Link>
                    </li>
                    <li>
                        <Link href="/read/2">css</Link>
                    </li>
                    <li>
                        <Link href="/read/3">javascript</Link>
                    </li>
                </ul>
                {children}
                <ul>
                    <li>
                        <Link href="/create">Create</Link>
                    </li>
                    <li>
                        <Link href="/update/1">Update</Link>
                    </li>
                    <li>
                        <button>Delete</button>
                    </li>
                </ul>
            </body>
        </html>
    );
}
