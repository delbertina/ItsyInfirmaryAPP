import AppHeader from "./components/app-header/app-header";

export default function Home() {
  return (
    <>
      <AppHeader />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Content</h1>
      </main>
    </>
  );
}
