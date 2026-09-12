export default async function Home() {
  const response = await fetch("http://localhost:3000/api/hello");
  const data = await response.json();

  return (
    <main>
      <h1>買い物シェアアプリ</h1>
      <p>{data.message}</p>
    </main>
  );
}
