interface Props {
    title: string;
    text: string[];
    image: string;
    alt: string;
    tags: string[];
}

export default function Article(props:Props) {
    return(
        <div className="p-5 bg-zinc-400 dark:bg-dark-200 sm:rounded-md sm:shadow-lg dark:text-white flex flex-col items-center">
            <h3 className="text-xl font-bold text-alura-200 dark:text-zinc-400">{props.title}</h3>
            <div className="flex justify-end gap-3 w-full pr-3 p-2">
                {
                    props.tags.map((tag: string) => (
                        <span key={tag} className="bg-alura-100 dark:bg-dark-100 p-1 rounded-md text-xs uppercase font-bold">{tag}</span>
                    ))
                }
            </div>
            <div className="grid gap-3">
                {
                    props.text.map((content:string, index:number) => (
                        <p key={index} className="text-justify">{content}</p>
                    ))
                }
            </div>
            {props.image && <img className="sm:p-5" src={props.image}/>}
            {props.image && props.alt && <span className="sr-only">Escudo do CDC</span>}
        </div>
    )
}