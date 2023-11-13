import React from 'react';

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }

    handleOnTitleEvent = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleOnSalaryEvent = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        if (this.state.title === "" || this.state.salary === "") {
            alert("please input")
            return;
        }
        this.props.addJob({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
            salary: this.state.salary,
        });
        this.setState({
            title: '',
            salary: '',
        }
        );
        console.log(this.state)
    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">job'Title:</label><br />
                    <input type="text" value={this.state.title}
                        onChange={(event) => this.handleOnTitleEvent(event)}
                    /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input type="text" value={this.state.salary}
                        onChange={(event) => this.handleOnSalaryEvent(event)}
                    />
                    <br />
                    <input type="submit" value="Submit"
                        onClick={(event) => this.handleClick(event)}
                    />
                </form>
            </>
        )


    }
}
export default AddComponent;