import Greeting from "./components/Greeting";
import Tabs from "./components/Tabs";
import UserList from "./components/UserList";
import Accordion from "./components/Accordion";
import Counter from "./components/Counter";



function App() {
   //  const[count,setCount] = useState(false);
    return (
    <>
    <Greeting Name = "Sameer"/>
    <Greeting Name = "Kareem"/>
    <Greeting Name = "Mustafa"/>
    <Greeting Name = "Shalem"/>
    <Greeting Name = "Daniel"/>

    
    {/* <Tabs/> */}
    {/* <UserList/> */}

  
       <Accordion title = 'what is name' answer = 'sameer'/>
      <Accordion title = 'what is name' answer = 'sameer'/>
      <Accordion title = 'what is name' answer = 'sameer'/> 
      
      <Accordion/>
      <Counter/>

{/* 

      <div>
<button onClick={() => setCount((count) => count + 1)}>count is {count}
</button>
 </div> */}

   </>
   );
}

export default App;


