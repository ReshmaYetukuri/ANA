import styled from '@emotion/styled';

interface TableHeadProps {
  tableHead: number;
}

const CTABLE = styled.table<TableHeadProps>`
  width: 97%;
  border-collapse: collapse;
  margin: 3rem 0rem 0rem 1rem;
  background-color: #0f999c;
  table-layout: fixed;
  text-align: left;
  border: 1px solid #c5d9f2;
  height: 200px;
  td {
    border-collapse: collapse;
    border: 0.5px solid #c5d9f2;
  }
  th {
    border-left: 0.5px solid #c5d9f2;
    border-right: 0.5px solid #c5d9f2;
  }
  thead {
    display: table;
    width: calc(100% - 17px);
    color: white;
    background: #0f999c;
    text-align: left;
  }
  tbody {
    display: block;
    // height: 500px;
    overflow-y: scroll;
    background-color: white;
  }
  th,
  td {
    width: ${(props: TableHeadProps) => +(100 / props.tableHead).toFixed(2)}%;
    padding: 5px;
    word-break: break-all;
  }
  tr {
    display: table;
    width: 100%;
    box-sizing: border-box;
  }
  td {
    text-align: left;
    border-bottom: none;
    border-left: none;
  }
  tr:nth-last-of-type(1) {
    td {
      border-bottom: 0.5px solid #c5d9f2;
    }
  }
  tr:nth-last-of-type(1) {
    th {
      border-right: none;
    }
  }
`;
interface TableProps {
  tableHeading: string[];
  tableData: {
    date1: string;
    date2: string;
    dep: string;
    arr: string;
    select: string;
  }[];
}
const Table = ({ tableHeading, tableData }: TableProps) => (
  <CTABLE tableHead={tableHeading.length}>
    <thead>
      <tr>
        {tableHeading.map((heading) => (
          <th
            className={`table-${heading.replace(/[. ,:-]+/g, '-')}`}
            key={`tabl-head${heading}`}
          >
            {heading}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {tableData.map((item, index) => (
        <tr key={`table-${item.date1}-${item.dep}`}>
          <td className={`table-${tableHeading[0].replace(/[. ,:-]+/g, '-')}`}>
            {index + 1}
          </td>
          <td className={`table-${tableHeading[1].replace(/[. ,:-]+/g, '-')}`}>
            {item.date1}
          </td>
          <td className={`table-${tableHeading[2].replace(/[. ,:-]+/g, '-')}`}>
            {item.date2}
          </td>
          <td className={`table-${tableHeading[3].replace(/[. ,:-]+/g, '-')}`}>
            {item.dep}
          </td>
          <td className={`table-${tableHeading[4].replace(/[. ,:-]+/g, '-')}`}>
            {item.arr}
          </td>
          {/* <td className={`table-${tableHeading[5].replace(/[. ,:-]+/g, '-')}`}>
            <a
              href="void(0)"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {item.select}
            </a>
          </td> */}
        </tr>
      ))}
    </tbody>
  </CTABLE>
);

export default Table;
