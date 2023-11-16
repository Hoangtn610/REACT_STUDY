import React from "react";
// import { useParams } from "react-router-dom";
// import { withRouter } from "react-router";
class Detail extends React.Component {
  componentDidMount = () => {
    // let { id } = useParams();
    // console.log(id);
  };

  render() {
    const { studentId } = this.props.match.params;
    return (
      <>
        <div>tao la detail</div>
      </>
    );
  }
}
export default Detail;
