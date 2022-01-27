import React from 'react';
import { FlatList } from 'react-native';
import { BudgetListItem } from '../../components/BudgetListItem';

const DATA = [
  {
    title: 'Presupuesto 01',
    client: 'Campo Perez garcia',
    date: '22/2/2022',
  },
  {
    title: 'Presupuesto 02',
    client: 'Taller Rivadavia',
    date: '22/2/2022',
  },
  {
    title: 'Presupuesto 03',
    client: 'Rodriguez',
    date: '22/2/2022',
  },
];

export const BudgetsScreen = navigation => {
  const RenderItem = item => {
    return <BudgetListItem {...item} {...navigation} />;
  };
  return <FlatList data={DATA} renderItem={RenderItem} />;
};
