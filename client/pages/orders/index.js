const OrderIndex = ({ orders }) => {
	return (
	  <div>
		<center><h1>My Orders</h1></center>
		{orders.map((order) => {
		  return (
			<center>
				<div class="card text-center" key={order.id} style={{width:'50%', color:'#6A706E', marginBottom:'2%'}}>
				<div class="card-body">
					<h5 class="card-title">{order.ticket.title}</h5>
						<p class="card-text">Price: Rs.{order.ticket.price}</p>
				</div>
				<div class="card-footer text-muted">
					{order.status}
				</div>
				</div>
			</center>
		  );
		})}
	  </div>
	);
  };
  
  OrderIndex.getInitialProps = async (context, client) => {
	const { data } = await client.get('/api/orders');
  
	return { orders: data };
  };
  
  export default OrderIndex;