"use client";

import { useRouter } from "next/navigation";

export default function Create() {
    const router = useRouter();
    return (
        <div>
            <form
                onSubmit={async (evt) => {
                    evt.preventDefault();
                    const form = evt.target as HTMLFormElement;
                    const title = form._title.value;
                    const body = form._body.value;
                    const resp = await fetch("http://localhost:9999/topics", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            title,
                            body,
                        }),
                    });
                    const topic = await resp.json();
                    router.push(`/read/${topic.id}`);
                    router.refresh();
                }}
            >
                <p>
                    <input
                        type="text"
                        name="_title"
                        placeholder="제목을 입력하세요"
                    />
                </p>
                <p>
                    <textarea
                        name="_body"
                        placeholder="본문을 입력하세요."
                    ></textarea>
                </p>
                <p>
                    <input type="submit" value="생성" />
                </p>
            </form>
        </div>
    );
}
