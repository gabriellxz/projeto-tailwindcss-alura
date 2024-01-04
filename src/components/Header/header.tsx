import ToggleTheme from "../ToggleTheme/toggle-theme";

export default function Header(){
    return(
        <header className={`
            flex justify-between px-5 items-center bg-alura-200 dark:bg-dark-200
            text-white h-20 sm:rounded-xl sm:m-5 
        `}>
            <span>Olá, Usuário</span>
            <h1 className="text-2xl font-bold">Alura Newsletter</h1>
            <ToggleTheme/>
        </header>
    )
}