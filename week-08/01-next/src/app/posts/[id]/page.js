// app/posts/[id]/page.js
export default async function PostPage({ params }) {
  const { id } = await params;

  const posts = {
    "1": {
      title: "Hello World",
      content: "This is my first post!",
    },
    "2": {
      title: "Learning Next.js",
      content: "Next.js filesystem routing is awesome.",
    },
  };

  const post = posts[id];

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  );
}
