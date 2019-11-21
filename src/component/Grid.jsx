import React, {Component} from 'react';
class Grid extends Component {
    constructor(props) {
    super(props);
    this.state = {
        paragraf: "Ini menggunakan State",
        namakelas :"card",
        paragrafprp: props.propsa
        
    };
};
    render() {
        return (
         <div>
             <nav class="navbar navbar-expand-lg navbar-light warna">
                        <a class="navbar-brand" href="#"><img src={require('../logo/logo.png')}></img></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown link
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    </ul>
                </div>
                </nav>
                <div className="container">

                <div class={this.state.namakelas}>
                    <div class="card-body warna">
                        {this.state.paragraf}
                    </div>
                </div>

           <div className="row"> 
            <div className="col-md-9">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={require('../gambar/Cashback_Rumah_Ceria_melalui_LinkajaHome_Page_846x400_D.jpg')} class="d-block w-100" alt="..."></img>
                        </div>
                        <div class="carousel-item active">
                            <img src={require('../gambar/Home-Page-Web-Minipack-Shopee_D.jpg')} class="d-block w-100" alt="..."></img>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div> 
               </div>  
            <div class="col-md-3 ">
            <div class="card bg-light text-white">
  <img src={require('../gambar/mini-banner-1-raw.png')} class="card-img" alt="..."></img>
  <div class="card-img-overlay">
    <h5 class="card-title">{this.state.paragrafprp}</h5>
    <p class="card-text"></p>
  </div>
</div>

      <div class="card bg-light text-white">
  <img src={require('../gambar/mini-banner-2-raw.png')} class="card-img" alt="..."></img>
  <div class="card-img-overlay">
        <h5 class="card-title">{this.props.isiparagraf}</h5>
    <p class="card-text"></p>
  </div>
</div>            
            </div>
            </div> 
            <br></br>
            <h5>Add-On Unggulan</h5>

            <div class="row">
                <div class="col-sm-3">
                <div class="card-deck">
                    <div class="card">
                        <img src={require('../gambar/hooq-home.jpg')} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                        <p class="card-text"><small class="text-muted">Hooq</small></p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3">
                <div class="card-deck">
                    <div class="card">
                        <img src={require('../gambar/iflix-home.jpg')} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                        <p class="card-text"><small class="text-muted">Iflix</small></p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3">
                <div class="card-deck">
                    <div class="card">
                        <img src={require('../gambar/hooq-home.jpg')} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                        <p class="card-text"><small class="text-muted">Hooq</small></p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3">
                <div class="card-deck">
                    <div class="card">
                        <img src={require('../gambar/iflix-home.jpg')} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                        <p class="card-text"><small class="text-muted">Iflix</small></p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    
          </div>  
         </div>   
        );    
    }
}

export default Grid;