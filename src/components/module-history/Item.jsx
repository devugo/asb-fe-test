export const Item = ({
    activity,
    date,
    type
}) => {
    return (
        <div className="item">
            <div className="name">
                <p>{activity}</p>
            </div>
            <div className="footer">
                <p>{date}</p>
                <span className="dot"></span>
                <p>{type}</p>
            </div>
        </div>
    )
}