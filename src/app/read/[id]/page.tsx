type ReadProps = {
    params: Promise<{
        id: string;
    }>;
};
export default async function Read(props: ReadProps) {
    const params = await props.params;
    const resp = await fetch(`http://localhost:9999/topics/${params.id}`);
    const topic = await resp.json();
    return (
        <div>
            <h2>{topic.title}</h2>
            {topic.body}
        </div>
    );
}
