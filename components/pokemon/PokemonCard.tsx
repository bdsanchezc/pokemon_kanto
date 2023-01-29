import { useRouter } from 'next/router';
import { Card, Grid, Row, Text } from "@nextui-org/react"
import { PokemonsListResponse } from '../../intefaces/pokemon-list';

interface Props {
    pokemon: PokemonsListResponse
}

export const PokemonCard = ({pokemon} : Props) => {

    const router = useRouter();
    const onClick = () => {
        // router.push(`/pokemon/${pokemon.id}`);
        router.push(`/name/${pokemon.name}`);
    }

    return (
        <Grid key={pokemon.id} xs={6} sm={3} md={2} xl={1}>
            <Card isHoverable isPressable onClick={onClick}>
                <Card.Body css={{ p: 1 }}>
                    <Card.Image src={pokemon.image} alt={pokemon.name} width="100%" height={140}/>
                </Card.Body>
                <Card.Footer>
                    <Row justify='space-between'>
                    <Text transform='capitalize'>{`#${pokemon.id} - ${pokemon.name}`}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
