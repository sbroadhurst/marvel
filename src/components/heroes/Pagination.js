import React from 'react';
import '../Boxes.css'
import GridSheet from './GridSheet'

class Pagination extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            currentPage: 1,
            todosPerPage: 100
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {

        this.setState({
            currentPage: Number(event.target.id),
        })
        this.props.select(Number(event.target.id))

    }

    componentWillMount() {
        this.setState({ todos: this.props.todos })
    }



    render() {
        // console.log(this.props.todos)
        // const { currentPage, todosPerPage } = this.state;
        const { todos } = this.props
        // console.log(todos)
        // const indexOfLastTodo = currentPage * todosPerPage;
        // const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        // const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
        // console.log('xxxx', currentTodos)

        //console.log(currentTodos)
        const renderTodos = <GridSheet info={todos} />;

        //  displaying page numbers
        const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        // for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
        //     pageNumbers.push(i);
        // }

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
