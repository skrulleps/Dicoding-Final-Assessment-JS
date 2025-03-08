// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders=[];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  // console.log('Items received:', items);
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: 'Menunggu'
  };
  // console.log('New Order:', newOrder); 
  orders.push(newOrder);
  
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const orderIndex = orders.findIndex(order => order.id === orderId);
  if (orderIndex !== -1) {
    orders[orderIndex].status = status;
  }

}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders.reduce((total, order) => {
    if (order.status === 'Selesai') {
      return total + order.totalPrice;
    }
    return total;
  }
  , 0);

}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const orderIndex = orders.findIndex(order => order.id === id);
  if (orderIndex !== -1) {
    orders.splice(orderIndex, 1);
  }
  
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
