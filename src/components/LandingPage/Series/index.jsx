import { Link } from 'react-router-dom'
import series from "../../../assets/series.png"

const Series = () => {
  return (
    <Link to="/series">
      <section className="section">
        <img
          src={series}
          alt="series"
          className="sectionImg"
        />
        <h2 className="sectionTittle">Series</h2>
      </section>
    </Link>
  );
}

export default Series
