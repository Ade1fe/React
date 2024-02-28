import { Box } from '@chakra-ui/react'
import { GetSeveralAlbums, JobAdverts, SearchAlbums,  } from '..'

const AlbumPage = () => {
  return (
    <Box>
        <SearchAlbums />
      <JobAdverts />
      <GetSeveralAlbums />
    </Box>
  )
}

export default AlbumPage
