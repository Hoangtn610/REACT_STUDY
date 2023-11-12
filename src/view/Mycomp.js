import React from "react";

import ChildComp from "./Childcomp";
import AddComponent from "./AddComponent";
//import Funcomp from "./Funcomp";


class Mycomp extends React.Component {

    addJob = (job) => {
        this.setState(
            {
                arrayJobs: [...this.state.arrayJobs, job],
            }

        )

    }
    state = {
        arrayJobs: [
            { id: 'ac1', title: 'dev', salary: '120' },
            { id: 'ac2', title: 'dev1', salary: '1202' },
            { id: 'ac3', title: 'dev2', salary: '1203' }
        ]
    }
    render() {
        //let name = 'hoangabc';
        return (
            <>
                <AddComponent addJob={this.addJob}></AddComponent>

                <ChildComp arrayJobs1={this.state.arrayJobs}></ChildComp >
                {/* <Funcomp arrayJobs1={this.state.arrayJobs} name={this.state.firstName} /> */}

            </>
        )
    }
}

export default Mycomp;