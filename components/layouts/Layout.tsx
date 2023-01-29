import Head from "next/head"
import { Navbar } from '../ui';

interface Props {
    children: JSX.Element | JSX.Element[]
    title?: string,
}

export const Layout = ({children, title} : Props) => {
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Bryan Sanchez" />
                <meta name="description" content={`Information about pokémons ${title}`} />
                <meta name="keywords" content={`pokemon, pokedex, pokemons, ${title}`} />
            </Head>

            <Navbar />
            <main style={{
                padding: "0 1.25rem"
            }}>
                {children}
            </main>
        </>
    )
}
