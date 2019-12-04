import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    }

    this.updateQuote = this.updateQuote.bind(this);
  }

  componentDidMount() {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
      this.setState({
        quote: data.content,
        author: data.author
      });
    })
  }

  updateQuote() {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
      this.setState({
        quote: data.content,
        author: data.author
      });
    })
  }

  render() {
    let encodeQuote = encodeURI(this.state.quote);
    let encodeAuthor = encodeURI(this.state.author);
    let href = "https://twitter.com/intent/tweet?text=" + encodeQuote + " -" + encodeAuthor;
    return (
      <div id="quote-box">
        <h1>Quotes</h1>
        <div className="quote-and-author">
          <p id="text">{this.state.quote}</p>
          <p id="author"> - {this.state.author}</p>
        </div>
        <button id="new-quote" className="btn quote-button" onClick={this.updateQuote}>Quote</button>
        <a className="btn tweet" href={href} data-size="large">
          Tweet
        </a>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
