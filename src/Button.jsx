function Button(){
    const handleClick = () => console.log('Button clicked'); 
    
    const handleClick2 = (name) => console.log(`${name} stop clicking me`);
    
    return <button onClick={() => handleClick2("Tanjir")}>Click me</button>;
}
export default Button;