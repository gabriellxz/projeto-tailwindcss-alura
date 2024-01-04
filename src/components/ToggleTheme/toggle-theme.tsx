import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";

export default function ToggleTheme(){

    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches

    const pageClasses = document.documentElement.classList

    useEffect(() => {
        systemPreference && pageClasses.add("dark")
    },[])

    function toggle() {
        pageClasses.toggle("dark")
    }

    return(
        <div className="cursor-pointer hidden sm:block">
            <MoonIcon className="h-8 block dark:hidden" onClick={toggle}/>
            <SunIcon className="h-8 hidden dark:block" onClick={toggle}/>
        </div>
    )
}