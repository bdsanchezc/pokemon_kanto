
import { useEffect, useState } from 'react'

import { Layout } from '../../components/layouts'
import { NotFavorites, HaveFavorites } from '../../components/ui'
import { pokemons } from '../../utils';

const Favorites = () => {

    const [favorites, setFavorites] = useState<number[]>([]);

    useEffect(() => {
        setFavorites(pokemons());
    }, [])
    
    return (
        <Layout title='Favorites'>
            {
                (favorites.length === 0)
                    ? <NotFavorites />
                    : <HaveFavorites favorites={favorites} />
            }                   
        </Layout>
    )
}

export default Favorites