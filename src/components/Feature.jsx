import { MdKeyboardArrowRight } from "react-icons/md";

export default function Feature(props){
    return (
        <section className="pointer--container">
            {props.icon}
            <div className="point--content">
            <h3 className="point--heading">{props.heading}</h3>
            <p className="point--pointer">{props.point}</p>
            </div>
            <MdKeyboardArrowRight />
        </section>
    )
}
