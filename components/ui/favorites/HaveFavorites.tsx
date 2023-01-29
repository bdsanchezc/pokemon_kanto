import { Grid } from "@nextui-org/react"
import { CardFavorites } from ".."

interface Props {
    favorites: number[]
}

export const HaveFavorites = ({favorites}: Props) => {
    return (
        <>
            <Grid.Container gap={2} direction='row' justify='flex-start'>
                {
                    favorites.map( id => (
                        <CardFavorites id={id} key={id}/>
                    ))
                }
            </Grid.Container>
        </>
    )
}
