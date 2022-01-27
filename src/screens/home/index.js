import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BudgetsScreen } from '../budgets';
import { DetailBudgetScreen } from '../details';

const Stack = createNativeStackNavigator();

export const BudgetStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Presupuestos" component={BudgetsScreen} />
      <Stack.Screen
        name="Detalles"
        component={DetailBudgetScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
};
