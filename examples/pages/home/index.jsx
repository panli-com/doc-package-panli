var React = require('react/addons');
var Formation = require('../../../src/form');

var CreateForm = Formation.CreateForm;
var SubmitButton = Formation.SubmitButton;
var ErrorMessage = Formation.ErrorMessage;

var zxcvbn = require('zxcvbn');
var classnames = require('classnames');

var Form = CreateForm({
  getSchema: function () {
    return {
      username: {
        required: true,
        label: 'Username',
        type: function (val) {
          if (/^[a-zA-Z0-9\-]{1,20}$/.test(val)) return false;
          return 'Must be 1-20 characters long and use only "-" and alphanumeric symbols';
        }
      },
      email: {
        required: true,
        label: 'Email',
        type: 'email'
      },
      password: {
        required: true,
        label: 'Password',
        type: function (val) {
          if (val && zxcvbn(val).score > 0) return false;
          return 'Password is not strong enough';
        },
      },
      subscribe: {
        type: 'boolean'
      }
    }
  },

  getInitialState: function () {
    return {
      blurred: {}
    };
  },
  onSuccess: function (data) {
    alert(JSON.stringify(data));
  },
  onBlur: function (field) {
    return () => {
      var blurred = this.state.blurred;
      blurred[field] = true;
      this.setState({blurred});
    }
  },
  getPassStrength: function () {
    return this.state.password ? zxcvbn(this.state.password).score : -1;
  },
  passStrengthStrings: ['Not strong enough', 'Weak', 'OK', 'Good', 'Strong'],

  render: function () {
    var passStrength = this.getPassStrength();
    return (
      <div>
        h
      </div>
    );
  }
});

module.exports = Form;
