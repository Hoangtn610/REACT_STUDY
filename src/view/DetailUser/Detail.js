import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
class Detail extends React.Component {
  state = {
    id: "",
    data: {},
  };
  back = () => {
    this.props.history.push(`/listUser`);
  };
  componentDidMount = async () => {
    console.log("la tao day", this.props.match.params);
    let id = this.props.match.params.id;
    var detailU = await axios.get("https://reqres.in/api/users/" + id);
    console.log(detailU);
    this.setState({
      id: this.props.match.params.id,
      data: detailU.data.data,
    });
  };

  render() {
    let { id, data } = this.state;
    return (
      <>
        <div>tao la detail</div>
        <img src={data.avatar}></img>
        <div> {data.email} </div>
        <div> {data.first_name} </div>
        <div> {data.last_name} </div>
        <div>
          <button onClick={() => this.back()}> back</button>
        </div>
      </>
    );
  }
}

export default withRouter(Detail);
