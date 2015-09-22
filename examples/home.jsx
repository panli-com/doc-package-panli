var React = require('react/addons');
var Login = require('./pages/home/index.jsx');
var {Link} = require('react-router');

function generateVariant(propsets) {
  var props = Object.keys(propsets);
  var variation = {};
  props.forEach(prop => {
    var variants = propsets[prop];
    variation[prop] = variants[Math.floor(Math.random() * (variants.length))];
  });
  return variation;
}

var variants = {
  showLabels: [true, false],
  signUpMessage: ['Sign up', 'Join', 'Join us', 'zan.'],
  buttonColor: ['#00BE94', '#69A0FC']
};

var GithubLink = React.createClass({
  render: function () {
    return (<iframe
      className="gh-star" src="https://ghbtns.com/github-btn.html?user=zanjs&repo=react-formation&type=star&count=true&size=large"
      frameborder="0"
      scrolling="0"
      width="160px"
      height="30px"></iframe>);
  }
});

module.exports = React.createClass({

  getInitialState: function () {
    return {
      variants: generateVariant(variants)
    };
  },

  refreshTest: function (e) {
    e.preventDefault();
    this.setState({variants: generateVariant(variants)});
  },

  render: function () {

    return (<div className="home">
      <header>
        <h1>Panli.com<br/>with <strong>前端开发小组</strong></h1>
        <p><Link to="examples">api 查询</Link></p>
      </header>
      <footer>
        <p><GithubLink /></p>
      </footer>
    </div>);
  }
});
