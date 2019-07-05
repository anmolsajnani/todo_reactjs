import React from 'react';
import {Button} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class TodoInput extends React.Component{
  
    render(){
        const{item,handleItem,handleChange,handleSubmit,editItem}=this.props
        return(
            <div className={"input_group_header"}>
           
                <form onSubmit={handleSubmit}>
                    <div className="input-group">  
                        <input type="text" className="form-control form-control-sm "
                            placeholder="Add a todo item"
                            value={this.props.name}
                            onChange={handleItem}/>
                        <input type="text" className="form-control form-control-sm"
                            placeholder="Description"
                            value={this.props.title}
                            onChange={handleChange}/>
                            
                            {editItem ? 
                            <div className="input-group-prepend">
                                <div className={
                                    "input-group-text bg-success text-white"}>
                                <i onClick={handleSubmit} class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                </div>
                            </div>
                            :
                            <div className="input-group-prepend">
                                <div className={
                                    "input-group-text bg-primary text-white"}>
                                <i onClick={handleSubmit} class=" fa fa-save" aria-hidden="true"></i>
                                </div>
                            </div>
                            }
                    </div>
                    
                    <div className="input-group">
                        <input class="form-control form-control-sm  w-75 pt-10" type="text" placeholder="Search"
                        onChange={this.props.handleSearch} aria-label="Search"/>
                        <a class="btn btn-primary btn-sm" onClick={this.props.ClickSearch}>
                            <i class="fas fa-search" aria-hidden="true"></i>
                        </a>
                        <a class="btn btn-danger btn-sm" onClick={this.props.ClearList}>
                            <i class="fa fa-trash-o"></i> Delete
                        </a>
                    </div>
                </form>
            </div>
        );
    }
}
