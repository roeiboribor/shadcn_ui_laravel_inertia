import { Link, Head } from "@inertiajs/react";
import { useEffect, useState } from "react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/shadcn/ui/alert-dialog";

import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/shadcn/ui/command";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit Form");
    };

    const [open, setOpen] = useState(false);

    useEffect(() => {
        const down = (e) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    {/* <AlertDialog>
                        <AlertDialogTrigger>Open</AlertDialogTrigger>
                        <AlertDialogContent>
                            <form onSubmit={handleSubmit}>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Add User
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Animi officia quia
                                        nobis voluptate quam, inventore quae
                                        magnam, doloremque possimus et soluta
                                        aut ea nesciunt minima dicta fuga odio
                                        reprehenderit totam, rem libero quaerat
                                        maiores cumque mollitia facilis? Sunt,
                                        quod architecto impedit accusamus
                                        facilis nostrum aliquam similique
                                        dolore. Possimus voluptas nisi, minus
                                        illo quisquam ab tempore sit voluptates
                                        commodi? Dicta iste deserunt,
                                        exercitationem atque at blanditiis
                                        magnam, quae optio illum saepe velit hic
                                        quis, quia fugit maiores cumque? Rerum
                                        corrupti ea nulla distinctio laudantium
                                        voluptatem? Aperiam pariatur dignissimos
                                        eveniet et voluptatum, provident soluta
                                        quod ab voluptatibus ex nihil, mollitia,
                                        laborum nemo.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel type="button">
                                        Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction type="submit">
                                        Continue
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </form>
                        </AlertDialogContent>
                    </AlertDialog> */}

                    <Command>
                        <CommandInput placeholder="Type a command or search..." />
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup heading="Suggestions">
                                <CommandItem>Calendar</CommandItem>
                                <CommandItem>Search Emoji</CommandItem>
                                <CommandItem>Calculator</CommandItem>
                            </CommandGroup>
                            <CommandSeparator />
                            <CommandGroup heading="Settings">
                                <CommandItem>Profile</CommandItem>
                                <CommandItem>Billing</CommandItem>
                                <CommandItem>Settings</CommandItem>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </div>
            </div>
        </>
    );
}
