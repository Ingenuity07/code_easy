const Carousel = () => {

    return (

<div >
    
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src='images/background1.jpg' style={{opacity:"0.6"}} alt=""></img>
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5>First slide label</h5> */}
                            <p style={{fontSize:"2rem"}} >"Talk is Cheap , Show me the code"</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <img src='images/background2.jpg' style={{opacity:"0.6"}} alt=""></img>
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5>First slide label</h5> */}
                            <p style={{fontSize:"2rem"}}>"One ring to rule them All"</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <img src='images/background3.jpg' style={{opacity:"0.6"}} alt=""></img>
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5>First slide label</h5> */}
                            <p style={{fontSize:"2rem"}}>"I Can Do this All Day"</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    );
}

export default Carousel;