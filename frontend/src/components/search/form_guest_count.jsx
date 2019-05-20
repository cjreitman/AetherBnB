import React from 'react';
import './form_modal.css';


class FormGuestCount extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      adults: this.props.guestCount.adults,
      children: this.props.guestCount.children,
      infants: this.props.guestCount.infants,
    };
    this.applyGuestCount = this.applyGuestCount.bind(this);
  }

  incrementValue(stateKey) {
    let value = this.state[stateKey] + 1;
   
    switch (stateKey) {
      case ("children"):
        if (value > 5) value = 5;
        break;
      case "infants":
        if (value > 5) value = 5;
        break;
      case "adults":
        if (value > 16) value = 16;
        break;
      default:
        break;
    }
    this.setState({
      [stateKey]: value
    });

    this.addAdults();
  }

  addAdults() {
    if ((this.state.children >= 0 || this.state.infants >= 0) && this.state.adults === 0) {
      this.setState({
        adults: 1
      });
    }
  }

  decrementValue(stateKey) {
    let value = this.state[stateKey] - 1;
    if (value < 0) {
      value = 0;
    }
    this.setState({
      [stateKey]: value
    });
  }

  toggleModal() {
    let modal = document.getElementById("guests-modal");
    let dateModal = document.getElementById("dates-modal");
    let priceModal = document.getElementById("price-range-modal");
    if (dateModal.classList.contains("show-modal")) {
      dateModal.classList.remove("show-modal");
    }
    if (priceModal.classList.contains("show-modal")) {
      priceModal.classList.remove("show-modal");
    }
    modal.classList.toggle("show-modal");
  }

  clearGuestCount(e) {
    e.preventDefault();
    this.setState({
      adults: 0,
      children: 0,
      infants: 0,
    });
  }

  applyGuestCount(e) {
    e.preventDefault();
    let total = this.state.adults + this.state.children + this.state.infants;
    if (total === 0) this.setState({adults: 1});
    this.props.receiveGuestCount(this.state);
    this.toggleModal();
  }

  render() {
    return (
      <div>
        <button className="modal-button" onClick={() => this.toggleModal()}>Guests</button>
        <div className="guests-modal" id="guests-modal" >
          <form >

            <div className="incrementer">
              <h5>Adults</h5>
              <div className="increment-buttons">
                <button className="increment-button" onClick={(e) => { e.preventDefault(); this.decrementValue("adults")}}>-</button>
                <h5> {this.state.adults}+</h5>
                <button className="increment-button" onClick={(e) => { e.preventDefault(); this.incrementValue("adults")}}>+</button> 
              </div>
            </div>

            <div className="incrementer">
              <h5> Children </h5>
              <div className="increment-buttons">
                <button className="increment-button" onClick={(e) => { e.preventDefault(); this.decrementValue("children")}}>-</button>
                <h5>{this.state.children}+</h5>
                <button className="increment-button" onClick={(e) => { e.preventDefault(); this.incrementValue("children")}}>+</button> 
              </div>
            </div>



            <div className="incrementer">
              <h5> Infants </h5>
              <div className="increment-buttons">
                <button className="increment-button" onClick={(e) => { e.preventDefault(); this.decrementValue("infants")}}>-</button>
                <h5>{this.state.infants}+</h5>
                <button className="increment-button" onClick={(e) => { e.preventDefault(); this.incrementValue("infants")}}>+</button> 
              </div>
            </div>

            <div className="modal-buttons">
              <button className="date-range-picker-button" onClick={(e) => this.clearGuestCount(e)}>Clear</button>
              <button className="date-range-picker-button" onClick={(e) => this.applyGuestCount(e)}>Apply</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default FormGuestCount;