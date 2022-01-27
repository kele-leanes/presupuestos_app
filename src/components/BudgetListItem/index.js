import React, { useState } from 'react';
import { List } from 'react-native-paper';
import { BudgetListDialog } from '../BudgetListDialog';

export const BudgetListItem = ({ item, navigation }) => {
  const [visible, setVisible] = useState(false);

  const hideDialog = () => setVisible(false);
  const showDialog = () => setVisible(true);

  return (
    <>
      <List.Item
        title={item.title}
        description={item.client + ' ' + item.date}
        left={props => <List.Icon {...props} icon="file-pdf-outline" />}
        right={props => <List.Icon {...props} icon="chevron-right" />}
        onPress={() => navigation.navigate('Detalles', { title: item.title })}
        onLongPress={showDialog}
      />
      <BudgetListDialog
        visible={visible}
        hideDialog={hideDialog}
        title={item.title}
      />
    </>
  );
};
