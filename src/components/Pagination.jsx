import './Pagination.css';

export default function Pagination(props) {
    const pages = new Array(Math.ceil(props.total / props.step));

    for (let i = 0; i < pages.length; i++) {
        pages[i] = i + 1;
    }

    return (
        <div className="pagination">
            {props.page > 1 && (
                <span onClick={() => props.onGo(props.page - 1)}>prev</span>
            )}

            {pages.map((page) => (
                <span
                    key={page}
                    onClick={() => props.onGo(page)}
                    className={page === props.page ? 'active' : ''}
                >
                    {page}
                </span>
            ))}

            {props.total > props.page * props.step && (
                <span onClick={() => props.onGo(props.page + 1)}>next</span>
            )}
        </div>
    );
}
