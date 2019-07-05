import React from "react";
import './App.css'
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";


export default class App extends React.Component{
  state={
    items:[],
    searcheditems:[],
    id:uuid(),
    name: '',
    item:'',
    editItem: false,
    search: '',
    isSearch:true
  }
  handleItem=(e)=>{
    this.setState({
      name:e.target.value
    });
  };
  handleChange=(e)=>{
    this.setState({
      title:e.target.value
    });
  };
  handleSubmit=(e)=>{
    e.preventDefault();

    const newItem={
      id: this.state.id,
      name: this.state.name,
      title:this.state.title,
      date: new Date().toLocaleString()
    }
    const updatedItems = [...this.state.items,newItem]
    
    this.setState({
      items:updatedItems,
      item:'',
      name:'',
      title:'',
      id:uuid(),
      editItem: false
    })
  
  };
  clearList=()=>{
    this.setState({
      items:[]
    })
  };
  handleDelete = (id)=>{
    const filtereditems = this.state.items.filter(item=>
      item.id!==id);
      this.setState({
        items:filtereditems
      });
  };
  handleEdit = (id)=>{ 
    const filtereditems = this.state.items.filter(item=>
      item.id!==id);

    const selectedItem = this.state.items.find(item=> item.id===id);
      this.setState({
        items:filtereditems,
        title: selectedItem.title,
        name: selectedItem.name,
        editItem: true,
        id:id,
      });
  };
  handleSearch = (e)=>{
    this.setState({search: e.target.value});
    
  }
  ClickSearch = () =>{
     const filtereditems = this.state.items.filter(
      (item) => {
          return item.name.charAt(0).toLowerCase().indexOf(
          this.state.search.toLowerCase()) !== -1;
      }
          
    );
    this.setState({
      searcheditems: filtereditems,
      isSearch: false
    });
  }
  SortAscDate =()=> {
    const items = this.state.items
    items.sort((a, b) => {
      var x = a.date;
      var y = b.date;
      if (x < y) {return -1;}
      if (x > y) {return 1;}
    })
    this.setState({
    items
  })}
  SortDesDate =()=> {
    const items = this.state.items
    items.sort((a, b) => {
      var x = a.date;
      var y = b.date;
      if (x < y) {return 1;}
      if (x > y) {return -1;}
    })
    this.setState({
    items
  })}
  SortAlphaAsc=()=> {
    const items = this.state.items
    items.sort((a, b) => {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      
      if (x < y) {return -1;}
      if (x > y) {return 1;}
    })
    this.setState({
    items
    })
  }
  SortAlphaDes=()=> {
    const items = this.state.items
    items.sort((a, b) => {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      
      if (x < y) {return 1;}
      if (x > y) {return -1;}
    })
    this.setState({
    items
    })
  }
 
  render(){
      return(
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
                <TodoInput item={this.state.item}
                handleItem={this.handleItem} 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
                handleSearch={this.handleSearch}
                ClickSearch={this.ClickSearch}
                title={this.state.title}
                name={this.state.name}
                ClearList={this.clearList}/>

                <TodoList items={this.state.items}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                searcheditems={this.state.searcheditems}
                isSearch={this.state.isSearch}
                SortAscDate={this.SortAscDate}
                SortDesDate={this.SortDesDate}
                SortAlphaAsc={this.SortAlphaAsc}
                SortAlphaDes={this.SortAlphaDes}/> 
            </div>
          </div>

        </div>
      );
  }
}


