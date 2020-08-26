import { Component } from "react";
import * as React from "react";
import {
  Image,
  Button,
  Header,
  Icon,
  Menu,
  Container,
  Modal,
  Card,
} from "semantic-ui-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactWebMediaPlayer from "react-web-media-player";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import { useKeenSlider } from "keen-slider/react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      albumurl: "",
      title: "",
    };
    this.handleclick = this.handleclick.bind(this);
  }

  handleclick(event, i) {
    let url = "https://picsum.photos/seed/" + i + "/1000/1000";

    this.setState({ title: "Chill Day" + i, albumurl: url, open: true });
  }

  card(i) {
    let url = "url(https://picsum.photos/seed/" + i + "/200/300)";

    return (
      <div>
        <Card
          onClick={(event) => this.handleclick(event, i)}
          onDragEnter={this.onDragEnter}
          onDragOver={this.onDragOver}
          onDrop={this.onFileDrop}
          style={{
            width: window.innerWidth / 7.5 + "px",
            height: window.innerWidth / 7.5 + "px",
          }}
        >
          <Card.Content
            style={{
              width: "auto",
              height: "auto",
              backgroundImage: url,
              backgroundSize: "cover",
            }}
          >
            <Card.Description style={{ color: "white" }}>
              Chill Day {i}
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  }

  render() {
    let open = this.state.open;
    let setOpen = this.state.setopen;
    const temp = [1, 2, 3, 4, 5, 6, 7, 8];
    var settings = {
      dots: false,
      infinite: true,
      centerMode: true,
      centerPadding: "0px",
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
    };

    return (
      <div className="cardcontainer">
        <header2>Play Music</header2>
        <div style={{ height: "50px" }}></div>
        <Slider {...settings}>
          {temp.map((i) => (
            <div> {this.card(i)}</div>
          ))}
        </Slider>
        <div style={{ height: "100px" }}></div>
        <Slider {...settings}>
          {temp.map((i) => (
            <div> {this.card(i + 10)}</div>
          ))}
        </Slider>
        <div style={{ height: "100px" }}></div>
        <Slider {...settings}>
          {temp.map((i) => (
            <div> {this.card(i + 20)}</div>
          ))}
        </Slider>

        <Modal
          open={open}
          onClose={() => this.setState({ open: false })}
          onOpen={() => this.setState({ open: true })}
          onDragEnter={(e) => console.log("d")}
        >
          <ReactWebMediaPlayer
            title={this.state.title}
            audio="chill day.mp3"
            thumbnail={this.state.albumurl}
          />
        </Modal>
      </div>
    );
  }
}

export function Keenslider() {
  const [sliderRef] = useKeenSlider({
    slidesPerView: 5,
    mode: "free",
    spacing: 15,
    loop: true,
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">1</div>
      <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div>
    </div>
  );
}
export { Content };
