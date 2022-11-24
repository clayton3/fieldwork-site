const comingSoon = ({name, message}) => {
    return (
        <div className={"comingSoon"}>
            <div>
                <h3>{name} Coming Soon</h3>
                <p>
                    {message}
                </p>
            </div>
        </div>
    );
};