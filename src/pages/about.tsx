import clsx from "clsx";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../components";
import { boldFont, regularFont } from "../fonts";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>TypeSafe Travellers | About</title>
        <meta name="description" content="Group Trip Planning App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main
        className={clsx(
          "mx-12 my-auto",
          "flex flex-col gap-2",
          "h-[calc(100vh-70px)]",
          "items-center justify-center text-center",
        )}
      >
        <div className={clsx("px-12 pt-12 pb-3")}>
          <div className={clsx(`${boldFont.className}`, "text-8xl", "pb-5")}>
            TypeSafe Travellers
          </div>

          <div
            className={clsx(
              "text-2xl",
              "text-justify",
              `${regularFont.className}`,
            )}
          >
            Welcome to our group trip-planning app! We are a team of travel
            enthusiasts who understand the challenges of planning a group trip.
            We created this app to make the process as easy and stress-free as
            possible. Our app allows users to create a trip itinerary, share it
            with their group, and collaborate on details such as accommodations,
            transportation, and activities. We believe that group trip planning
            should be fun and exciting, not overwhelming. That&apos;s why
            we&apos;ve designed our app to be user-friendly and intuitive. Thank
            you for choosing our group trip-planning app. Happy travels!
          </div>

          <div className={clsx(`${boldFont.className}`, "text-5xl", "pt-3")}>
            Tech Stack
          </div>
          <div
            className={clsx(
              "text-2xl",
              "text-justify",
              `${regularFont.className}`,
            )}
          >
            This app has been built using the T3 stack initialized using
            create-t3-app. The frontend is built using Next.js, React, Tailwind
            CSS, and Radix UI. NextAuth.js is being used for passwordless
            authentication. The backend is built using Prisma, tRPC, and
            PlanetScale &#40;Serverless MySQL&#41;. The app is deployed on
            Repl.it.
          </div>

          <div
            className={clsx(`${boldFont.className}`, "text-5xl", "pt-3 pb-1")}
          >
            Team
          </div>
          <div className={clsx("text-3xl", `${regularFont.className}`)}>
            Ayanava Karmakar // Subham Sarkar // Nishith Savla
          </div>

          <footer
            className={clsx(`${regularFont.className}`, "text-2xl", "pt-10")}
          >
            &copy; {new Date().getFullYear()}{" "}
            <Link
              className={clsx(
                "text-blue-600 hover:text-blue-700",
                "dark:text-sky-200 dark:hover:text-sky-300",
              )}
              href={"https://github.com/TypeSafe-Travellers"}
              target={"_blank"}
            >
              TypeSafe Travellers
            </Link>
            . Open-Source —{" "}
            <Link
              href={"https://github.com/TypeSafe-Travellers/App"}
              target={"_blank"}
            >
              GitHub
            </Link>{" "}
            &amp;{" "}
            <Link
              href={"https://replit.com/@AyanavaKarmakar/apptypesafetravellers"}
              target={"_blank"}
            >
              Repl.it
            </Link>
          </footer>
        </div>
      </main>
    </>
  );
};

export default About;
