import React from "react";
import { connect } from "react-redux";

const HomePage = ({ user }) => {
  return <div>HomePage {user.currentUser}</div>;
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(HomePage);
