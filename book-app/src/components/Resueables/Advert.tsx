import { Image } from "@chakra-ui/react"

interface AdvertProps {
  pic: string;
 
}

const Advert: React.FC<AdvertProps> = ({ pic }) => {
  return (
   <Image w={['300px','250px','300px']} mx={['auto', '0px']} h='auto' src={pic} />
  )
}

export default Advert
