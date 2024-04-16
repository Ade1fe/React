
import { Box, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr,  } from "@chakra-ui/react";
import { LayoutComp } from '..';
import { Link } from "react-router-dom";

const BankStatements = () => {


  return (
    <LayoutComp desc="'Hey, here's your ">
    <Box  >
    <TableContainer overflow="auto" maxHeight="calc(100vh - 200px)">
  <Table  minWidth="100%">
    <Thead >
      <Tr fontSize={['sm']}>
        <Th fontSize={['sm']}>Date</Th>
        <Th fontSize={['sm']}>Account Name</Th>
        <Th fontSize={['sm']}>CardNumber</Th>
        <Th fontSize={['sm']}>Withdraw</Th>
        <Th fontSize={['sm']}>Deposit</Th>
        <Th isNumeric fontSize={['sm']}>Balance</Th>
      </Tr>
    </Thead>
    <Tbody fontSize={['sm']}>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>inches</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>inches</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>inches</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>inches</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>inches</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>inches</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>inches</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>inches</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>inches</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>inches</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>inches</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>inches</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
     
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
<Link to='/home-page'>
            <Box className="" mt='2'  bg='blue.900' py='3' px='6' textAlign='center' color='white' borderRadius='10px' bottom={['30%']} left='20px'> Cancel</Box>
          </Link>
    </Box>
  </LayoutComp>
  
  );
};


export default BankStatements
