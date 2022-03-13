import styled from '@emotion/styled';

interface TableHeadProps {
  tableHead: number;
}

const CTABLE = styled.table<TableHeadProps>`
  width: 100%;
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
    tr {
      th::before{
          content:'*',
          color:red;
          display:inline-block;
          font-size:1rem;
      }
    }
  }
  tbody {
    display: block;
    height: 1000px;
    // overflow-y: scroll;
    background-color: white;
  }
  th,
  td {
    width: calc(100% / 7);
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
  tr:nth-child(even){background-color:#D3D3D3;} {
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
    fltNo: string;
    cls: string;
    date: string;
    depApo: string;
    arrApo: string;
    actionCode: string;
  }[];
}
const Table = ({ tableHeading, tableData }: TableProps) => (
  <CTABLE tableHead={tableHeading.length}>
    <thead>
      <tr>
      <th className="actions">dfs</th>
        {tableHeading.map((heading) => (
          <th
            className={`table-${heading.replace(/[. ,:-]+/g, '-')}`}
            key={`table-head${heading}`}
          >
            {heading}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {tableData.map((item, index) => (
        <tr key={`table-${item?.fltNo ? item.fltNo:'emptyflaNo'}-${item?.cls ? item.fltNo:'emptycls'}`}>
          <td className={`table-row-${index+1}-actions`}>
            <input type='checkbox' />
          </td>
          <td className={`table-${tableHeading[0].replace(/[. ,:-]+/g, '-')}`}>
          {index + 1} {item.fltNo}
          </td>
          <td className={`table-${tableHeading[1].replace(/[. ,:-]+/g, '-')}`}>
            {item.cls}
          </td>
          <td className={`table-${tableHeading[2].replace(/[. ,:-]+/g, '-')}`}>
            {item.date}
          </td>
          <td className={`table-${tableHeading[3].replace(/[. ,:-]+/g, '-')}`}>
            {item.depApo}
          </td>
          <td className={`table-${tableHeading[4].replace(/[. ,:-]+/g, '-')}`}>
            {item.arrApo}
          </td>
          <td className={`table-${tableHeading[5].replace(/[. ,:-]+/g, '-')}`}>
            {item.actionCode}
          </td>
           
        </tr>
      ))}
    </tbody>
  </CTABLE>
);

export default Table;
