


import React from 'react';
import { Formik, Form, Field, FieldProps } from 'formik';
import { InputGroup, InputLeftElement, Input, Button, Flex, Icon, Box, } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';


interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  searchType: string;
  handleTypeChange: (searchType: string) => void;
}



const SearchBar: React.FC<SearchBarProps> = ({ onSearch, searchType, handleTypeChange }) => {
  const handleSubmit = (values: { searchTerm: string }, { resetForm }: { resetForm: () => void }) => {
    onSearch(values.searchTerm);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ searchTerm: '' }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Flex flexDirection={['column', 'column', 'row']} alignItems="center" w='full' gap='3' mb='6'>
      <Box display={['grid', 'grid', "flex"]} w='full' alignItems="center" gap='1'>
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

        {/* <Box> */}

          <Box display="flex" px={3} w={['100%', '100%', '50%']} justifyContent='space-between' gap={2}>
          <div>
        <input
          type="radio"
          id="album"
          name="searchType"
          value="album"
          checked={searchType === "album"}
          onChange={() => handleTypeChange("album")}
        />
        <label htmlFor="album">Albums</label>
      </div>
      <div>
        <input
          type="radio"
          id="track"
          name="searchType"
          value="track"
          checked={searchType === "track"}
          onChange={() => handleTypeChange("track")}
        />
        <label htmlFor="track">Tracks</label>
      </div>
      <div>
        <input
          type="radio"
          id="artist"
          name="searchType"
          value="artist"
          checked={searchType === "artist"}
          onChange={() => handleTypeChange("artist")}
        />
        <label htmlFor="artist">Artists</label>
      </div>
          </Box>
        </Box>
      {/* </Box> */}

        <Button type="submit" px='4' py='1' borderRadius='md'  ml={[0, 0, 6]} bg='purple.800' colorScheme="teal" w={['full' , 'full', 'max-content']}>Search</Button>
        </Flex>
      </Form>
    </Formik>
  );
};


export default SearchBar;
