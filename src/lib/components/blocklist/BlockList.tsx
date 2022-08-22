import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const BlockList = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Block</Th>
            <Th>Time</Th>
            <Th>Number of Txs</Th>
            <Th>Size Data</Th>
            <Th>Nodes</Th>
            <Th>Mined by</Th>
            <Th>Block Reward</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>#44223424</Td>
            <Td>2h 15min ago</Td>
            <Td isNumeric>65656345565656</Td>
            <Td isNumeric>4548678566756</Td>
            <Td isNumeric>23256568897895</Td>
            <Td>25.4</Td>
            <Td>25.4</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
export default BlockList;
