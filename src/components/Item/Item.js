import React from "react";
import './Item.css';

class Item extends React.Component {
    done = (e) => {
        e.target.classList.toggle("done")
      }
    render() {
        return  (
            <li onClick={this.done}>
                {this.props.item}
            </li>
        )
    }
}

export default Item;