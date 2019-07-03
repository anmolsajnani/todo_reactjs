import React from 'react';
import TodoItem from './TodoItem';
export default class TodoList extends React.Component{
    render(){
        const {items,clearList,handleDelete,handleEdit,searcheditems,isSearch} = this.props
        return(
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">Todo List</h3>
{isSearch ?

    <div>
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
}</div>
:
<div>
{
    searcheditems.map(item=>{
        return(<TodoItem 
            key={item.id}
            name={item.name} 
            title={item.title}
            date={item.date}
            handleDelete={()=>handleDelete(item.id)}
            handleEdit={()=>handleEdit(item.id)}
            />)
    })
}</div>}


                
                <button type="button" 
                className="btn btn-danger btn-block text-capitalize mt-5"
                onClick={clearList}>
                    clear list
                </button>
            </ul>
        );
    }
}