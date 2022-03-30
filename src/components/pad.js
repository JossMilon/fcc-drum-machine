const Pad = ({setDisplay, padName, sound}) => {
    const handleClick = (e) => {
        e.target.children[0].play();
        setDisplay(padName);
    };
    return (
        <button onClick={handleClick} className="drum-pad">
        {padName}
        <audio src={sound}></audio>
        </button>
    )
};

export default Pad;