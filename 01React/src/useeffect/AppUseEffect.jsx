import { useState,useEffect} from "react";


export default function AppUseEffect() {

    const [user, setUser] =useState([]);
    const [name, setName] = useState('');
    const [count, setCount] = useState(30);

    
    // async function fetchGitHubUser() {
    //     const response = await fetch('https://api.github.com/users');
    //     const data = await response.json();
    //     setUser(data);
    // }
    // fetchGitHubUser();
    //this will cause infinite loop because every time state is updated component re-renders and fetchGitHubUser is called again
    //it rerenders again and again thats why we use useEffect to control when to call this function

    useEffect(() => {
        async function fetchGitHubUser() {
            const response = await fetch(`https://api.github.com/users?per_page=${count}`);
            const data = await response.json();
            setUser(data);
        }
        fetchGitHubUser();
    }, [count]); //empty dependency array means this effect runs only once after the initial render
    //if we put count in dependency array then this effect will run every time count changes
    //also useeffect run at last after rendering the component, and it will futher update the state 

    function handleChange(e) {
        setName(e.target.value.toUpperCase());
    }
    //here we need to control over value of input field to change it to uppercase
    //so we use useState to manage the value of input field

    return (
        <div className="AppUseEffect">
            <h1>GitHub User</h1>
            <input type="text"  value={name} onChange={handleChange} />
            <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
            {/* we can directly call function in onChange */}
            <div style = {{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    user.map(user => (
                        <img src={user.avatar_url} alt={user.login} style={{ width: '100px', height: '100px', margin: '10px' }} key={user.login}/>
                    ))
                }
                
            </div>

        </div>
    )
}