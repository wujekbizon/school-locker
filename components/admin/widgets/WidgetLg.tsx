import './WidgetLg.scss';

const orders = [
  {
    _id: 1,
    userId: 123399932,
    createdAt: '13.10.2022',
    amount: 560,
    status: 'pending',
  },
  {
    _id: 2,
    userId: 99932333,
    createdAt: '03.12.2022',
    amount: 1202,
    status: 'declined',
  },
  {
    _id: 3,
    userId: 324322,
    createdAt: '09.12.2022',
    amount: 610,
    status: 'approved',
  },
  {
    _id: 4,
    userId: 13123888,
    createdAt: '03.12.2022',
    amount: 3560,
    status: 'approved',
  },
];

const WidgetLg = () => {
  // const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   const getOrders = async () => {
  //     try {
  //       const res = await userRequest.get('/orders');
  //       setOrders(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   getOrders();
  // }, []);

  const Button = ({ type }: { type: string }) => {
    return <button className={`button ${type}`}>{type.toUpperCase()}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="title">Latest transactions</h3>
      <table className="widgetTable">
        <tbody>
          <tr className="widgetTr">
            <th className="widgetTh">Customer</th>
            <th className="widgetTh">Date</th>
            <th className="widgetTh">Amount</th>
            <th className="widgetTh">Status</th>
          </tr>
          {orders.map((order) => (
            <tr className="widgetTr" key={order._id}>
              <td className="user">
                <span className="name">{order.userId}</span>
              </td>
              <td className="date">{order.createdAt}</td>
              <td className="amount">${order.amount}</td>
              <td className="status">
                <Button type={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default WidgetLg;
