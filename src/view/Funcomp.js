import React from 'react'
const Funcomp = (props) => {

    let { name, arrayJobs1 } = props;
    return (
        <>
            <div> my name is: {name} </div>
            <div>
                {
                    arrayJobs1.map((items, index) => {
                        return (
                            <div key={items.id}>
                                {items.tittle} - {items.salary}
                            </div>
                        )
                    })
                    // arrayJobs1.map((items, index) => this.hoang(items, index))
                }
            </div>
        </>
    )

}
export default Funcomp;