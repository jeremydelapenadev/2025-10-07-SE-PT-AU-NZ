function Movie({ year, synopsis, title }) {
  return (
    <>
      <li>
        <h3>{title}</h3> <span>({year})</span>
        <div>{synopsis}</div>
      </li>
    </>
  );
}

export default Movie;