// after login, the actions are:
// if login successful, then we recieve the user details and we use them in home page
// if login failed, then we get user : null again and error true;
// the time in between getting response, isFetching : true;

export const loginStart = (userCredentials) => ({
  // will take userCredentials as param and returns an object.
  type: "LOGIN_START", // name of action
});

export const loginSuccess = (user) => ({
  // param is the user entered in login as an object
  type: "LOGIN_SUCCESS",
  payload: user, // this is the user which will be fetched from database.
});

export const loginFailure = () => {
  return {
    type: "LOGIN_FAILURE",
  };
};

// now in the reducer, according to the action happened, we can update the state.

export const Logout = () => ({
  type: "LOGOUT",
});

export const UpdateStart = (userCredentials) => ({
  type: "UPDATE_START",
});

export const UpdateSuccess = (user) => ({
  type: "UPDATE_SUCCESS",
  payload: user,
});

export const UpdateFailure = () => ({
  type: "UPDATE_FAILURE",
});
