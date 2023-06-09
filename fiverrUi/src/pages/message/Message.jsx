import { Link } from "react-router-dom";
import "./Message.scss";

function Message() {
  return (
    <div className="message">
      <div className="container">
        <span className="breadCrumbs">
          <Link to="/messages">MESSAGES</Link>> JOHN DOE >
        </span>
        <div className="messages">
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              cupiditate distinctio ullam perferendis incidunt dicta enim
              corrupti vel quia, debitis reiciendis facere odit dolorum dolore
              modi aut. Ea, totam eveniet!
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              cupiditate distinctio ullam perferendis incidunt dicta enim
              corrupti vel quia, debitis reiciendis facere odit dolorum dolore
              modi aut. Ea, totam eveniet!
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              cupiditate distinctio ullam perferendis incidunt dicta enim
              corrupti vel quia, debitis reiciendis facere odit dolorum dolore
              modi aut. Ea, totam eveniet!
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              cupiditate distinctio ullam perferendis incidunt dicta enim
              corrupti vel quia, debitis reiciendis facere odit dolorum dolore
              modi aut. Ea, totam eveniet!
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              cupiditate distinctio ullam perferendis incidunt dicta enim
              corrupti vel quia, debitis reiciendis facere odit dolorum dolore
              modi aut. Ea, totam eveniet!
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              cupiditate distinctio ullam perferendis incidunt dicta enim
              corrupti vel quia, debitis reiciendis facere odit dolorum dolore
              modi aut. Ea, totam eveniet!
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              cupiditate distinctio ullam perferendis incidunt dicta enim
              corrupti vel quia, debitis reiciendis facere odit dolorum dolore
              modi aut. Ea, totam eveniet!
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              cupiditate distinctio ullam perferendis incidunt dicta enim
              corrupti vel quia, debitis reiciendis facere odit dolorum dolore
              modi aut. Ea, totam eveniet!
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              cupiditate distinctio ullam perferendis incidunt dicta enim
              corrupti vel quia, debitis reiciendis facere odit dolorum dolore
              modi aut. Ea, totam eveniet!
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              cupiditate distinctio ullam perferendis incidunt dicta enim
              corrupti vel quia, debitis reiciendis facere odit dolorum dolore
              modi aut. Ea, totam eveniet!
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            placeholder="Write a message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Message;
