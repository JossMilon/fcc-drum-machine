const Pad = ({setDisplay, keyPressed, id, keyCode, sound}) => {
    const handleClick = (e) => {
        e.target.children[0].play();
        setDisplay(id);
    };
    if (keyPressed===Number(keyCode)) {
        console.log(keyPressed + " is the key pressed so I play " + id);
        const audio = new Audio(sound);
        audio.play();
        setDisplay(id);
    };
    return (
        <button onClick={handleClick} id={id} className="drum-pad">
        {id}
        <audio src={sound}></audio>
        </button>
    )
};

export default Pad;