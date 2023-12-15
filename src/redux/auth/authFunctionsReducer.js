export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
  state.isRefreshing = true;
};
export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  state.isRefreshing = false;
};
export const handleFulfilledRegister = (state, { payload }) => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.token = payload.token;
  state.user = payload.user;
  state.error = null;
};

export const handleFulfilledLogin = (state, { payload }) => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.token = payload.token;
  state.user = payload.user;
  state.error = null;
};

export const handleFulfilledLogout = (state, { payload }) => {
  state.isLoading = false;
  state.isLoggedIn = false;
  state.token = null;
  state.user = { name: null, email: null };
  state.error = null;
};

export const handleFulfilledRefresh = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = null;
};
