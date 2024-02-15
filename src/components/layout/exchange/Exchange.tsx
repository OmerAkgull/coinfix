import { Container } from "react-bootstrap";
import styles from "./Exchange.module.scss";
import { Table, TableColumnProps } from "antd";
import { useState, useEffect } from "react";
import "./customTableStyles.css";

export default function Exchange() {
  const [dataSource, setDataSource] = useState<ColumnData[]>([]);
  const [totalPages, setTotalPages] = useState<number | undefined>(undefined);
  // const [loading, setLoading] = useState(false);

  async function fetchData() {
    // setLoading(true);
    const response = await fetch("https://api.coincap.io/v2/assets");
    const data = await response.json();
    setDataSource(data.data);
    setTotalPages(data.data.length);
    // setLoading(false);
  }

  useEffect(() => {
    fetchData();  
    const interval = setInterval(() => fetchData(), 3000)
    return () => clearInterval(interval)
  }, []);

  interface ColumnData {
    rank: string;
    name: string;
    priceUsd: string;
    changePercent24Hr: string;
    marketCapUsd: string;
    symbol: string;
    supply: string;
  }

  const columns: TableColumnProps<ColumnData>[] = [
    {
      title: "Rank",
      dataIndex: "rank",
      responsive: ["sm"]
    },
    {
      title: "",
      dataIndex: "symbol",
      render: (symbol: string) => (
        <img className="imgWidth"
          alt={symbol}
          src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
        ></img>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "priceUsd",
      render: (price: string) => `$${Number(price).toFixed(2)}`,
    },
    {
      title: "24h Change",
      dataIndex: "changePercent24Hr",
      render: (changePercent24Hr: string) => {
        // `%${Number(changePercent24Hr).toFixed(2)}`
        if(changePercent24Hr.startsWith("-")) {
          return <span style={{color: 'red'}}>{Number(changePercent24Hr).toFixed(2)}%</span>
        } else {
          return <span style={{color: 'green'}}>{Number(changePercent24Hr).toFixed(2)}%</span>
        }
      }
        ,
        width: "15%",
      responsive: ["sm"],
    },
    // {
    //   title: "Market Cap",
    //   dataIndex: "marketCapUsd",
    //   render: (marketCapUsd: string) => `$${Number(marketCapUsd).toFixed(2)}`,
    //   responsive: ["lg"],
    // },
    // {
    //   title: "Supply",
    //   dataIndex: "supply",
    //   responsive: ["xxl"],
    // },
  ];

  return (
    <>
      <Container
        id="exchanges"
        className={`d-flex pt-5 flex-column justify-content-center align-items-center ${styles.gradientBg}`}
        fluid
      >
        <h1 className={styles.exchangeText}>Market Update</h1>
        <div className="h-100 table-width">
        <Table
          // loading={loading}
          columns={columns}
          dataSource={dataSource}
          pagination={{
            total: totalPages,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} items`,
          }}
          className={`mt-5 ${styles.customTable}`}
        />
        </div>
      </Container>
    </>
  );
}
