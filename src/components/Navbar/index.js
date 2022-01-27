import React from 'react';
import { BottomNavigation, Text, useTheme } from 'react-native-paper';
import { BudgetStack } from '../../screens/home';

const BudgetRoute = () => <BudgetStack />;

const ProductsRoute = () => <Text>Productos</Text>;

const SettingsRoute = () => <Text>Ajustes</Text>;

export const Navbar = () => {
  const { colors } = useTheme();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'budget', title: 'Presupuestos', icon: 'folder-open' },
    { key: 'products', title: 'Productos', icon: 'format-list-bulleted' },
    { key: 'settings', title: 'Ajustes', icon: 'cellphone-settings' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    budget: BudgetRoute,
    products: ProductsRoute,
    settings: SettingsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: '#FFFFFF' }}
      activeColor={colors.primary}
    />
  );
};
