import { GetStaticProps } from 'next'
import { Grid } from "@nextui-org/react";

import { pokeApi } from '../api';
import { PokemonsListResponse } from '../intefaces';
import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons: PokemonsListResponse[]
}

export default function Home({pokemons} : Props) {
    
  return (
    <Layout title='Pokémon List'>
      <Grid.Container gap={2} justify="flex-start">
        {
          pokemons.map( pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {data} = await pokeApi.get('/pokemon?limit=151');
  
  const pokemons : PokemonsListResponse[] = data.results.map( (pokemon: PokemonsListResponse, index: number) => {
    const id = index + 1;

    return {
      ...pokemon,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
      id
    }
  })

  return {
    props: { pokemons }
  }
}