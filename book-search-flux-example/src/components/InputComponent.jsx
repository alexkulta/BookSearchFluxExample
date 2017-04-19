//InputComponent.jsx
import React from 'react';
import AppDispatcher from '../dispatchers/AppDispatcher';

class InputComponent extends React.Component{

    sendSearch(e){
    
    // so we don't reload the page
    e.preventDefault();
    
    // this gets the value from the input
    let text_search_value = this.refs.item_title.value.trim();
    //React.findDOMNode(this.refs.item_title).value.trim();
    
    // this removes the value from the input
    this.refs.item_title.value = '';
   // React.findDOMNode(this.refs.item_title).value = '';
    
    // This is where the magic happens, 
    // no need to shoot this action all the way to the root of your application to edit state.
    // AppDispatcher does this for you.
    AppDispatcher.dispatch({
      actionId: 'search',
      search_text: text_search_value
    });
  }

    render(){
    return <form onSubmit={ this.sendSearch.bind(this) }>
        <input type="text" ref="item_title"/>
        <button>Search</button>
      </form>
  }
}

export default InputComponent;