import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Projects() {
  return (
    <>
    <div><br></br><br></br>
      <h4 style={{fontFamily: "Roboto, serif",textAlign:"center"}}>All Projects</h4><br></br><br></br>
    <div>
    <Container>
      <Row>
        <Col><img className='resid' src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/home-decor-advice/design-and-style/most-beautiful-indoor-swimming-pools-for-you/swim-to-the-sun-pool.jpg" alt="galleryimg"/></Col>
        <Col><img className='resid' src="https://i.pinimg.com/736x/7d/a8/85/7da88507b29b728926aba6fb694f21e7.jpg" style={{height:"365px",marginLeft:"-24px",width:"522px"}} alt="galleryimg"/></Col>
      </Row>
      <Row>
        <Col><img className='resid' src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201411221409325821-de73ad28e71111ec89170a58a9feac02.jpg" style={{marginTop:"-1px",height:"300px"}} alt="galleryimg"/></Col>
        <Col><img className='resid' src="https://ychef.files.bbci.co.uk/1280x720/p0h9k5dl.jpg" style={{marginLeft:"-24px",marginTop:"-0.5px",height:"300px"}} alt="galleryimg"/></Col>
        <Col><img className='resid' src="https://static.wixstatic.com/media/dbfc5b_bf8fd1c5f53843b7ad0b43627f15bbdb~mv2.jpeg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dbfc5b_bf8fd1c5f53843b7ad0b43627f15bbdb~mv2.jpeg" style={{height:"300px",marginLeft:"-48px"}} alt="galleryimg"/></Col>
      </Row>
    </Container>
    </div>
    </div><br></br><br></br><br></br>
    </>
  );
}

export default Projects;