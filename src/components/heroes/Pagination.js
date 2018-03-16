import React from 'react';
import '../Boxes.css'
import GridSheet from './GridSheet'

class Pagination extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            currentPage: 1,
            todosPerPage: 3
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        })
    }

    componentWillMount() {
        this.setState({ todos: this.props.todos })
    }



    render() {
        const { todos, currentPage, todosPerPage } = this.state;
        console.log(this.props)
        //  displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
        console.log(currentTodos)
        const renderTodos = <GridSheet info={currentTodos} />;

        //  displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            )
        })

        return (
            <div>
                <ul>
                    {renderTodos}
                </ul>
                <ul id="page-numbers">
                    {renderPageNumbers}
                </ul>
            </div>
        )
    }
}

export default Pagination;
