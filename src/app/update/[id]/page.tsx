"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update() {
    const params = useParams();
    const id = params.id;
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const router = useRouter();
    useEffect(() => {
        fetch(`http://localhost:9999/topics/${id}`)
            .then((resp) => resp.json())
            .then((topic) => {
                setTitle(topic.title);
                setBody(topic.body);
            });
    }, [id]);
    return (
        <form
            onSubmit={async (evt) => {
                evt.preventDefault();
                const form = evt.target as HTMLFormElement;
                const title = form._title.value;
                const body = form._body.value;
                const resp = await fetch("http://localhost:9999/topics/" + id, {
                    method: "PUT",
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
                    value={title}
                    placeholder="제목을 입력하세요"
                    onChange={(evt) => setTitle(evt.target.value)}
                />
            </p>
            <p>
                <textarea
                    name="_body"
                    placeholder="본문을 입력하세요."
                    value={body}
                    onChange={(evt) => setBody(evt.target.value)}
                ></textarea>
            </p>
            <p>
                <input type="submit" value="생성" />
            </p>
        </form>
    );
}
