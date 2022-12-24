import './FeaturedInfo.scss';
import { useState, useEffect } from 'react';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const myIncome = [{ total: 11456 }, { total: 43456 }];

const FeaturedInfo = () => {
  const [income, setIncome] = useState(myIncome);
  const [perc, setPerc] = useState(0);

  // useEffect(() => {
  //   const getIncome = async () => {
  //     try {
  //       const res = await userRequest.get('orders/income');
  //       const list = res.data.sort((a, b) => {
  //         return a._id - b._id;
  //       });
  //       setIncome(list);
  //       setPerc((res.data[1].total * 100) / res.data[0].total - 100);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   getIncome();
  // }, []);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="moneyContainer">
          <span className="money">${income[1]?.total}</span>
          <span className="moneyRate">
            %{perc.toFixed(2)}
            {perc < 0 ? (
              <ArrowDownwardOutlinedIcon className="icon negative" />
            ) : (
              <ArrowUpwardOutlinedIcon className="icon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="moneyContainer">
          <span className="money">$46415</span>
          <span className="moneyRate">
            -1.4 <ArrowDownwardOutlinedIcon className="icon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="moneyContainer">
          <span className="money">$1415</span>
          <span className="moneyRate">
            5.4 <ArrowUpwardOutlinedIcon className="icon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};
export default FeaturedInfo;
