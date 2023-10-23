


import { useParams } from 'react-router-dom';
import useBookDetails from '../../components/Resueables/useBookDetails';
import BookDetailComponent from '../../components/Resueables/BookDetailComponent';
import { Mainlayout } from '../../assets';


const BookDetailPage = () => {
  const { bookKey } = useParams<{ bookKey: string }>();
  const validBookKey = bookKey || ''; 
  const bookData = useBookDetails(validBookKey);

  return (
    <Mainlayout>
      <BookDetailComponent bookData={bookData} bookKey={validBookKey} />
    </Mainlayout>
  );
};

export default BookDetailPage;