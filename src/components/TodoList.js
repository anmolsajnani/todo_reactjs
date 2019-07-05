import React from 'react';
import TodoItem from './TodoItem';
import {Table} from 'react-bootstrap';
export default class TodoList extends React.Component{
    render(){
        const {items,handleDelete,handleEdit,searcheditems,isSearch} = this.props
        return(
            <ul className="list-group my-5">
            <Table bordered>
            <thead>
              <tr>
                    <th>
                        <li className="list-group-item justify-content-between" >Item
                        {<i onClick={this.props.SortAlphaAsc} class="fa fa-sort-alpha-asc pl-2" aria-hidden="true"></i>}
                        {<i onClick={this.props.SortAlphaDes} class="fa fa-sort-alpha-desc" aria-hidden="true"></i>}
                        </li>
                    </th>
                    <th>
                        <li className="list-group-item justify-content-between ">Date
                        {<i onClick={this.props.SortAscDate} class="fa fa-sort-numeric-asc pl-2" aria-hidden="true"></i>}
                        {<i  onClick={this.props.SortDesDate} class="fa fa-sort-numeric-desc" aria-hidden="true"></i>}
                        </li>
                    </th>
                    <th>
                        <li className="list-group-item justify-content-between ">Description</li>
                    </th>
                </tr>   
            </thead>  

            {isSearch ?

                <tbody>     
                    {items.map(item=>{
                        return(<TodoItem 
                                key={item.id}
                                name={item.name} 
                                title={item.title}
                                date={item.date}
                                handleDelete={()=>handleDelete(item.id)}
                                handleEdit={()=>handleEdit(item.id)}
                                />)
                        })
                    }
                </tbody>
                :
                <tbody>
                    {searcheditems.map(item=>{
                        return(<TodoItem 
                            key={item.id}
                            name={item.name} 
                            title={item.title}
                            date={item.date}
                            handleDelete={()=>handleDelete(item.id)}
                            handleEdit={()=>handleEdit(item.id)}
                            />)
                    })
                    }
                </tbody>
                }
             </Table>
            </ul>
        );
    }
}
