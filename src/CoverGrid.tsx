import { Link } from 'react-router-dom';
export default function CoverGrid({ covers }: { covers: any[] }) {
    return (
        <div>
            {covers.map((cover) => (
                <div key={cover.id} className="col-sm-4 border rounded p-4 mb-4">
                    <div className="card">
                        <img src={cover.thumbnailUrl} className="card-img-top" alt={cover.title} title={cover.title} />
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