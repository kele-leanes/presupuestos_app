import React from 'react';
import { Dialog, Portal, Button, List } from 'react-native-paper';

export const BudgetListDialog = ({
  id,
  title,
  onPressDelete,
  onPressEdit,
  visible,
  hideDialog,
}) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <List.Item
            title={'Editar'}
            left={props => <List.Icon {...props} icon="file-edit-outline" />}
          />
          <List.Item
            title={'Eliminar'}
            left={props => <List.Icon {...props} icon="trash-can-outline" />}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancelar</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};
