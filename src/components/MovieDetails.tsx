import React from 'react';
import {FlatList, Text, View} from 'react-native';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';

import {MovieFull} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterfaces';
import {CastItem} from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{flexDirection: 'row'}}>
        <Icon name="star-outline" size={16} color="grey" />
        <Text>{movieFull.vote_average}</Text>

        <Text> - {movieFull.genres.map(g => g.name).join(', ')}</Text>
      </View>

      {/* Sinopsis */}
      <Text style={{marginTop: 12, fontSize: 23, fontWeight: 'bold'}}>
        Sinopsis
      </Text>
      <Text style={{fontSize: 16}}>{movieFull.overview}</Text>

      {/* Presupuesto */}
      <Text style={{marginTop: 12, fontSize: 23, fontWeight: 'bold'}}>
        Presupuesto
      </Text>
      <Text style={{fontSize: 18}}>
        {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
      </Text>

      {/* Casting */}
      <View style={{marginTop: 12, marginBottom: 100}}>
        <Text style={{fontSize: 23, fontWeight: 'bold'}}>Reparto</Text>

        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{height: 80}}
        />
      </View>
    </>
  );
};
