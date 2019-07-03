import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";


export default class App extends React.Component{
  state={
    items:[],
    searcheditems:[],
    filtereditems:[],
    id:uuid(),
    name: '',
    item:'',
    editItem: false,
    search: '',
    isOldestFirst: false,
    startDate: new Date("2019/07/03"),
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
      });, endDate 
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
  handleDate = ({ startDate}) => {
    startDate = startDate || this.state.startDate;
    this.setState({ startDate});
  };, endDate 

  handleChangeStart = startDate => this.handleDate({ startDate });

 
  

  Sort =()=> {
    const items = this.state.items
    let newItemList = items
    debugger
    items.sort((a, b) => {
      var x = a.date;
      var y = b.date;
      if (x < y) {return -1;}
      if (x > y) {return 1;}
     

    })
    
    this.setState({
    isOldestFirst: !this.state.isOldestFirst,
    items
  })}
  SortAlpha=()=> {
    const items = this.state.items
    let newItemList = items
    debugger
    items.sort((a, b) => {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      
      if (x < y) {return -1;}
      if (x > y) {return 1;}, endDate 
     

    })
    
    
    this.setState({
    isOldestFirst: !this.state.isOldestFirst,
    items
    })
  }
  DateSearch=(startdate)=>{
    console.log("his")
    const filtereditems = this.state.items.filter(item=>
      item.date==startdate);
      console.log(filtereditems)
  }
  render(){
    console.log("item ",this.state.items)

      return(
        <div className="container">
          <div className="row">
            <div classname="col-10 mx-auto col-md-8 mt-4">
              <h3 classname="text-capitalize text-center">
                <TodoInput item={this.state.item}
                handleItem={this.handleItem} 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
                handleSearch={this.handleSearch}
                ClickSearch={this.ClickSearch}
                startDate={this.state.startDate}
                handleChangeStart={this.handleChangeStart}
                title={this.state.title}
                name={this.state.name}
                Sort={this.Sort}
                SortAlpha={this.SortAlpha}
                DateSearch={this.DateSearch}
                
                />
                
                <TodoList items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                searcheditems={this.state.searcheditems}
                isSearch={this.state.isSearch}
                />
              </h3>
            </div>
          </div>

        </div>
      );
  }
}

