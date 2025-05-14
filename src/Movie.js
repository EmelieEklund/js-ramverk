import star from "./images/star.png";
import del from "./images/delete.png";

export default function Movie(props) {

    function getStars(nbrOfStars) {
        return Array.from({ length: nbrOfStars }, (_, i) => (
            <img key={i} src={star} alt="Star" width={25} height={25} className="me-1" />
        ));
    }

    return (
        <li className="list-group-item d-flex align-items-center justify-content-between shadow p-3 mb-3 bg-light rounded">
           <span> { props.item.title } </span>
           <div className="d-flex justify-content-end">
           <span> { getStars(props.item.grade) } </span>
            <button type="button" className="btn btn-sm p-0" onClick={() => {props.deleteItem(props.item.id)}}> <img src={del} width="35" height="35" /> </button>
            </div>
        </li>
    )
}