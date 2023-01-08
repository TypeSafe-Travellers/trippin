import { type NextPage } from "next";
import { ThemeToggle } from "../components";
import Head from "next/head";
import Link from "next/link";
import { boldFont } from "../fonts";
import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({
    text: "We are the TypeSafe Travellers.",
  });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen items-center justify-center dark:bg-black">
        <div className="flex flex-col items-center gap-10">
          <Link
            className="group relative mx-10 cursor-pointer"
            href={"https://github.com/TypeSafe-Travellers/App"}
            target={"_blank"}
          >
            <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <div className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-black px-7 py-4 leading-none">
              <p
                className={`mx-5 bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text px-6 pt-5 text-center text-4xl text-transparent lg:text-7xl ${boldFont.className}`}
              >
                {hello.data ? hello.data.greeting : "Loading greeting..."}
              </p>
            </div>
          </Link>
          <ThemeToggle />
        </div>
      </main>
    </>
  );
};

export default Home;
