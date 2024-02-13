import { Container } from "react-bootstrap";
import styles from "./Exchange.module.scss";
import { Table, TableColumnProps } from "antd";
import { useState, useEffect } from "react";

export default function Exchange() {

    interface ColumnData {
        rank:number,
        name:string,
        priceUsd:number,
        changePercent24Hr:number,
        marketCapUsd:number,
        supply:number;
    }


  const [dataSource, setDataSource] = useState<ColumnData[]>([]);
  const [totalPages, setTotalPages] = useState<number| undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const columns: TableColumnProps<ColumnData>[] = [
    {
      title: "Rank",
      dataIndex: "rank",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "priceUsd",
      render: (price: number) => `$${price}`,
    },
    {
      title: "24h Change",
      dataIndex: "changePercent24Hr",
      render: (changePercent24Hr: number) => `%${changePercent24Hr}`,
      responsive: ['sm'],
    },
    {
      title: "Market Cap",
      dataIndex: "marketCapUsd",
      render: (marketCapUsd: number) => `$${marketCapUsd}`,
      responsive: ['lg'],
    },
    {
      title: "Supply",
      dataIndex: "supply",
      responsive: ['lg'],
    },
  ];

  async function fetchData() {
    setLoading(true);
    const response = await fetch("https://api.coincap.io/v2/assets");
    const data = await response.json();
    setDataSource(data.data);
    setTotalPages(data.data.length);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Container
        className={`d-flex pt-5 flex-column justify-content-center align-items-center ${styles.gradientBg}`}
        fluid
      >
        <h1 className={styles.exchangeText}>Market Update</h1>
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          pagination={{
            total: totalPages,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} items`,
          }}
          className="mt-5"
        />
      </Container>
    </>
  );
}
