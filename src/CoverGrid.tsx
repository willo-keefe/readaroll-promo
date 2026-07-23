import { Link } from 'react-router-dom';
export default function CoverGrid({ covers }: { covers: any[] }) {
    return (
        <div>
            {covers.map((cover) => (
                <div key={cover.id} className="col-sm-4 rounded p-2 mb-4 mt-2">
                    <Link to={`/manuscript/${cover.id}`} className="text-decoration-none text-dark">
                        <div className="card h-100 text-dark" style={{ transition: 'transform 0.1s ease-in-out', cursor: 'pointer' }} onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')} onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}>
                            {cover.cover_path ? (
                                <div className="d-flex justify-content-center">
                                    <img src={cover.cover_path} className="card-img-top" alt={cover.title} title={cover.title} />
                                </div>
                            ) : (
                                <div className="d-flex justify-content-center">
                                    <div className="card-img-top flex-column bg-light d-flex align-items-center justify-content-center" style={{ height: '200px' }}>
                                        <span className="m-2">{cover.title}</span>
                                        <span className="m-2">{cover.author}</span>
                                    </div>
                                </div>
                            )}
                            <div className="card-body">
                                <h5 className="card-title">{cover.title}</h5>
                                <p className="card-text">{cover.author}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}