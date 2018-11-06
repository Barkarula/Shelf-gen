import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import axios from 'axios';
//import { getUserRoleTest } from '../../../actions'

const SidenavItems = ({user}) => {

//componentWillMount() {
//    this.props.dispatch(getUserRoleTest(${user}))
//}

/*
let response = axios.get(`/api/getUser?id=${user}`)
            .then(response =>{
                //sconsole.log(user.login.id);
                response.data.role
            })
*/

//console.log(user.login);
//console.log(this.props.user);

    const items = [
        {
            type:'navItem',
            icon:'home',
            text:'Home',
            link:'/',
            restricted:false,
            test: false
        },
        {
            type:'navItem',
            icon:'file-text-o',
            text:'My Profile',
            link:'/user',
            restricted:true,
            test: false
        },
        {
            type:'navItem',
            icon:'file-text-o',
            text:'Add Admins',
            link:'/user/register',
            restricted:true,
            test: false
        },
        {
            type:'navItem',
            icon:'file-text-o',
            text:'Login',
            link:'/login',
            restricted:false,
            exclude:true,
            test: false
        },
        {
            type:'navItem',
            icon:'file-text-o',
            text:'My reviews',
            link:'/user/user-reviews',
            restricted:true,
            test: false
        },
        {
            type:'navItem',
            icon:'file-text-o',
            text:'Add reviews',
            link:'/user/add',
            restricted:true,
            test: false
        },
        {
            type:'navItem',
            icon:'file-text-o',
            text:'Add rules',
            link:'/gen',
            restricted:true,
            test: false
        },
        {
            type:'navItem',
            icon:'file-text-o',
            text:'Logout',
            link:'/user/logout',
            restricted:true,
            test: false
        },
        {
            type:'navItem',
            icon:'file-text-o',
            text:'About us',
            link:'/about',
            restricted:false,
            test: false
        }
    ]

    const element = (item,i) => (
        <div key={i} className={item.type}>
            <Link to={item.link}>
                <FontAwesome name={item.icon}/>
                {item.text}
            </Link>
        </div>
    )

/*
    const showItems = () => (
        user.login ?
            items.map((item,i)=>{
                if(user.login.isAuth) {
                    return !item.exclude ?
                        element(item,i)
                    :null
                } else { 
                    return !item.restricted ?
                        element(item,i)
                    :null
                }
            })
        :null
    )
    */
    const showItems = () => (
        user.login ?
            items.map((item,i)=>{
                if(user.login.isAuth) {
                    return !item.exclude ?
                        element(item,i)
                    :null
                } else { 
                    return !item.restricted ?
                        element(item,i)
                    :null
                }
            })
        :null
    )

    return (
        <div>
            {showItems()}
        </div>
    );
};

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(SidenavItems)