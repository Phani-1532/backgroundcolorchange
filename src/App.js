import './App.css';

function App() {
  return (
    <>
      <div>
          <h1>Welcome to React!</h1>
          <i>BackGround Color Changer</i>
          <input type='color' onChange={
            (e) => {
            document.body.style.background = e.target.value
          }} />
      </div>

    </>
  );
}

export default App;
