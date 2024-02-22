import React from 'react';
import { Formik, Form, Field, FieldProps } from 'formik';
import { InputGroup, InputLeftElement, Input, Button, Flex, Icon } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';


interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (values: { searchTerm: string }, { resetForm }: { resetForm: () => void }) => {
    onSearch(values.searchTerm);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ searchTerm: '' }}
      onSubmit={handleSubmit}
      
    >
      <Form >
        <Flex align="center" mb={6}>
          <Field name="searchTerm">
            {({ field }: FieldProps<string>) => (
              <InputGroup>
                <InputLeftElement pointerEvents="none" mt={3} ml={3}>
                  <Icon as={FaSearch} color="gray.300" />
                </InputLeftElement>
                <Input
                  {...field}
                  _focus={{
                    outline: "none",
                  }}
                  w='full'
                  focusBorderColor='purple'
                  pl='10'
                  borderRadius='3xl'
                  bg="#111"
                  py={2}
                  pr={2}
                  type="text"
                  placeholder="Search..."
                />
              </InputGroup>
            )}
          </Field>
          <Button type="submit" ml={2} colorScheme="teal">Search</Button>
        </Flex>
      </Form>
    </Formik>
  );
};

export default SearchBar;
