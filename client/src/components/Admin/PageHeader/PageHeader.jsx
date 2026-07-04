import "./PageHeader.css";

function PageHeader({
    title,
    buttonText,
    onClick,
}) {
    return (
        <div className="page-header">

            <div>
                <h1>{title}</h1>
                <p>Manage your store products</p>
            </div>

            <button
                className="primary-btn"
                onClick={onClick}
            >
                {buttonText}
            </button>

        </div>
    );
}

export default PageHeader;