import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addGen, clearNewBook } from '../../actions'

class AddGen extends Component {

    state = {
        formdata:{
            rule_0:'',
            rule_1:'',
            rule_2:'',
            genId:''

        }
    }

    handleInput = (event,name) => {
        const newFormdata = {
            ...this.state.formdata
        }
        newFormdata[name] = event.target.value

        this.setState({
            formdata:newFormdata
        })
    }

    showNewBook = (book) => (
        book.post ?
            <div className="conf_link">
                You are add new anketa !! <Link to={`/books/${book.bookId}`}>
                    Click the link to see the review
                </Link>
            </div>
        :null
    )


    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(addGen({
            ...this.state.formdata,
            ownerId:this.props.user.login.id
        }))
    }

    componentWillUnmount(){
        this.props.dispatch(clearNewBook())
    }

    render() {
        return (
            <div className="rl_container article">
                <form onSubmit={this.submitForm}>
                    <h2>Add a GenoRules</h2>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter genoCode"
                            value={this.state.formdata.genId}
                            onChange={(event)=>this.handleInput(event,'genId')}
                        />
                    </div>

                    <h3>Это правило отвечает за резус фактор: </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter rule_0"
                            value={this.state.formdata.rule_0}
                            onChange={(event)=>this.handleInput(event,'rule_0')}
                        />
                    </div>

                    <h3>Это правило отвечает за рак: </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter rule_1"
                            value={this.state.formdata.rule_1}
                            onChange={(event)=>this.handleInput(event,'rule_1')}
                        />
                    </div>

                    <h3>Это правило отвечает за восприимчиоваость к лактозе: </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter rule_3"
                            value={this.state.formdata.rule_3}
                            onChange={(event)=>this.handleInput(event,'rule_3')}
                        />
                    </div>

                    <button type="submit">Add rule</button>
                    {
                        this.props.books.newbook ? 
                            this.showNewBook(this.props.books.newbook)
                        :null
                    }
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        books:state.books
    }
}

export default connect(mapStateToProps)(AddGen)