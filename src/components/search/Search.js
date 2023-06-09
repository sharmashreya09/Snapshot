import react, { Component } from "react";
import axios from "axios";
import ImgResults from "../ImgResults/ImgResults";

class Search extends Component {
  state = {
    searchText: "",
    apiurl: "https://pixabay.com/api/",
    apiKey: "37161018-2339baec62cdaa9d3b9a4379e",
    images: [],
  };
  onTextChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value }, () => {
      axios
        .get(
          `${this.state.apiurl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&safesearch=true`
        )
        .then(res=>this.setState({ images: res.data.hits }))
        .catch((err) => console.log(err));
    });
  };

  render() {
    console.log(this.state.images);
    return (
      <div>
        <input
          type="text"
          style={{
            backgroundColor: "black",
            color: "white",
            marginLeft: 570,
            marginTop: 100,
            paddingTop: 20,
            paddingLeft: 70,
            fontSize: 30,
            borderTopStyle: "hidden",
            borderRightStyle: "hidden",
            borderLeftStyle: "hidden",
            outline: "none",
            borderBottomStyle: "groove",
          }}
          placeholder="Search for images"
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
        />
        {this.state.images.length > 0 ? (
          <ImgResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}
export default Search;
