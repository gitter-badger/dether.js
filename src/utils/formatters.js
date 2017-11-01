import Ethers from 'ethers';
import Web3 from 'web3';
import BigNumber from 'bignumber.js';

import { COORD_PRECISION } from '../constants/appConstants';

const web3 = new Web3();

// TODO rename to formatter

/**
 * @ignore
 */
function tellerPosFromContract(rawTellerPos) {
  const tellerPos = {};
  try {
    // TODO more resilient
    // raw : 1234567 -> 1.234567
    tellerPos.lat = rawTellerPos[0] / (10 ** COORD_PRECISION);
    tellerPos.lng = rawTellerPos[1] / (10 ** COORD_PRECISION);
    tellerPos.zoneId = rawTellerPos[2];

    tellerPos.escrowBalance = Ethers.utils.formatEther(rawTellerPos[3]);
  } catch (e) {
    console.error(e);
    throw new TypeError(`Invalid teller position: ${e.message}`);
  }
  return tellerPos;
}

/**
 * @ignore
 */
function tellerProfileFromContract(rawTellerProfile) {
  const tellerProfile = {};

  // TODO more resilient
  try {
    tellerProfile.rates = rawTellerProfile.rates / 100;
    tellerProfile.volumeTrade = Ethers.utils.formatEther(rawTellerProfile.volumeTrade);
    tellerProfile.nbTrade = rawTellerProfile.nbTrade.toNumber();
    tellerProfile.name = web3.toUtf8(rawTellerProfile.name);
    tellerProfile.currencyId = rawTellerProfile.currency;
    tellerProfile.avatarId = rawTellerProfile.avatar;
    tellerProfile.messengerAddr = web3.toUtf8(rawTellerProfile.telAddr);
  } catch (e) {
    console.error(e);
    throw new TypeError(`Invalid teller profile: ${e.message}`);
  }
  return tellerProfile;
}

/**
 * @ignore
 */
function sellPointToContract(rawSellPoint) {
  const sellPoint = {};

  try {
    // 1.234567 -> 1234567
    sellPoint.lat = Math.floor(rawSellPoint.lat.toFixed(COORD_PRECISION + 1) * (10 ** COORD_PRECISION));
    sellPoint.lng = Math.floor(rawSellPoint.lng.toFixed(COORD_PRECISION + 1) * (10 ** COORD_PRECISION));
    sellPoint.zone = rawSellPoint.zone;
    sellPoint.rates = Math.floor(rawSellPoint.rates * 100);
    sellPoint.avatar = rawSellPoint.avatar;
    sellPoint.currency = rawSellPoint.currency;
    sellPoint.telegram = Ethers.utils.toUtf8Bytes(rawSellPoint.telegram);
    sellPoint.username = Ethers.utils.toUtf8Bytes(rawSellPoint.username);
  } catch (e) {
    console.error(e);
    throw new TypeError(`Invalid teller profile: ${e.message}`);
  }
  return sellPoint;
}
export default {
  tellerPosFromContract,
  tellerProfileFromContract,
  sellPointToContract,
};
