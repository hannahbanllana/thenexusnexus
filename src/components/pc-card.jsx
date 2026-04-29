import './pc-card.css'

function PCCard({ name, time, status }) {
    return(
        <div className="pc-card">
            <div className="pc-info">
                <h2>{name}</h2>
                <p>{time}</p>
            </div>
            <div className={`pc-status ${status}`}></div>
        </div>
    );
}

export default PCCard