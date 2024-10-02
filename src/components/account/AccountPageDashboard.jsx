// react
import React from "react";

// third-party
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// data stubs
import theme from "../../data/theme";

function AccountPageDashboard(props) {
  const { userData } = props;
  const AddressList =
    userData.user.code === 200 ? userData.user.data.Addresses : [];
  return (
    <div className="dashboard">
      <Helmet>
        <title>{`My Account — ${theme.name}`}</title>
      </Helmet>

      <div className="dashboard__profile card profile-card">
        <div className="card-body profile-card__body">
          <div className="profile-card__avatar">
            <img src="images/avatars/avatar-3.jpg" alt="" />
          </div>
          <div className="profile-card__name">
            {userData && userData.user && userData.user.data
              ? userData.user.data.firstName + " " + userData.user.data.lastName
              : null}
          </div>
          <div className="profile-card__email">
            {userData && userData.user && userData.user.data
              ? userData.user.data.email
              : null}
          </div>
          <div className="profile-card__edit">
            <Link to="profile" className="btn btn-secondary btn-sm">
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
      {AddressList?.map((address, index) => (
        <div
          className="dashboard__address card address-card address-card--featured"
          key={index}
        >
          {/* {address.default && <div className="address-card__badge">Default Address</div>} */}
          <div className="address-card__body">
            <div className="address-card__name">{`${address.fullname}`}</div>
            <div className="address-card__row">
              {address.shipping}
              <br />
              {address.city}
              {/* ,
                                {address.city}
                                <br />
                                {address.address} */}
            </div>
            <div className="address-card__row">
              <div className="address-card__row-title">Phone Number</div>
              <div className="address-card__row-content">{address.phone}</div>
            </div>
            <div className="address-card__row">
              <div className="address-card__row-title">Email Address</div>
              <div className="address-card__row-content">
                {userData.user.data.email}
              </div>
            </div>
            <div className="address-card__footer">
              <Link to="/account/addresses/5">Edit Address</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  userData: state.user,
});

const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountPageDashboard);
