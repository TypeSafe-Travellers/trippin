import { Transition } from "@headlessui/react";
import * as Dialog from "@radix-ui/react-dialog";
import { CrossIcon } from "../../icons";
import clsx from "clsx";
import { Fragment, useState } from "react";
import { regularFont } from "../../fonts";

export const EditProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          className={clsx(
            `${regularFont.className}`,
            "inline-flex select-none items-center justify-center rounded-md px-5 pt-2 pb-0.5",
            "mx-auto",
            "text-xl",
            "border-2 border-solid border-black",
            "bg-white hover:bg-gray-50 dark:bg-black dark:hover:bg-slate-900",
            "hover:bg-gray-50",
            "focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75",
            // Register all radix states
            "group",
            "radix-state-open:bg-gray-50 dark:radix-state-open:bg-gray-900",
            "radix-state-on:bg-gray-50 dark:radix-state-on:bg-gray-900",
            "radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50",
          )}
        >
          Edit Profile
        </button>
      </Dialog.Trigger>
      <Dialog.Portal forceMount>
        <Transition.Root show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              forceMount
              className="fixed inset-0 z-20 bg-black/50"
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Content
              forceMount
              className={clsx(
                `${regularFont.className}`,
                "fixed z-50",
                "w-[95vw] max-w-md rounded-lg p-6 md:w-full",
                "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
                "bg-gray-100 dark:bg-gray-800",
              )}
            >
              <Dialog.Title className="text-2xl">Edit profile</Dialog.Title>
              <Dialog.Description className="mt-2 text-xl">
                Make changes to your profile here. Click save when you&apos;re
                done.
              </Dialog.Description>
              <form className="mt-2 space-y-2">
                <fieldset>
                  {/* <legend>Choose your favorite monster</legend> */}
                  <label htmlFor="userName" className="text-lg">
                    Username
                  </label>
                  <input
                    id="userName"
                    type="text"
                    value={"John Doe Carmak"}
                    autoComplete="user-name"
                    className={clsx(
                      "mt-1 block w-full rounded-md px-1 pt-2 pb-1",
                      "text-xl",
                      "border border-gray-400 focus-visible:border-transparent dark:border-gray-700 dark:bg-gray-800",
                    )}
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="email" className="text-lg">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={"johndoecarmak123@gmail.com"}
                    autoComplete="email"
                    className={clsx(
                      "mt-1 block w-full rounded-md px-1 pt-2 pb-1",
                      "text-xl",
                      "border border-gray-400 focus-visible:border-transparent dark:border-gray-700 dark:bg-gray-800",
                    )}
                  />
                </fieldset>
              </form>

              <div className="mt-4 flex justify-end">
                <Dialog.Close
                  className={clsx(
                    "inline-flex select-none justify-center rounded-md px-4 pt-2.5 pb-1 text-xl",
                    " bg-green-100 text-center text-black",
                    "border-2 border-solid border-black",
                    "focus:outline-none focus:ring-2 focus:ring-black hover:bg-green-200",
                    "dark:bg-green-700 dark:text-white dark:focus:ring-gray-500 dark:hover:bg-green-600",
                  )}
                >
                  Save
                </Dialog.Close>
              </div>

              <Dialog.Close
                className={clsx(
                  "absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1",
                )}
              >
                <CrossIcon />
              </Dialog.Close>
            </Dialog.Content>
          </Transition.Child>
        </Transition.Root>
      </Dialog.Portal>
    </Dialog.Root>
  );
};