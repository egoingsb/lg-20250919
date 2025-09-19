export default function Home() {
    return (
        <div>
            <h1>
                <a href="/">Web</a>
            </h1>
            <ul>
                <li>
                    <a href="/read/1">html</a>
                </li>
                <li>
                    <a href="/read/2">css</a>
                </li>
                <li>
                    <a href="/read/3">javascript</a>
                </li>
            </ul>
            Welcome, Nextjs!
            <ul>
                <li>
                    <a href="/create">Create</a>
                </li>
                <li>
                    <a href="/update/1">Update</a>
                </li>
                <li>
                    <button>Delete</button>
                </li>
            </ul>
        </div>
    );
}
