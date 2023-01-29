import Image from 'next/image';
import { useTheme, Text, Spacer } from '@nextui-org/react'
import Link from 'next/link';


export const Navbar = () => {

    const { theme } = useTheme();

    return (
        <section style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            padding: "0 1.25rem",
            boxShadow: "0 0 28px rgba(38, 102, 251, .35)",
            backgroundColor: theme?.colors.gray200.value
        }}>
            <Link href="/" className='flex-center'>
                <Image src="/poke-logo.png" alt='Pokémon logo' width={150} height={55}/>
                <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt='Ditto' width={75} height={75}/>
            </Link>
            <Spacer css={{flex: 1}}/>
            <Link href="/favorites">
                <Text>Favorites</Text>
            </Link>
        </section>
    )
}
