import "./loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <div className="loader-content">
        <h2>Loading...</h2>
        <img src="/loading.gif" alt="Loading..." style={{ width: "250px" }} />
      </div>
    </div>
  );
}
