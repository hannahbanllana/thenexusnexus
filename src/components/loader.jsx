import "./loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <div className="loader-content">
        <p>Loading...</p>
        <img src="/loading.gif" alt="Loading..." style={{ width: "150px" }} />
      </div>
    </div>
  );
}
