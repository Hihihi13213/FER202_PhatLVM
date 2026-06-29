import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    agree: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      setSubmitted(true);
      setTimeout(() => {
        resetForm();
      }, 3000);
    }
    setValidated(true);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      username: '',
      city: '',
      state: '',
      zip: '',
      agree: false
    });
    setValidated(false);
    setSubmitted(false);
  };

  return (
    <Container className="py-5">
      <h1 className="page-title mb-4">Contact Us</h1>

      {submitted && (
        <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
          <Alert.Heading>Thank you for your message!</Alert.Heading>
          <p>
            We have received your contact information. We will get back to you soon.
          </p>
        </Alert>
      )}

      <div className="row justify-content-center">
        <div className="col-md-8">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                isValid={validated && formData.firstName !== ''}
              />
              <Form.Control.Feedback>
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a first name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                isValid={validated && formData.lastName !== ''}
              />
              <Form.Control.Feedback>
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a last name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                isValid={validated && formData.username !== ''}
              />
              <Form.Control.Feedback>
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>

            <div className="row">
              <Form.Group className="col-md-6 mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  isValid={validated && formData.city !== ''}
                />
                <Form.Control.Feedback>
                  Looks good!
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="col-md-4 mb-3">
                <Form.Label>State</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  isValid={validated && formData.state !== ''}
                />
                <Form.Control.Feedback>
                  Looks good!
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="col-md-2 mb-3">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  isValid={validated && formData.zip !== ''}
                />
                <Form.Control.Feedback>
                  Looks good!
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Group>
            </div>

            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>

            <Button 
              variant="danger" 
              type="submit"
              className="btn-submit"
            >
              Submit form
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
