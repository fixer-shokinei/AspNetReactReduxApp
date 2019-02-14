import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteTask } from '../../../actions/account';

const AccountRaw = props => (
    <tr>
        <td>
            {props.data.branchName}
        </td>
        <td>
            {props.data.subject}
        </td>
        <td>
            {props.data.accountNumber}
        </td>
        <td>
            {props.data.accountHolder}
        </td>
        <td>
            {props.data.accountMemo}
        </td>
        <td>
            {props.data.balance}<br/>
            {props.data.payableBalance}
        </td>
        <td>
            <p>
                <Link to={`/panel/singletransfer/detail/${props.data.branchCode}`} className="btn btn-primary">
                  click
                </Link>
            </p>
        </td>
    </tr>
);

//const actionCreators = { deleteTask };

export const Account = connect(null, null)(AccountRaw);
