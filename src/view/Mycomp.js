import React from "react";
//import ChildcomP from "./ChildcomP";
import ChildComp from "./Childcomp";
import Funcomp from "./Funcomp";

class Mycomp extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        arrayJobs: [
            { id: 'ac1', tittle: 'dev', salary: '120' },
            { id: 'ac2', tittle: 'dev1', salary: '1202' },
            { id: 'ac3', tittle: 'dev2', salary: '1203' }
        ]
    }



    handleOnFirstNameEvent = (event) => {
        this.setState({
            firstName: event.target.value
        })
        console.log(this.state);
    }
    handleOnLastNameEvent = (event) => {
        this.setState({
            lastName: event.target.value
        })
        console.log(this.state);
    }

    handleClick = (event) => {
        event.preventDefault();
        alert('click ok');
        console.log('ok')
    }

    render() {
        //let name = 'hoangabc';
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName}
                        onChange={(event) => this.handleOnFirstNameEvent(event)}
                    /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName}
                        onChange={(event) => this.handleOnLastNameEvent(event)}
                    />
                    <br /><br />
                    <input type="submit" value="Submit"
                        onClick={(event) => this.handleClick(event)}
                    />
                </form>
                <ChildComp arrayJobs1={this.state.arrayJobs} name={this.state.firstName}></ChildComp >
                {/* <Funcomp arrayJobs1={this.state.arrayJobs} name={this.state.firstName} /> */}

            </>
        )
    }
}

export default Mycomp;