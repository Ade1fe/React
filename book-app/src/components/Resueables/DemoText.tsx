import { Box,Text } from "@chakra-ui/react"

const DemoText = () => {
  return (
    <Box w={['100%', '100%', '60%']}>
      <Text as='h1'  fontSize={['md', 'large', 'x-large']} mb='3' fontWeight='semibold'>
      Demon Slayer: Kimetsu no Yaiba
      </Text>

      <Text as='p'  fontSize={['sm', 'sm', 'md']} my='2' noOfLines={[0, 5, 6, 7]}>
      "Demon Slayer: Kimetsu no Yaiba" is a renowned manga series created by Koyoharu Gotouge that inspired a hit anime and film. It's set in Taisho-era Japan and follows Tanjiro Kamado, who becomes a demon slayer after his family is attacked, and his sister Nezuko turns into a demon. The anime, especially "Demon Slayer: Mugen Train," received high praise for its animation and storytelling, making "Demon Slayer" a global sensation in the anime and manga world. It has a massive fan base due to its gripping plot, memorable characters, and exceptional art.
      </Text>

     
     
    </Box>
  )
}

export default DemoText

