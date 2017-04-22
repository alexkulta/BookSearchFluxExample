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
    
    const books = items.map(function(result, index) {
      return (
        <div key={index}>
          <h2>{index+1}. {result.volumeInfo.title}</h2>
          <div>{result.volumeInfo.description}</div>
        </div>
      )
    });

    return (
      <div>
        <ul>
          { books }
        </ul>
      </div>
    );
  }
}

export default ResultList;