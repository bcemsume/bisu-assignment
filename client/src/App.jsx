import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "./App.css";

const statusClored = (status) => {
  return {
    color: status == "CANCELED" ? "red" : status == "NEW" ? "green" : "blue",
  };
};

const columns = [
  {
    name: "Subscription Id",
    selector: "subscriptionId",
    sortable: true,
  },
  {
    name: "Delivery Date",
    selector: "deliveryDate",
    sortable: true,
  },
  {
    name: "Payment Method",
    selector: "paymentMethod",
    sortable: true,
  },
  {
    name: "Status",
    selector: "status",

    cell: (row) => <span style={statusClored(row.status)}> {row.status} </span>,
  },
  {
    name: "Total Amount",
    selector: "totalAmount",
    sortable: true,
  },
];

const detailColumns = [
  {
    name: "Product",
    selector: "product",
    sortable: true,
  },
  {
    name: "Quantity",
    selector: "quantity",
    sortable: true,
  },
];

function App() {
  const [subscriptionId, setSubscriptionId] = useState("");
  const [data, setData] = useState();
  const [selectData, setSelectData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let url = `http://localhost:4000/subscriptions`;
      let response = await axios.get(url);

      setSelectData(
        response.data.data.map((x) => (
          <option key={x.subscriptionId} value={x.subscriptionId}>
            {x.fullname}
          </option>
        ))
      );
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      let url = `http://localhost:4000/subscriptions/getSubscriptionOrders/${subscriptionId}`;
      let response = await axios.get(url);
      setData(response.data);
    }
    fetchData();
  }, [subscriptionId]);
  const handleChange = (e) => {
    setSubscriptionId(e.target.value);
    console.log(e);
  };
  return (
    <>
      <select onChange={handleChange}>
        <option>Select Customer</option>
        {selectData}
      </select>
      <DataTable
        title="Order List"
        columns={columns}
        data={data}
        expandableRows
        expandableRowsComponent={<ExpandedComponent />}
        expandOnRowClicked
      />
    </>
  );
}

const ExpandedComponent = ({ data }) => {
  return <DataTable columns={detailColumns} data={data.products} />;
};

export default App;
