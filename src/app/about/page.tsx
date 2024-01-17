import {Header} from "./../_components/header";
import { SignInHelper } from "./../_components/signinhelper";

export default async function Home() {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            <Header>
        <SignInHelper />
      </ Header>
      about
    </main>
  );
}
``