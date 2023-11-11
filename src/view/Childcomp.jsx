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

    render() {

        let { name, arrayJobs1 } = this.props;
        console.log(this.props);
        return (
            <>
                <div> my name is: {name} </div>
                <div>
                    <button onClick={() => this.clicktoShowHide()}>show</button>
                </div>

                <div>
                    <button onClick={() => this.clicktoShowHide()}> hide</button>
                </div>
                {

                    // this.state.show ?
                    //     arrayJobs1.map((items) => {
                    //         return (
                    //             <div key={items.id}>
                    //                 {items.tittle} - {items.salary}
                    //             </div>
                    //         )
                    //     })
                    //     // arrayJobs1.map((items, index) => this.hoang(items, index))
                    //     : null
                }
            </>
        )
    }
}

export default ChildComP;