import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProfilePhoto from "./../assets/profile-pic.jpg"
const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="home-container py-5">
      <div className="container">
        {/* Profile Section */}
        <div className="row mb-5 align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={ProfilePhoto}
              alt="Profile"
              className="profile-img rounded-circle"
            />
          </div>
          <div className="col-md-4 text-center">
            <h2 className="mb-3">Pournima Mane</h2>
            <ul className="list-unstyled">
              <li>
                <strong>Username:</strong> pournima1111
              </li>
              <li>
                <strong>Email:</strong> mane@gmail.com
              </li>
              <li>
                <strong>Mobile:</strong> 7050716493
              </li>
            </ul>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <button className="btn btn-danger my-1 w-100">Log Out</button>
            <button className="btn btn-primary my-1 w-100" onClick={handleShow}>
              Edit Profile
            </button>
            <button className="btn btn-warning my-1 w-100">
              Delete Profile
            </button>
            <button className="btn btn-success my-1 w-100">Create Post</button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <h3 className="text-center mb-3">Feeds</h3>
            {[1, 2, 3].map((_, index) => (
              <div className="card shadow-sm mb-3" key={index}>
                <img
                  src="https://tse4.mm.bing.net/th/id/OIP.ZHEaEn6yqgb76ySxdb3S6gHaE-?rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="Feed"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Beautiful Scenery</h5>
                  <p className="card-text">
                    This is an example post with amazing views.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* My Post */}
          <div className="col-md-6 mb-4">
            <h3 className="text-center mb-3">My Post</h3>
            <div className="card shadow-sm">
              <img
                src="https://th.bing.com/th/id/R.13820971a962ffbeb63a8fef36185b16?rik=vZ3lu%2blbhy6jxw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f03%2f10%2f319576-photography-landscape-nature-water-grass-trees-plants-sunrise-lake.jpg&ehk=6WS2p9KknQa9F%2bgAH16n44NReuUyS2rzXah2zy7kiAw%3d&risl=&pid=ImgRaw&r=0"
                alt="My Post"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Sunrise by the Lake</h5>
                <p className="card-text">
                  Capturing calmness and nature's beauty during sunrise.
                </p>
              </div>
              <button>Edit</button>
            </div>
            <div className="card shadow-sm">
              <img
                src="https://th.bing.com/th/id/R.13820971a962ffbeb63a8fef36185b16?rik=vZ3lu%2blbhy6jxw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f03%2f10%2f319576-photography-landscape-nature-water-grass-trees-plants-sunrise-lake.jpg&ehk=6WS2p9KknQa9F%2bgAH16n44NReuUyS2rzXah2zy7kiAw%3d&risl=&pid=ImgRaw&r=0"
                alt="My Post"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Sunrise by the Lake</h5>
                <p className="card-text">
                  Capturing calmness and nature's beauty during sunrise.
                </p>
              </div>
              <button>Edit</button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <form className="login-form">
             <img
              src="https://i1.rgstatic.net/ii/profile.image/1054505286258688-1628425060244_Q512/William-Blakeney.jpg"
              alt="Profile"
              className="profile-img rounded-circle"
            />
            <div class="form-group">
              <input
                type="text"
                className="form-control my-2 w-100"
                placeholder="Enter username"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                className="form-control my-2 w-100"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <input
                type="number"
                className="form-control my-2 w-100"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Mobile"
              />
            </div>

            <button type="submit" className="btn btn-primary  mt-3 login-btn">
              Submit
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;