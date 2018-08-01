exports.orders_get_all = (req, res, next) => {
  res.status(200).json({
    message: 'Orders were fetched'
  });
};

exports.orders_create = (req, res, next) => {
  res.status(201).json({
    message: 'Order was created'
  });
};

exports.orders_get_by_id = (req, res, next) => {
  res.status(200).json({
    message: 'Order details v3',
    orderId: req.params.orderId
  });
};

exports.orders_delete = (req, res, next) => {
  res.status(200).json({
    message: 'Order deleted',
    orderId: req.params.orderId
  });
};