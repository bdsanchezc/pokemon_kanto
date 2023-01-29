import { Container, Image, Text } from "@nextui-org/react"

export const NotFavorites = () => {
    return (
        <>
            <Container css={{
                display: 'flex',
                flexDirection: 'column',
                height: 'calc(100vh - 100px)',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center'
            }}>
                <Image 
                    src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' 
                    width={125}
                    alt="No hay favoritos" />
                <Text h1>No hay favoritos</Text>
            </Container>            
        </>
    )
}
