import React from 'react';
import { DataTable } from 'react-native-paper';

export const DetailBudgetScreen = () => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Producto</DataTable.Title>
        <DataTable.Title numeric>Cant</DataTable.Title>
        <DataTable.Title numeric>Subtotal</DataTable.Title>
        <DataTable.Title numeric>Total</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>100</DataTable.Cell>
        <DataTable.Cell numeric>15900</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>100</DataTable.Cell>
        <DataTable.Cell numeric>15900</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};
