import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Message, Button } from 'semantic-ui-react';
import ForgotPasswordForm from '../forms/ForgotPasswordForm';
import {
  resetPasswordRequest,
  resentPasswordRequest
} from '../../actions/auth';

class ForgotPasswordPage extends React.Component {
  state = {
    success: false,
    resend: false,
    data: {},
    disabled: false
  };

  onResentEmail = () =>
    this.props.resentPasswordRequest(this.state.data).then(() => {
      this.setState({ resend: true, disabled: true });
      setTimeout(this.unDisabled, 20000);
    });

  unDisabled = () => this.setState({ disabled: false });

  submit = data =>
    this.props
      .resetPasswordRequest(data)
      .then(() => this.setState({ success: true, data }));

  render() {
    const { success, resend, disabled } = this.state;
    return (
      <div>
        {success ? (
          <div>
            {!resend ? (
              <Message>Email has been sent to your e-mail.</Message>
            ) : (
              <Message>Email has been resent to your e-mail.</Message>
            )}
            <Button disabled={disabled} onClick={this.onResentEmail} primary>
              Resend email
            </Button>
            {disabled && <p>Wait 20 sec for resent link to your email.</p>}
          </div>
        ) : (
          <ForgotPasswordForm submit={this.submit} />
        )}
      </div>
    );
  }
}

ForgotPasswordPage.propTypes = {
  resetPasswordRequest: PropTypes.func.isRequired,
  resentPasswordRequest: PropTypes.func.isRequired
};

export default connect(null, { resetPasswordRequest, resentPasswordRequest })(
  ForgotPasswordPage
);
