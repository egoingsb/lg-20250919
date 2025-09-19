import Link from "next/link";
import "./globals.css";
import { Control } from "@/components/control";

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
                    <Control />
                </ul>
            </body>
        </html>
    );
}
