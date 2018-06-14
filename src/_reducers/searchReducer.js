import {searchConstants} from '../_constants';

export function search(state = {}, action) {
    switch (action.type) {
      case searchConstants.SEARCH_REQUEST:
        return {
          loading: true
        };
      case searchConstants.SEARCH_SUCCESS:
        return {
          gifs: action.gifs
        };
      case searchConstants.SEARCH_FAILURE:
        return { 
          error: action.error
        };
      default:
        return state
    }
  }

