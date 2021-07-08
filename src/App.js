import { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import DropDown from './components/Dropdown';
import { RadioButton } from './components/RadioButton';
import { WhereToGoOptions, WhenYouRidingOptions, WhereYouPurchaseFare } from './Constant'
import { Input } from './components/Input';
import { Footer } from './components/Footer';
class App extends Component {

  state = {
    whereToGo: 1,
    whenToGo: 1,
    whereYouPurchase: 1,
    howManyRides: 4
  }

  onWhereToGoChange = (e) => {
    this.setState({ whereToGo: e.target.value });
  }

  onWhenToGoChange = (e) => {
    this.setState({ whenToGo: e.target.value });
  }

  onWhereYouPurchaseChange = (e) => {
    this.setState({ whereYouPurchase: e.target.value });
  }

  onHowManyRidesChange = (e) => {
    this.setState({ howManyRides: e.target.value });
  }

  getCost = () => {
    const { howManyRides } = this.state;
    return 24 + Number(howManyRides);
  }

  render() {
    const { whereToGo, whenToGo, whereYouPurchase, howManyRides } = this.state;
    return (
      <div className="main-container">
        <Header />
        <DropDown label="Where are you going?" onChange={this.onWhereToGoChange} selected={whereToGo} options={WhereToGoOptions} />
        <DropDown label="When are you riding?" onChange={this.onWhenToGoChange} selected={whenToGo} options={WhenYouRidingOptions} helperText="Helper text that explains the options above" />
        <RadioButton header="Where will you purchase the fare?" options={WhereYouPurchaseFare} selected={whereYouPurchase} onChange={this.onWhereYouPurchaseChange} name="WhereYouPurchaseFare" />
        <Input type="number" onChange={this.onHowManyRidesChange} value={howManyRides} label="How many rides will you need?" />
        <Footer cost={this.getCost()} />
      </div>
    )
  }
}

export default App;
