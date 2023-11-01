
import { Box, useColorModeValue } from '@chakra-ui/react'
import { Advert, AdvertTwo, Carousels, DemoText, Mainlayout, pic3, pic4 } from '../../assets'
import BookOne from '../../components/Holders/BookOne'
import pic from "../../assets/images/nine.jpg"
import BookTwo from '../../components/Holders/BookTwo'
import BookThree from '../../components/Holders/BookThree'
import BookFour from '../../components/Holders/BookFour'
import BookFive from '../../components/Holders/BookFive'
import pics from "../../assets/images/jane.jpg"

const BookPage = () => {
  const bgs = useColorModeValue('#f1f1f1', 'gray.700');

  return (
    <Mainlayout>
      <Carousels img2={pic3} img1={pic4} />
      <BookOne />
      <Box  display={['grid', 'flex', 'flex']} justifyContent='center' gap={4} alignItems='center' px='4' mt={['12',14,20]}>
      <Advert pic={pic} />
      <DemoText pic=''
  headings="Nineteen Eighty-Four "
  texts={`Nineteen Eighty-Four (also published as 1984) is a dystopian novel and cautionary tale by English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime. Thematically, it centres on the consequences of totalitarianism, mass surveillance and repressive regimentation of people and behaviours within society.More broadly, the novel examines the role of truth and facts within societies and the ways in which they can be manipulated.`}
/>
      </Box>

      <Box bg={bgs} pb={3}>
      <BookTwo />
      <BookThree />
      </Box>

      <BookFour />
      <BookFive />

      <AdvertTwo pic={pics} headings='Jane Eyre ' texts='The first American edition was published the following year by Harper & Brothers of New York.[2] Jane Eyre is a Bildungsroman which follows the experiences of its eponymous heroine, including her growth to adulthood and her love for Mr Rochester, the brooding master of Thornfield Hall.
      It was published under her pen name "Currer Bell" on 19 October 1847 by Smith, Elder & Co. of London'/>

    </Mainlayout>
  )
}

export default BookPage
