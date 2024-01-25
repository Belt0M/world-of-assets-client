import React from 'react'
import './Orders.css'

interface OrdersProps {
	activepage?: string
}

const Orders: React.FC<OrdersProps> = () => {
	const data = [
		{
			id: 1,
			date: '11/11/2011',
			status: 'Delivered',
			total: 1000,
		},
		{
			id: 2,
			date: '21/12/2022',
			status: 'Waiting',
			total: 800,
		},
		{
			id: 3,
			date: '05/01/2024',
			status: 'Cancelled',
			total: 500,
		},
		{
			id: 4,
			date: '15/03/2023',
			status: 'Delivered',
			total: 1200,
		},
		{
			id: 5,
			date: '02/06/2024',
			status: 'Delivered',
			total: 1500,
		},
		{
			id: 6,
			date: '10/08/2023',
			status: 'Waiting',
			total: 900,
		},
		{
			id: 7,
			date: '19/09/2022',
			status: 'Cancelled',
			total: 750,
		},
		{
			id: 8,
			date: '08/12/2023',
			status: 'Delivered',
			total: 1100,
		},
		{
			id: 9,
			date: '14/02/2024',
			status: 'Delivered',
			total: 1800,
		},
		{
			id: 10,
			date: '30/04/2022',
			status: 'Waiting',
			total: 950,
		},
	]

	return (
		<div className='yourorders'>
			<h1 className='py-2 text-2xl text-center mainhead'>Orders</h1>
			<div
				className='scroll-container'
				style={{maxHeight: '400px', overflowY: 'auto'}}
			>
				<table className='yourorderstable'>
					<thead>
						<tr>
							<th>Order ID</th>
							<th>Date</th>
							<th>Status</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item, index) => (
							<tr key={index}>
								<td>{item.id}</td>
								<td>{item.date}</td>
								<td>
									<p>
										{item.status === 'Delivered' && (
											<span className='greendot'></span>
										)}
										{item.status === 'Waiting' && (
											<span className='yellowdot'></span>
										)}
										{item.status === 'Cancelled' && (
											<span className='reddot'></span>
										)}
										{item.status}
									</p>
								</td>
								<td>${item.total}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Orders
