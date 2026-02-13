import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-blue-900">
      <div className="text-center">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
        Olá, Bem-vindo!
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-white">
          Esse é meu primeiro contato com next
      </p>
      </div>
    </div>
  );
}
