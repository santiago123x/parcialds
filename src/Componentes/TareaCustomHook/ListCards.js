import CompCard from "./Card";
import "./style.css";
import Loading from "../Load-Error/Loading";
import Error from "../Load-Error/Error";

const ListCards = ({ mode, data, loading, error }) => {
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <div className="conteneor">
          {data &&
            data.results &&
            data.results.map((char) => {
              return (
                <div>
                  <CompCard
                    mode={mode}
                    key={char.id}
                    name={char.name}
                    species={char.species}
                    gender={char.gender}
                    status={char.status}
                    origin={char.origin}
                    image={char.image}
                    location={char.location}
                  />
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default ListCards;
