import { Link } from 'react-router-dom';
export default function CoverGrid({ covers }: { covers: any[] }) {
    return (
        <div>
            {covers.map((cover) => (
                <div key={cover.id} className="col-sm-4 border rounded p-4 mb-4">
                    <div className="card">
                        {cover.cover_path ? (
                            <img src={cover.cover_path} className="card-img-top" alt={cover.title} title={cover.title} />
                        ) : (
                            <div className="card-img-top bg-light d-flex align-items-center justify-content-center" style={{ height: '240px' }}>
                                <span className="m-3">{cover.title}</span>
                                <span className="m-3">{cover.author}</span>
                            </div>
                        )}
                        <div className="card-body">
                            <h5 className="card-title">{cover.title}</h5>
                            <p className="card-text">{cover.description}</p>
                            <Link to={`/manuscript/${cover.id}`} className="m-3 link">Read Now</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}