export const validateSellPoint = (teller) => {
  if (!teller.lat || Number.isNaN(teller.lat) || teller.lat > 90 || teller.lat < -90) {
    return { error: true, msg: 'Invalid latitude' };
  }
  if (!teller.lng || Number.isNaN(teller.lng) || teller.lng > 180 || teller.lng < -180) {
    return { error: true, msg: 'Invalid longitude' };
  }
  if (!teller.zone || !Number.isInteger(teller.zone)) {
    return { error: true, msg: 'Invalid zone' };
  }
  if (!teller.rates || teller.rates <= 0 || teller.rates > 100) {
    return { error: true, msg: 'Invalid rates' };
  }
  if (!teller.avatar || !Number.isInteger(teller.avatar) || teller.avatar < 0) {
    return { error: true, msg: 'Invalid avatar' };
  }
  if (!teller.currency || !Number.isInteger(teller.currency) || teller.currency < 0) {
    return { error: true, msg: 'Invalid currency' };
  }
  if (!teller.telegram || teller.telegram.length < 3 || teller.telegram.length > 30) {
    return { error: true, msg: 'Invalid telegram' };
  }
  if (!teller.amount || Number.isNaN(teller.amount) || teller.amount < 0.01) {
    return { error: true, msg: 'Invalid amount' };
  }
  if (!teller.username || teller.username.length < 3 || teller.username.length > 30) {
    return { error: true, msg: 'Invalid username' };
  }
  if (!teller.keystore) {
    return { error: true, msg: 'Invalid keystore' };
  }
  if (!teller.password || teller.password.length < 1) {
    return { error: true, msg: 'Invalid password' };
  }
  if (!teller.providerUrl) {
    return { error: true, msg: 'Invalid provider url' };
  }
  // if (!teller.gasPrice || teller.gasPrice < 0) {
  //   return { error: true, msg: 'Invalid gas Price' };
  // }
  return {};
};

export const validateSendCoin = (tsx) => {
  if (!tsx.receiver) {
    return { error: true, msg: 'Invalid receiver' };
  }
  if (!tsx.amount || Number.isNaN(tsx.amount) || tsx.amount < 0.001) {
    return { error: true, msg: 'Invalid amount' };
  }
  if (!tsx.password || (typeof tsx.password) !== 'string' || tsx.password.length < 1) {
    return { error: true, msg: 'Invalid password' };
  }
  return {};
};

export const validatePassword = (password) => {
  if (!password || (typeof password) !== 'string' || password.length < 1) {
    return { error: true, msg: 'Invalid password' };
  }
  return {};
};
