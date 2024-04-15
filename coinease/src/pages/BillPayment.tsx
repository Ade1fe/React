import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Select, Input, FormControl, FormHelperText, FormLabel, Text, Image } from '@chakra-ui/react';
import { LayoutComp } from '.';
import { smartimg } from '../assets/imgs';

interface CustomBoxProps {
  title?: string;
  amount?: string;
  cashback?: string;
  children?: React.ReactNode;
}

// Reusable TextBlock component
const CustomBox = ({ title, amount, cashback, children, }: CustomBoxProps) => {
  
  return (
    <Box className="" p="4" shadow="md" rounded="md"  w={['200px']} my='2'>
      <Text mb='2' fontSize={['md', 'lg']}>
        {title}
      </Text>
      <Text fontSize={['sm', 'lg']}>
        {amount}
      </Text>
      <Text fontSize={['xs', 'sm']} color='green.400'>
        {cashback}
      </Text>
      {children}
    </Box>
  );
};

// Reusable TextBlock component
const AirtimeBox = ({  amount, cashback, children, }: CustomBoxProps) => {
  
  return (
    <Box className="" p="4" shadow="md" rounded="md"  w={['200px']} my='2' >
  
      <Text fontSize={['sm', 'lg']} textAlign='center'>
        {amount}
      </Text>
      <Text fontSize={['xs', 'sm']} color='blue.600' textAlign='center'>
        {cashback}
      </Text>
      {children}
    </Box>
  );
};

const BillPayment = () => {
  return (
    <LayoutComp desc='Select a transaction'>
      <Box className="">
        <Tabs variant='enclosed'>
          <TabList >
            <Tab textTransform='capitalize'>TV</Tab>
            <Tab textTransform='capitalize'>Electric</Tab>
            <Tab textTransform='capitalize'>Airtime</Tab>
          </TabList>
          <TabPanels>
            <TabPanel p='0' display={['block', 'flex']} justifyContent='space-between'>
              <Box w={['50%']}>
                <Select placeholder="Select TV service" my='5'>
                  <option value="gotv">GOtv</option>
                  <option value="dstv">DStv</option>
                  <option value="startimes">StarTimes</option>
                  <option value="startimes-on">StarTimes ON</option>
                  <option value="box-office">Box Office</option>
                  <option value="netflix">Netflix</option>
                  <option value="showmax">Showmax</option>
                </Select>
                <FormControl mb='5'>
                  <FormLabel>Smartcard Number </FormLabel>
                  <Input type='text' />
                  <FormHelperText>We'll never share your cardnumber.</FormHelperText>
                </FormControl>
             

              {/* Reusable Box component with additional styling */}
             <Box display={['flex']} flexWrap='wrap' gap='4' className="">
             <CustomBox
                title="Jinja/month"
                amount="#2700"
                cashback="#20 cashback"
              />

               <CustomBox
                title="Jinja/month"
                amount="#2700"
                cashback="#20 cashback"
              />

               <CustomBox
                title="Jinja/month"
                amount="#2700"
                cashback="#20 cashback"
              />
               <CustomBox
                title="Jinja/month"
                amount="#2700"
                cashback="#20 cashback"
              />

               <CustomBox
                title="Jinja/month"
                amount="#2700"
                cashback="#20 cashback"
              />

               <CustomBox
                title="Jinja/month"
                amount="#2700"
                cashback="#20 cashback"
              />
             </Box>
               </Box>

               <Box className="" w={['full' ,'30%']}>
                <Image src={smartimg} />
               </Box>
            </TabPanel>
            <TabPanel p='0' display={['block', 'flex']} justifyContent='space-between'>
              <Box w={['50%']}>
                <Select placeholder="Select Biller" my='5'>
                  <option value="gotv">Ikeja Electric</option>
                  <option value="dstv">Ibadan Electric</option>
                  <option value="startimes">Abuja Electric</option>
                  <option value="startimes-on">Eko Electric</option>
                  <option value="box-office">Port Harcourt Electric</option>
                  <option value="netflix">Aba Electric</option>
                  <option value="showmax">jos Electric</option>
                  <option value="showmax">Kaduna Electric</option>
                </Select>

                <Select placeholder="Payment Item" my='5'>
                  <option value="gotv">Prepaid</option>
                  <option value="gotv">Postpaid</option>
                </Select>
                <FormControl mb='5'>
                  <FormLabel>Meter Number </FormLabel>
                  <Input type='text' />
                  <FormHelperText>We'll never share your meternumber.</FormHelperText>
                </FormControl>
             

              {/* Reusable Box component with additional styling */}
              <Text className="">Select Amount</Text>
             <Box display={['flex']} flexWrap='wrap' gap='4' className="">
             <AirtimeBox
                // title="Jinja/month"
                amount="#2700"
                cashback="#20 cashback"
              />

               <AirtimeBox
                // title="Jinja/month"
                amount="#2700"
                cashback="#20 cashback"
              />

               <AirtimeBox
                // title="Jinja/month"
                amount="#2700"
                cashback="#20 cashback"
              />
               <AirtimeBox
                // title="Jinja/month"
                amount="#2700"
                cashback="#20 cashback"
              />

               <AirtimeBox
                // title="Jinja/month"
                amount="#2700"
                cashback="#20 cashback"
              />

               <AirtimeBox
                // title="Jinja/month"
                amount="#2700"
                cashback="#20 cashback"
              />
             </Box>
               </Box>

               <Box className="" w={['full' ,'30%']}>
                <Image src={smartimg} />
               </Box>
            </TabPanel>
            <TabPanel p='0' display={['block', 'flex']} justifyContent='space-between'>
              <Box w={['50%']}>
                <Select placeholder="Select a network " my='5'>
                  <option value="gotv">Airtel</option>
                  <option value="dstv">MTN</option>
                  <option value="startimes">GLO</option>
                  <option value="startimes-on">9mobile</option>
                  <option value="box-office">Smile</option>
                </Select>

                <FormControl mb='5'>
                  <FormLabel>Phone Number </FormLabel>
                  <Input type='text' />
                  <FormHelperText>We'll never share your phonenumber.</FormHelperText>
                </FormControl>
             

              {/* Reusable Box component with additional styling */}
              <Text className="">Select Amount</Text>
             <Box display={['flex']} flexWrap='wrap' gap='4' className="">
             <AirtimeBox
                amount="#2700"
                cashback="#20 cashback"
              />

               <AirtimeBox
                amount="#2700"
                cashback="#20 cashback"
              />

               <AirtimeBox
                // title="Jinja/month"
                amount="#2700"
                cashback="#20 cashback"
              />
               <AirtimeBox
                // title="Jinja/month"
                amount="#2700"
                cashback="#20 cashback"
              />

               <AirtimeBox
                // title="Jinja/month"
                amount="#2700"
                cashback="#20 cashback"
              />

               <AirtimeBox
                // title="Jinja/month"
                amount="#2700"
                cashback="#20 cashback"
              />
             </Box>
               </Box>

               <Box className="" w={['full' ,'30%']}>
                <Image src={smartimg} />
               </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </LayoutComp>
  );
};

export default BillPayment;
