//ResultList.jsx
import React from 'react';
import BookStore from '../stores/BookStore';

//Method to retrieve state from stores
let getListState = () => {
  return {
    items: BookStore.getItems()
  };
}

class ResultList extends React.Component{

_onChange() {
    this.setState(getListState());
  }

 constructor() {
    super();
    this.state = getListState();
  }

  // Add change listeners to stores
  componentDidMount() {
    BookStore.addChangeListener(this._onChange.bind(this));
  }

 // Remove change listeners from stores
  componentWillUnmount() {
    BookStore.removeChangeListener(this._onChange.bind(this));
  }

    render(){
        let _this = this;

   let items = _this.state.items;
    
   let itemHtml ='';
      
        for (var i = 0; i < items.length; i++) { 
             itemHtml += items[i].volumeInfo.title + '\t' + items[i].volumeInfo.description;
             itemHtml += '<BR>';
        }

    return (
      <div>
        <ul>
          { itemHtml }
        </ul>
      </div>
    );
  }
}

export default ResultList;