export const MainContentContainer = ({
    leftSide,
    rightSide
}) => {
    return (
        <div className="main-content">
            <div className="asb-container">
                <div className="content left">
                    {leftSide}
                </div>
                <div className="content right">
                    {rightSide}
                </div>
            </div>
        </div>
    )
}