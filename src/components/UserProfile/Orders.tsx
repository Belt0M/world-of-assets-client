import React from 'react';
import './Orders.css'

interface OrdersProps {
  activepage?: string;
}

const Orders: React.FC<OrdersProps> = () => {

  const data = [
    {
      id: 1,
      date: '11/11/2011',
      status: 'Delivered',
      total: 1000
    },
    {
      id: 2,
      date: '21/12/2022',
      status: 'On the way',
      total: 800
    },
    {
      id: 3,
      date: '05/01/2024',
      status: 'Cancelled',
      total: 500
    }
  ];
  
  return (
    <div className='yourorders'>
      <h1 className='mainhead text-center'>Orders</h1>
      <table className='yourorderstable'>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.date}</td>
              <td>
                <p>
                  {item.status === 'Delivered' && <span className='greendot'></span>}
                  {item.status === 'On the way' && <span className='yellowdot'></span>}
                  {item.status === 'Cancelled' && <span className='reddot'></span>}
                  {item.status}
                </p>
              </td>
              <td>${item.total}</td>
              <td><button className =' mb-2 mt-2 px-6 py-3 transition-all border-2 rounded-lg border-violet-700 text-violet-700 hover:bg-violet-700 hover:text-white font-sub'>View</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
