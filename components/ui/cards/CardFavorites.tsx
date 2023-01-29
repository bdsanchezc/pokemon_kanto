import { useRouter } from 'next/router';
import { Card, Grid } from "@nextui-org/react"

interface Props {
    id: number
}

export const CardFavorites = ({id}: Props) => {

    const router = useRouter();

    const onPressCard = () => {
        router.push(`/pokemon/${id}`);       
    }

    return (
        <>
            <Grid xs={6} sm={3} md={2} lg={1} key={id}>
                <Card
                    isPressable
                    isHoverable
                    onPress={onPressCard}
                    css={{padding: 10}}>
                    <Card.Image 
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        width={'100%'}
                        height={140}
                    />
                </Card>
            </Grid>
        </>
    )
}
