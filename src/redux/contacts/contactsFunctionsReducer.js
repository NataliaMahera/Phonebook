export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilledGet = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contactItems = payload; // Оновлення списку контактів у стані
};

export const handleFulfilledAdd = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contactItems = [payload, ...state.contactItems]; // Dо існуючих контактів додаємо новий який приходить з запиту
};

export const handleFulfilledDelete = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contactItems = state.contactItems.filter(({ id }) => id !== payload.id);
};

export const handleFulfilledUpdate = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const index = state.contactItems.findIndex(({ id }) => id === payload.id);
  state.contactItems.splice(index, 1, payload);
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
