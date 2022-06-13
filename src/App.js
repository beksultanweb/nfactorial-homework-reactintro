import "./App.css";
import Header from "./components/header";
function App() {
	
  const images = [
    {
      url: "https://source.unsplash.com/gYl-UtwNg_I/1500x1500",
      text: "HEY",
      alt: "1"
    },
    {
      url: "https://source.unsplash.com/3MNzGlQM7qs/1500x1500",
      text: "LET'S",
      alt: "2"
    }, 
    {
      url: "https://source.unsplash.com/rFKUFzjPYiQ/1500x1500",
      text: "GIVE",
      alt: "3"
    },
    {
      url: "https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d", 
      text: "ALL",
      alt: "4"
    },
    {
      url: "https://source.unsplash.com/ITjiVXcwVng/1500x1500",
      text: "YOU CAN",
      alt: "5"
    }
  ];
  return (
    <div>
      <Header/>
      <div className="content-wrapper">
      {images.map((item) => (
        <div className="motivated">{item.text}
          <img src={item.url} alt={item.alt}/>
        </div>
        
        
        ))}
      </div>
    </div>
  );
}

export default App;