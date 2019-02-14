import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import * as AccountListSelectors from '../../../features/accountList/selectors';
import { getAccountsByID } from '../../../actions/account';

class SingleAccount extends Component {
    //const accountData = this.props.getAccountsByID(branchCode);
    componentDidMount() {
        const branchCode = this.props.match.params.branchCode;
        this.props.getAccountsByID(branchCode);
    }

    render() {
        //const branchName = this.branchName;
        alert(Array.isArray(this.props.account));
        return (
            <div>
                <h1>gebiezhuanzhuang</h1>

                <div>
                    <Alert bsStyle="danger" hidden={!this.props.error}>
                        <strong>Error: </strong> {this.props.error}
                    </Alert>
                </div>
                    <table className="table table-hover table-striped">
                    <tbody>

                    <td>
                        <h1>payAccount</h1>
                    </td>
                    <td>
                    
                    </td>
                    <td>
                        <p>
                            <Link to={`/panel/singletransfer/search`} className="btn btn-primary">
                                change
                            </Link>
                        </p>
                    </td>
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return AccountListSelectors.getAccountListState(state);
}

const actionCreators = { getAccountsByID };

export default SingleAccount = connect(mapStateToProps, actionCreators)(SingleAccount);