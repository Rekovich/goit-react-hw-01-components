import css from './transaction-history.module.css';
import PropTypes from 'prop-types';
import React from 'react';


const TransactionHistory = ({items}) => {
    const elem = items.map(item => (
        <tr key={item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    ))
return (
<table class={css.transaction_history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {elem}
  </tbody>
</table>
)
}

TransactionHistory.propTypes = {
    transaction: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,

        })
    )
}

export default TransactionHistory;