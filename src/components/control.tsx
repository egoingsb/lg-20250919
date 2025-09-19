"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export function Control() {
    const params = useParams();
    const router = useRouter();
    const id = params.id;
    if (id === undefined) {
        return null;
    }
    return (
        <>
            <li>
                <Link href="/update/1">Update</Link>
            </li>
            <li>
                <button
                    onClick={async () => {
                        const resp = await fetch(
                            `http://localhost:9999/topics/${id}`,
                            {
                                method: "DELETE",
                            }
                        );
                        router.push("/");
                    }}
                >
                    Delete
                </button>
            </li>
        </>
    );
}
