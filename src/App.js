import React, { Component } from "react";
import MemCard from "./components/MemCard";
import cards from "./cards.json";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    randomCards: this.createRandomCards(cards),
    selected: [],
    score: 0,
    topScore: 0
  };

  createRandomCards(cards) {
    var tempRandom = [];
    while (tempRandom.length < cards.length) {
      var randomItem = Math.floor(Math.random() * cards.length);
      if (!tempRandom.includes(cards[randomItem])) {
        tempRandom.push(cards[randomItem]);
      }
    }
    return tempRandom;
  }

  selectCard(id) {
    if (!this.state.selected.includes(id)) {
      this.state.selected.push(id);
      if (this.state.topScore < this.state.score + 1) {
        this.setState({ topScore: this.state.score + 1 });
      }
      this.setState({ score: this.state.score + 1 });
    }
    else {
      this.setState({ score: 0 });
      this.setState({ selected: [] });
    }
    this.setState({ randomCards: this.createRandomCards(cards) });
    console.log(this.state.score);
    console.log(this.state.topScore);
  }

  render() {
    return (
      <div>
        <Nav score={this.state.score}  topScore={this.state.topScore}/>
        <div className="container">
          {this.state.randomCards.map(card => (
            <div className="card" onClick={() => this.selectCard(card.id)}>
              <img className="image" alt={card.id} src={card.image} />
            </div>
            // <MemCard key={card.id} alt={card.id} src={card.image} selectCard={this.selectCard}/>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
