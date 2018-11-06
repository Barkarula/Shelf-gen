import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withPermissions } from "../../PermissionsProvider";

class About extends Component {
    render() {
        const { permissions } = this.props;
        //const content = permissions[0] === "read" ? <h1>can read</h1> : <h1>computer says no</h1>;
        //const content2 = permissions[1] === "read" ? <h1>can read</h1> : <h1>computer says no</h1>;
        //const { permissions } = this.props;
        return (
            <div className="rl_container">
                <h4>We are good team. Here will be link on apk. file for 
                Android version. </h4>
                <h3>Follow us to social: <a href="https://vk.com/rnimu_rgmu">https://vk.com/rnimu_rgmu</a></h3>
            </div>
        );
    }
}

function mapStateProps(state) {
    return {
        user:state.user
    }
}

export default connect(mapStateProps)(About)