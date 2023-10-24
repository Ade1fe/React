import { Image } from "@chakra-ui/react"
import pic from "../../assets/images/kimi.jpg"


const Advert = () => {
  return (
   <Image w={['300px','250px','300px']} mx={['auto', '0px']} h='auto' src={pic} />
  )
}

export default Advert
