import { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";

import { Button, Card, Container, Grid, Text } from "@nextui-org/react";
import confetti from "canvas-confetti";

import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon, PokemonsListResponse } from "../../intefaces";
import { existInFavorites, toggleFavorite } from "../../utils";

interface Props {
    pokemon: Pokemon
}

const PokemonNamePage: NextPage<Props> = ({pokemon}: Props) => {  

    const [isFavorite, setIsFavorite] = useState( false );

    const onToggleFavorite = () => {
        toggleFavorite(pokemon.id);
        setIsFavorite(!isFavorite);

        if(!isFavorite) {
            confetti({
                zIndex: 999,
                particleCount: 100,
                spread: 160,
                angle: -100,
                origin: {
                    x: 1,
                    y: 0
                }
            })
        }
    }

    useEffect(() => {
        setIsFavorite(existInFavorites(pokemon.id));
    }, [pokemon.id])
    
        
    return (
        <Layout title={`Pokémon - ${pokemon.name}`}>
            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{padding: '30px'}}>
                        <Card.Body>
                            <Card.Image 
                                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                                alt={pokemon.name}
                                width="100%"
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
                            <Text h1 transform="capitalize">{pokemon.name}</Text>
                            <Button 
                                color="gradient" 
                                ghost={!isFavorite}
                                onPress={onToggleFavorite}>
                                    {
                                        (isFavorite)
                                            ? 'Eliminar de favoritos'
                                            : 'Guardar en favoritos'
                                    }
                                </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites</Text>
                            <Container direction="row" display="flex" gap={0}>
                                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={160} height={160}/>
                                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={160} height={160}/>
                                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={160} height={160}/>
                                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={160} height={160}/>
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>

            </Grid.Container>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    
    const { data } = await pokeApi.get('/pokemon?limit=151');
    const pokemonNames: string[] = data.results.map((pokemon:PokemonsListResponse) => pokemon.name);

    return {
        paths: pokemonNames.map( name => ({
            params: { name }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const { name } = params as {name: string};
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`);
 
    return {
        props: {
            pokemon: data
        }
    }
}

export default PokemonNamePage;