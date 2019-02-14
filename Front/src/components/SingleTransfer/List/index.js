import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import * as AccountListSelectors from '../../../features/accountList/selectors';
import { getAccounts } from '../../../actions/account';

class AccountsList extends Component {
    componentDidMount() {
        this.props.getAccounts();
    }

    render() {
        const accountSize = this.props.accounts.length;
        return (
            <div>
                <h1>gebiezhuanzhang</h1>

                <div>
                    <Alert bsStyle="danger" hidden={!this.props.error}>
                        <strong>Error: </strong> {this.props.error}
                    </Alert>
                </div>

                {(() => {

                    if(accountSize==1){
                        const accountData = this.props.accounts.map((account) => account);
                        return <table className="table table-hover table-striped">
                            <tbody>
                               <td>
                                   <h1>payAccount</h1>
                                </td>
                               <td>
                               {accountData[0].branchName}　{accountData[0].subject}　{accountData[0].accountNumber}<br/>{accountData[0].accountHolder}<br/>口座メモ：{accountData[0].accountMemo}<br/>残高：{accountData[0].balance}円（お支払可能残高：{accountData[0].payableBalance}円）</td>
                               <td>
                                    <p>
                                        <Link to={`${this.props.match.url}/search`} className="btn btn-primary">
                                            chang
                                        </Link>
                                    </p>
                               </td>
                            </tbody>
                        </table>
                    } else if (accountSize>1) {
                        return <table className="table table-hover table-striped">
                           
                            <tbody>
                                <td>
                                   <h1>payAccount</h1>
                                </td>
                                <td>
                                   <small>choose a payAccount</small><br/>
                                   <p>
                                        <Link to={`${this.props.match.url}/search`} className="btn btn-primary">
                                            click
                                        </Link>
                                    </p>
                                </td>
                                <td>
                                   
                                </td>
                            </tbody>
                        </table>
                    }

                })()}

            </div>
        );
    }
}

function mapStateToProps(state) {
    return AccountListSelectors.getAccountListState(state);
}

const actionCreators = { getAccounts };

export default AccountsList = connect(mapStateToProps, actionCreators)(AccountsList);
