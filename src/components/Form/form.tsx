interface onSubmit {
    onSubmit: any
}

export default function Form(props: onSubmit) {

    function submitForm(e: any) {
        e.preventDefault()

        const name = e.target[0].value
        const email = e.target[1].value

        props.onSubmit(name, email)
    }

    return (
        <form onSubmit={submitForm} className="w-full h-full flex flex-col justify-center items-center -mt-20 p-5 gap-10">
            <input type="text" required placeholder="Digite seu nome" className={`
                w-full dark:bg-dark-200 dark:text-white max-w-lg pl-2 py-1 rounded-md outline-none
                placeholder:text-xs placeholder:uppercase placeholder:font-bold focus:border-2 focus:border-alura-200
                focus:dark:border-2 focus:dark:border-alura-100 focus:invalid:border-2 focus:invalid:border-red-600
            `} />
            <input type="email" required placeholder="Digite seu e-mail" className={`
                w-full dark:bg-dark-200 dark:text-white max-w-lg pl-2 py-1 rounded-md outline-none
                placeholder:text-xs placeholder:uppercase placeholder:font-bold focus:border-2 focus:border-alura-200
                focus:dark:border-2 focus:dark:border-alura-100 focus:invalid:border-2 focus:invalid:border-red-600
            `} />
            <button className={`
                text-white py-1 px-2 rounded-md dark:bg-alura-200 bg-alura-100 uppercase outline-none w-full max-w-md
                hover:shadow-md hover:shadow-zinc-500
            `}>Seguir</button>
        </form>
    )
}