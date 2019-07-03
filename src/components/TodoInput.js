import React from 'react';
import {Button} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class TodoInput extends React.Component{
  

    render(){

        const{item,handleItem,handleChange,handleSubmit,editItem,handleSearch,ClickSearch,
        startDate,endDate,handleChangeStart,handleChangeEnd,DateSearch,Sort,SortAlpha}=this.props
        return(
            <div>
            <div className="card card-body my-3">
                <h3 className="text-capitalize text-center">Todo Input</h3>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"/>
                            </div>
                        </div>
                    <input type="text" className="form-control"
                        placeholder="Add a todo item"
                        value={this.props.name}
                        onChange={handleItem}/>
                     <input type="text" className="form-control"
                        placeholder="Description"
                        value={this.props.title}
                        onChange={handleChange}/>
                    </div>
                    <Button type="submit" className={
                        editItem 
                        ? "btn btn-block btn-success mt-3":
                        "btn btn-block btn-primary mt-3"
                    }>
                       {editItem ? "Edit Item": "Add Item"}</Button>

                    <div className="input-group">
                <input type="text" className="form-control"
                    placeholder="Search in the list.."
                    onChange={handleSearch}/>
                <Button onClick={ClickSearch} className={
                    "btn btn-block btn-primary mt-3"
                }>
                   Search</Button>
                   </div>
                </form>
            </div>
            
            <Button onClick={Sort} className={
                    "btn btn-block btn-primary mt-3"
                }>
                   Order by Date and Time</Button>
                   <Button onClick={SortAlpha} className={
                    "btn btn-block btn-primary mt-3"
                }>
                   Order by Item</Button>
                   <DatePicker
                    selected={startDate}
                    selectsStart
                     startDate={startDate}
                     onChange={handleChangeStart}
                        />
                   
                <Button className={
                    "btn btn-block btn-primary mt-3"}
                    onClick={()=> DateSearch(startDate)}>Search</Button> 
            </div>
        );
    }
}