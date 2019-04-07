import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <h1>{"Memory Game"}</h1>
                        </li>
                    </ul>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <h1 className="navbar-right">{"Score: " + props.score + "| Top Score: " + props.topScore}</h1>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
