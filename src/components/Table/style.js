import styled from "styled-components";
import { size } from "App/device";

const TableStyle = styled.div`
  .ant-table-content table {  
    .center {
      text-align: center;
    }
    .ant-table-thead > tr > th,
    .ant-table-tbody > tr > td,
    .ant-table tfoot > tr > th,
    .ant-table tfoot > tr > td {
      padding: 8px 7px;
      vertical-align: top;
    }
    .ant-table-pagination-right {
      justify-content: center;
    }
    .ant-pagination-item-link {
      color: #616161;
    }
    
    .actionUI {
      display: flex;
      justify-content: center;
      color:black;      
      .edite_box {
        margin: 0 7px;
      }
     
    }
  }
`;
export default TableStyle;
