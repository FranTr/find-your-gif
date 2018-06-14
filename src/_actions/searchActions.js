import { searchConstants } from "../_constants";
import { searchService } from "../_services";

export const searchActions = {
    search    
  };

  function search(words, limit, lang) {
    return dispatch => {

      dispatch(request({words}));
  
      searchService.create(words,limit,lang).then(
        gifs => {
          dispatch(success(gifs));
          debugger;
        },
        error => {
          dispatch(failure(error));
        }
      );
    };
  
    function request(gifs) {
      return { type: searchConstants.SEARCH_REQUEST, gifs };
    }
    function success(gifs) {
      return { type: searchConstants.SEARCH_SUCCESS, gifs };
    }
    function failure(error) {
      return { type: searchConstants.SEARCH_FAILURE, error };
    }
  }