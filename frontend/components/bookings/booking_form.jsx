import React from 'react';
import { withRouter } from 'react-router';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing_id: this.props.listingId,
      start_date: "",
      end_date: '',
      num_guests: "",
      charity_org: "",
      errors: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.props.currentUser ) {
      this.setState({error: "Please log in to make a booking"});
      return null;
    }
    let booking = this.state;
    delete booking.error;
    this.props.createBooking(booking)
      .fail( ({errors}) => {this.setState({ errors })});
  }

  calculateDays() {
    if (this.state.end_date !== "") {
      return (new Date(this.state.end_date) - new Date(this.state.start_date))/86400000;
    } else {
      return 0;
    }
  }

  calculatePrice() {
    if (this.state.end_date !== "") {
      return this.calculateDays() * parseInt(this.props.daily_rate);
    } else {
      return 0;
    }
  }

  componentDidMount() {
    this.props.clearBookingErrors();
  }

  // componentWillReceiveProps() {
  //   this.setState({error: ""});
  // }

  calculateTotal() {
    if (this.state.end_date !== "") {
      return this.calculatePrice() + this.props.service_fee;
    } else {
      return this.props.service_fee;
    }
  }


  render() {
    return(
      <section id="wholeform">
        <article className='error-test'>
        </article>
        <header className="booking-form-header">
          <div className="booking-price">
            <span className="booking-price">${this.props.daily_rate} <img src={window.lightning} /></span>
            <img src={window.lightning} />
          </div>
          <div className="booking-per-night">
            <span>Per Night</span>
          </div>
        </header>

        <form className="booking-form" onSubmit={this.handleSubmit.bind(this)}>

        <article className="booking-form-dates group">
          <div className="start-date">
            <span>Check In</span>
              <input type="date"
                value={ this.state.start_date }
                onChange={this.handleChange} max={this.state.end_date} name="start_date"/>
          </div>
          <div className="start-date">
            <span>Check Out</span>
              <input type="date" value={ this.state.end_date }
                onChange={this.handleChange} min={this.state.start_date} name="end_date"/>
          </div>
        </article>

        <article className="booking-form-guests">
          <span>Guests</span>
          <input className="form-guests" type="number"
            value={ this.state.num_guests }
            onChange={this.handleChange} name="num_guests"/>
          <span>Organization to donate</span>
          <input className="form-guests" type="text"
            value={ this.state.charity_org }
            onChange={this.handleChange} name="charity_org"/>
        </article>

          <article className="pricing-calc group">
            <span className="nights">${this.props.daily_rate} x {this.calculateDays()} nights</span>
            <div className ="nights-price">
              <span>${this.calculatePrice()}</span>
            </div>
          </article>
          <hr></hr>

          <article className="pricing-calc group">
            <span className="nights">Service Fee</span>
            <div className ="nights-price">
              <span >${this.props.service_fee}</span>
            </div>
          </article>
          <hr></hr>

          <article className="pricing-calc group">
            <span className="nights">Total</span>
            <div className ="nights-price">

              <span >${this.calculateTotal()}</span>
            </div>
          </article>
          <hr></hr>
          <div id="book" >

            <input className="book-button" type="submit" value="Book" />
          </div>
          { this.state.errors.length > 0 ? this.state.errors[0] : null }

        </form>

      </section>

    );
  }
}

export default withRouter(BookingForm);
