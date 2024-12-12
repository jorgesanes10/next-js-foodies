'use client';

export default function ErrorPage({ error }) {
  return (
    <main className="error">
      <h1>
        There has been an error: <p>{error.message}</p>
      </h1>
    </main>
  );
}
