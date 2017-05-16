import React from "react";


export default class Archives extends React.Component {
  render() {
    console.log(this.props);
    const { params } = this.props;
    const { article } = params;
    return (
    <div>Archives ( {article} )</div>
    );
  }
}
