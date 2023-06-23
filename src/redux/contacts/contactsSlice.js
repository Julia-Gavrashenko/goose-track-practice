import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './contactsOperations';
import { logOut } from 'redux/auth/authOperarions';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, handlePending);
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    });
    builder.addCase(fetchContacts.rejected, handleRejected);

    builder.addCase(addContact.pending, handlePending);
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    });
    builder.addCase(addContact.rejected, handleRejected);

    builder.addCase(deleteContact.pending, handlePending);
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items.splice(index, 1);
    });
    builder.addCase(deleteContact.rejected, handleRejected);

    builder.addCase(updateContact.pending, handlePending);
    builder.addCase(updateContact.rejected, handleRejected);
    builder.addCase(updateContact.fulfilled, (state, action) => {
      const updItemIndx = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items.splice(updItemIndx, 1, action.payload);
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(logOut.fulfilled, (state, action) => {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    });
  },
});

export const contactsReducer = contactsSlice.reducer;
