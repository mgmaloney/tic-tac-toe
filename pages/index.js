import TicTaccer from '../components/ticTaccer';

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Tic-Tac-Toe!</h1>
      <TicTaccer />
    </div>
  );
}

export default Home;
