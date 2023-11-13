import React from "react";

class ChildComP extends React.Component {


    // hoang = (items, index) => {
    //     return (
    //         <div key={items.id}>
    //             {items.tittle} - {items.salary}
    //         </div>
    //     )
    // }
    state = {
        show: false,
    }

    clicktoShowHide = () => {
        this.setState(
            {
                show: !this.state.show
            }
        )
    }

    deleteJob = (job) => {
        console.log(job)
        //this.props.deleteJob(job);
    }


    render() {

        let { arrayJobs1 } = this.props;
        console.log(this.props);
        return (
            <>
                {/* <div className={!this.state.show ? 'hide' : ''}> my name is: {name} </div> */}
                {
                    this.state.show ?
                        <div className="datchovui">
                            <div>
                                <button onClick={() => this.clicktoShowHide()}>hide</button>
                            </div>
                            {
                                arrayJobs1.map((items) => {
                                    return (
                                        <div key={items.id}>
                                            {items.title} - {items.salary}
                                            <></> <span onClick={(items) => this.deleteJob(items)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        <div>
                            <button onClick={() => this.clicktoShowHide()}>show</button>
                        </div>
                }
            </>
        )
    }
}

export default ChildComP;