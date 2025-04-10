import NoteCard from '../../components/Cards/NoteCard';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />

      <div className='container mx-auto'>
        <NoteCard
          title='Note 1'
          date='2023-01-01'
          content='some content'
          tags='#tag1'
          isPinned={true}
          onEdit={() => {}}
          onDelete={() => {}}
          onPinNote={() => {}}
        />
      </div>
    </>
  );
};

export default Home;
