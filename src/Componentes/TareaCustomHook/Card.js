import "./style.css";

const CompCard = ({
  name,
  species,
  gender,
  status,
  origin,
  image,
  location,
}) => {
  return (
    <div className={`card`}>
      <img src={image} className="card-img-top" alt="rick-and-morty" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6>{`Gender : ${gender}\n`}</h6>
        <p className="card-text">
          {`He/She is from ${origin.name} `}
          <br />
          {`This character is ${species} and he/she is ${status}
            and is found  ${location.name}`}
        </p>
      </div>
    </div>
  );
};

export default CompCard;
