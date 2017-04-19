//BookStore.js
import {EventEmitter} from 'events';
import _ from 'lodash';
import 'whatwg-fetch'

const whatwgFetch = self.fetch
const url_search = 'https://www.googleapis.com/books/v1/volumes?q=';

let BookStore = _.extend({}, EventEmitter.prototype, {
  items: [],
// Get all items
  getItems: function(){
    return this.items;
  },
 // Get all items
  seachFunc: function(text_search){
    console.log(text_search);
    let resultJson ;
    var _this = this;
        whatwgFetch(url_search+text_search)
            .then(function(response) {
                    return response.json()
            }).then(function(json) {
                    console.log(json);
                    _this.items = json.items;
                    BookStore.emitChange();
             }).catch(function(ex) {
                    console.error(ex);
        })
      ;
      
      
  },
 // Add change listener
  addChangeListener: function(callback){
    this.on('change', callback);
  },

 // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },

  // Emit Change event
  emitChange: function(){
    this.emit('change');
  },

});

export default BookStore;