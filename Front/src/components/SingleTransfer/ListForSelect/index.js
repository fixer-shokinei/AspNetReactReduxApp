import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormControl, Alert } from 'react-bootstrap';
import { Account } from './Account';
import * as AccountListSelectors from '../../../features/accountList/selectors';
import { getAccounts } from '../../../actions/account';

class SingleAccount extends Component {
    componentDidMount() {
        this.props.getAccounts();
    }

    render() {
        return (
            <div>
                <h1>gebiezhuanzhang</h1>

                <div>
                    <Alert bsStyle="danger" hidden={!this.props.error}>
                        <strong>Error: </strong> {this.props.error}
                    </Alert>
                </div>
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>branchName</th>
                                <th>subject</th>
                                <th>accountNO</th>
                                <th>accountmegimin</th>
                                <th>accountmemo</th>
                                <th>blance</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.accounts.map(account => {
                                    return <Account key={account.id} data={account} />;
                                })
                            }
                        </tbody>
                    </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return AccountListSelectors.getAccountListState(state);
}

const actionCreators = { getAccounts };

export default SingleAccount = connect(mapStateToProps, actionCreators)(SingleAccount);
