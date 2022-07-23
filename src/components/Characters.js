//recibiendo character por props
export default function Characters(props) {
  const { characters, setCharacters} = props;

  const resetCharacters = () =>{
    setCharacters(null)
  }
  return (
    <div className="characters">
      <h1>CHARACTERS</h1>
      <span className="back-home" onClick={resetCharacters}>Return Home</span>
      <div className="container-characters">
        {characters.map((characters, index) => (
          <div className="character-container" key={index}>
            <div>
            <img src={characters.image} alt={characters.name}></img>
            </div>
            <div>
                {characters.name}
                <h6>
                    { characters.status ==="Alive" ? (
                        <>
                        <span className="alive"/>Alive
                        </>
                    ) : (
                       <>
                       <span className="dead"/>Dead
                       </>
                    )}
                </h6>
                <p>
                    <span className="text-grey">Episodes: </span>
                    <span  className="text-grey">{characters.episode.length}</span>
                </p>
                <p>
                    <span className="text-grey">Specie: </span>
                    <span  className="text-grey">{characters.species}</span>
                </p>
                {/* <h6 className="Alive">{characters.status}</h6> */}
            </div>
            
            {/* <p>{characters.name}</p> */}
           
          </div>
        ))}
      </div>
      <span className="back-home" onClick={resetCharacters}>Return Home</span>
    </div>
  );
}
