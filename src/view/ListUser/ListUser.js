import React from "react";
import axios from "axios";
import "./ListUser.css";
import { withRouter } from "react-router-dom";
class listUser extends React.Component {
  state = {
    listUser: [],
  };

  showDetail = (id) => {
    this.props.history.push(`/${id}`);
  };
  componentDidMount = async () => {
    var listUser = await axios.get("https://reqres.in/api/users?page=1");

    this.setState({
      listUser:
        listUser && listUser.data && listUser.data.data
          ? listUser.data.data
          : [],
    });
  };
  render() {
    return (
      <>
        <div>hello list u</div>
        {this.state.listUser &&
          this.state.listUser.map((item, index) => {
            return (
              <div
                key={item.id}
                className="listU"
                onClick={() => this.showDetail(item.id)}
              >
                {index + 1} - {item.first_name} - {item.last_name}
              </div>
            );
          })}
      </>
    );
  }
}
export default withRouter(listUser);
