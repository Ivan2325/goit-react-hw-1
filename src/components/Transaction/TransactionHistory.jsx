import React from 'react';
import PropTypes from 'prop-types';
import s from '../Transaction/TransactionHistory.module.css' ;

const TransactionHistory = ({items}) => {
    return (
        <table className= {s.table}>
  <thead className= {s.thead}>
    <tr className={s.tr}>
      <th className={s.th}>Type</th>
      <th className={s.th}>Amount</th>
      <th className={s.th}>Currency</th>
    </tr>
  </thead>

  <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={s.tr} key={id}>
            <td className={s.td}>{type}</td>
            <td className={s.td}>{amount}</td>
            <td className={s.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
</table>
)}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default TransactionHistory ;