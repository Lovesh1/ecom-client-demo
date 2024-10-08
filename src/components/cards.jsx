
const cards = ({card}) => {
  return (
    <>
        <div className="card-container">

            {card.map((info,index) => (<div className="inner-card">
                <div className="card-img" key={index}>
                    <img src={info.image}></img>
                </div>
                <div className="card-text">
                    <h3>{info.head}</h3>
                    <p>{info.para}</p>
                </div>
            </div>
           ) )}

        </div>
    </>
  )
}

export default cards
