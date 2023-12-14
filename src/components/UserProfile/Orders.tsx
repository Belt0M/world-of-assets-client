import React from 'react';

interface OrdersProps {
  activepage?: string;
}

const Orders: React.FC<OrdersProps> = () => {
  return (
    <div className='accountsettings'>
      <h1 className='mainhead text-center'>Orders</h1>     
    </div>
  );
};

export default Orders;