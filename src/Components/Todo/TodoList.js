import React ,{useState} from 'react';

import Todo from './Todo'

function TodoList(props) {

    const [statusdone,setdone]=useState(false);

    let { todos } = props
    let filterTodos = todos.filter(item => item.done === statusdone)
    

    return (
        <>
            <nav className="col-6 mb-3">

                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className={`nav-item nav-link  font-weight-bold ${statusdone === false ? 'active' : ''}`} id="nav-home-tab" onClick={() => setdone(false)}>undone <span className="badge badge-secondary">{todos.filter(item => item.done === false).length}</span></a>
                    <a className={`nav-item nav-link  font-weight-bold ${statusdone === true ? 'active' : ''}`} id="nav-home-tab" onClick={() => setdone(true)}>done <span className="badge badge-success">{todos.filter(item => item.done === true).length}</span></a>
                </div>
            </nav>
            {
                filterTodos.length === 0
                    ? <p>empty</p>
                    : filterTodos.map(item => <Todo
                        key={item.key}
                        item={item}
                        delete={props.delete}
                        done={props.done}
                        edit={props.edit} />)
            }
        </>


    )

}



export default (TodoList);