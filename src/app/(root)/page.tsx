"use server";

import { Button } from "@/components/button/Button";

export default async function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center gap-4 p-6">
      <h1 className="text-var-font-heading">Página inicial</h1>
    </main>
  );
}
