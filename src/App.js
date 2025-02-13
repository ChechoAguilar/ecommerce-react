import './App.css';

const user = {
  name: "Maria",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};


function Button(){  
  function handleClick(){
    alert('The button was clicked.');     
  }
  return (
    <button onClick={handleClick}>Clic me</button>
  );
}


function App() {
  
  return (
    <>
      <h1>{user.name}</h1>
      <img className="avatar"
        src = {user.imageUrl}
        alt = {"Foto de " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: user.imageSize / 2,
        }}
        />
    </>
);
}

export default App;
