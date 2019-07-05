import React from 'react';
import {Table} from 'react-bootstrap';

export default class TodoItem extends React.Component{
    render(){
        const {name,title,handleDelete,handleEdit,date}= this.props
        return(
            <tr>
                <td>
                    <li className="list-group-item text-capitalize  d-flex justify-content-between">
                    <h6>{name}</h6></li> 
                </td>
                <td>
                    <li className="list-group-item text-capitalize  d-flex justify-content-between ">
                    <h6>{date}</h6></li>
                </td>
                <td>
                    <li className="list-group-item text-capitalize  d-flex justify-content-between ">
                    <h6>{title}</h6>
                    <div className="todo-item">
                        <span className="text-success" onClick={handleEdit}>
                            <i className="fas fa-pen"></i>
                        </span>
                        <span className=" text-danger " onClick={handleDelete}>
                            <i className="fa fa-times pl-2"></i>
                        </span>
                    </div>
                    </li>
                </td>
            </tr>   
        );
    }
}
