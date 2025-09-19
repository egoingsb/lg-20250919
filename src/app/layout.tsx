import Link from "next/link";
import "./globals.css";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const resp = await fetch("http://localhost:9999/topics");
    const topics = await resp.json();
    return (
        <html>
            <body>
                <h1>
                    <Link href="/">Web!!!</Link>
                </h1>
                <input type="text" placeholder="검색" />
                <ul>
                    {topics.map((item: { id: number; title: string }) => {
                        return (
                            <li key={item.id}>
                                <Link href={`/read/${item.id}`}>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
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
