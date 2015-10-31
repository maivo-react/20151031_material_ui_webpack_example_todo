import fetch from 'isomorphic-fetch';
//
export const SELECT_CHANNEL = 'SELECT_CHANNEL';

export function selectChannel(channel) {
  return {
    type: SELECT_CHANNEL,
    channel,
  };
}
