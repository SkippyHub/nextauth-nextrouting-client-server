import { getServerAuthSession } from "~/server/auth";
import { Header } from "~/app/_components/header";
import { SignInHelper } from "~/app/_components/signinhelper";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Header>
        <SignInHelper />
      </Header>
      contact
    </main>
  );
}
