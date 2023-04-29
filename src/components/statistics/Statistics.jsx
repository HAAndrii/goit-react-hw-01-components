import propTypes from "prop-types";

const Statistics = ({title, stats}) => {
return (<section className="statistics">
  {title && (<h2 className="title">{title}</h2>)}
  
  <ul className="stat-list">
    {stats.map(el => (
      <li key={el.id} className="item">
        <span className="label">{el.label}</span>
        <span className="percentage">{el.percentage}%</span>
      </li>
    ))}
  </ul>
</section>)
}

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape(
      {
        id: propTypes.string.isRequired,
        label: propTypes.string,
        percentage: propTypes.number
      }
      )
    )
}

export default Statistics