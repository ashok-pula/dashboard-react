import React from "react";
import "./widgetLg.css";
const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://www.wallsnapy.com/img_gallery/new-25-lord-shiva-hd-wallpapers-5333580.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Ashok pula</span>
            </td>
            <td className="widgetLgDate">4 mar 2023</td>
            <td className="widgetLgAmount">$122</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://www.wallsnapy.com/img_gallery/new-25-lord-shiva-hd-wallpapers-5333580.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Ashok pula</span>
            </td>
            <td className="widgetLgDate">4 mar 2023</td>
            <td className="widgetLgAmount">$122</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://www.wallsnapy.com/img_gallery/new-25-lord-shiva-hd-wallpapers-5333580.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Ashok pula</span>
            </td>
            <td className="widgetLgDate">4 mar 2023</td>
            <td className="widgetLgAmount">$122</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://www.wallsnapy.com/img_gallery/new-25-lord-shiva-hd-wallpapers-5333580.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Ashok pula</span>
            </td>
            <td className="widgetLgDate">4 mar 2023</td>
            <td className="widgetLgAmount">$122</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
