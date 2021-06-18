export default function ListHead() {
    return (
        <div className="full-width row m-0 list pt-3">
            <div className="col coinicon-container mb-1">
                
            </div>
            <div className="col mb-1 small">
                <b>Name</b>
            </div>
            <div className="col text-end mb-1 small">
                <b>Price</b>
            </div>
            <div className="col-sm text-end small mb-1">
                <b>last 24h</b>
            </div>
            <div className="col-sm d-flex justify-content-end mb-1 small">
                <b>24h %</b>
            </div>

        </div>
    )
}