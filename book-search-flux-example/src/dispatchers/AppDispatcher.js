import {Dispatcher} from 'flux';
let AppDispatcher = new Dispatcher();

import BookStore from '../stores/BookStore';

// Register callback with AppDispatcher
AppDispatcher.register((action) => {

 let actionId = action.actionId;
  let text_search_value = action.search_text;

 switch(actionId) {

   // Respond to search action
    case 'search':
      BookStore.seachFunc(text_search_value);
      break;

   default:
      return true;
  }

 return true;

});

export default AppDispatcher;