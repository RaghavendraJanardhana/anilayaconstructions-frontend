import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Projects() {
  const handleVideoEnd = (videoId) => {
    const iframe = document.getElementById(videoId);
    iframe.src = iframe.src; // Reload the same video
  };

  return (
    <>
      <div>
        <br />
        <br />

        {/* Image Gallery with Uniform Size Cards */}
        <div style={{ textAlign: "center" }}>
          <Container>
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/home-decor-advice/design-and-style/most-beautiful-indoor-swimming-pools-for-you/swim-to-the-sun-pool.jpg"
                    alt="galleryimg"
                    style={{
                      height: "250px", // Set a fixed height
                      width: "100%", // Ensure the width fills the column
                      objectFit: "cover", // Maintain aspect ratio and cover the area
                    }}
                  />
                  <Card.Body>
                    <Card.Title>Project 1</Card.Title>
                    <Card.Text>Description of the project goes here.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://i.pinimg.com/736x/7d/a8/85/7da88507b29b728926aba6fb694f21e7.jpg"
                    alt="galleryimg"
                    style={{
                      height: "250px", // Set a fixed height
                      width: "100%",
                      objectFit: "cover", // Maintain aspect ratio and cover the area
                    }}
                  />
                  <Card.Body>
                    <Card.Title>Project 2</Card.Title>
                    <Card.Text>Description of the project goes here.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201411221409325821-de73ad28e71111ec89170a58a9feac02.jpg"
                    alt="galleryimg"
                    style={{
                      height: "250px", // Set a fixed height
                      width: "100%",
                      objectFit: "cover", // Maintain aspect ratio and cover the area
                    }}
                  />
                  <Card.Body>
                    <Card.Title>Project 3</Card.Title>
                    <Card.Text>Description of the project goes here.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://ychef.files.bbci.co.uk/1280x720/p0h9k5dl.jpg"
                    alt="galleryimg"
                    style={{
                      height: "250px", // Set a fixed height
                      width: "100%",
                      objectFit: "cover", // Maintain aspect ratio and cover the area
                    }}
                  />
                  <Card.Body>
                    <Card.Title>Project 4</Card.Title>
                    <Card.Text>Description of the project goes here.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://static.wixstatic.com/media/dbfc5b_bf8fd1c5f53843b7ad0b43627f15bbdb~mv2.jpeg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dbfc5b_bf8fd1c5f53843b7ad0b43627f15bbdb~mv2.jpeg"
                    alt="galleryimg"
                    style={{
                      height: "250px", // Set a fixed height
                      width: "100%",
                      objectFit: "cover", // Maintain aspect ratio and cover the area
                    }}
                  />
                  <Card.Body>
                    <Card.Title>Project 5</Card.Title>
                    <Card.Text>Description of the project goes here.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <br />
        <br />

        {/* Videos in Flexbox */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px", // space between videos
            flexWrap: "wrap", // allow videos to wrap to the next line if needed
          }}
        >
          {/* First YouTube video embed */}
          <div style={{ flex: "1 1 45%", maxWidth: "600px" }}>
            <iframe
              id="video1"
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/8Y2XytmRvCc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onEnded={() => handleVideoEnd("video1")}
            ></iframe>
          </div>

          {/* Second YouTube video embed */}
          <div style={{ flex: "1 1 45%", maxWidth: "600px" }}>
            <iframe
              id="video2"
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/w7JpnKFfyTs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onEnded={() => handleVideoEnd("video2")}
            ></iframe>
          </div>

          {/* Third YouTube video embed */}
          <div style={{ flex: "1 1 45%", maxWidth: "600px" }}>
            <iframe
              id="video3"
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/xUVvQfvIYyo" // New video ID
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onEnded={() => handleVideoEnd("video3")}
            ></iframe>
          </div>
        </div>

        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default Projects;
