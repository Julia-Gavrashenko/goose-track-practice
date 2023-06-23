import * as React from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import { modalStyles } from './styles';
import { UpdateForm } from 'components/UpdateForm/UpdateForm';

const UpdateModal = ({ open, onClose, contactId, contactName, contactNumber }) => {

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyles.wrapper}>
        <UpdateForm onClose={onClose} contactId={contactId} contactName={contactName} contactNumber={contactNumber } />
      </Box>
    </Modal>
  );
};

export default UpdateModal;
