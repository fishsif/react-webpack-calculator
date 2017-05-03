import React from 'react';
import Result from './components/Result/Result';
import Button from './components/Button/Button';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: '',
      compute: '',
      temp: '',
      prints: '',
      reset: true
    };
  }
  handleBtnClick(val) {
    if (val == 'C') {
        this.setState({
          result: '',
          compute: '',
          temp: '',
          reset: true,
          prints: ''
        });
    } else if (val == 'b') {
        if(this.state.result.length > 1) {
            this.setState({
                result:this.state.result.slice(0,-1),
                prints:this.state.result.slice(0,-1)
            });
        } else {
            this.setState({result:'',prints:''});
        }
    } else if (val == '=') {
        if (this.state.compute == '+') {
            this.setState({
                result: `${+this.state.result + (+this.state.temp)}`,
                prints: `${+this.state.result + (+this.state.temp)}`
            });
        }
        if (this.state.compute == '-') {
            this.setState({
                result: `${+this.state.result - this.state.temp}`,
                prints: `${+this.state.result - this.state.temp}`
            });
        }
        if (this.state.compute == 'x') {
            this.setState({
                result: `${(+this.state.result) * (+this.state.temp)}`,
                prints: `${(+this.state.result) * (+this.state.temp)}`
            });
        }
        if (this.state.compute == '/') {
            this.setState({
                result: `${(+this.state.result) / (+this.state.temp)}`,
                prints: `${(+this.state.result) / (+this.state.temp)}`
            });
        }
        this.setState({
            reset: true,
            compute: '',
            temp: ''
        });
    } else if (val == '+' || val == 'x' || val == '/') {
        this.setState({
            compute: val,
            prints: this.state.prints += val
        });
    } else if (val == '-') {
        if(this.state.reset) {
            this.setState({
                result: val,
                prints: val,
                reset: false,
            });
        } else {
            this.setState({
                compute: val,
                prints: this.state.prints += val
            });
        }
    } else {
        if (this.state.compute) {
            this.setState({
                temp: this.state.temp+val,
                prints: this.state.prints += val
            });
        } else {
            if (this.state.reset) {
                this.setState({
                    result: val,
                    prints: val,
                    reset: false
                });
            } else {
                this.setState({
                    result: this.state.result+val,
                    prints: this.state.prints += val
                });
            }
        }
    }
  }
  render() {
    return (
      <div className="app">
        <Result prints={ this.state.prints }/>
        <div className="edit">
          <Button val="C" handleBtnClick={ this.handleBtnClick.bind(this) }/>
          <Button val="b" handleBtnClick={ this.handleBtnClick.bind(this) }/>
          <Button val="/" handleBtnClick={ this.handleBtnClick.bind(this) }/>
          <Button val="x" handleBtnClick={ this.handleBtnClick.bind(this) }/>
          <Button val="7" handleBtnClick={ this.handleBtnClick.bind(this) }/>
          <Button val="8" handleBtnClick={ this.handleBtnClick.bind(this) }/>
          <Button val="9" handleBtnClick={ this.handleBtnClick.bind(this) }/>
          <Button val="-" handleBtnClick={ this.handleBtnClick.bind(this) }/>
          <Button val="4" handleBtnClick={ this.handleBtnClick.bind(this) }/>
          <Button val="5" handleBtnClick={ this.handleBtnClick.bind(this) }/>
          <Button val="6" handleBtnClick={ this.handleBtnClick.bind(this) }/>
          <Button val="+" handleBtnClick={ this.handleBtnClick.bind(this) }/>
          <Button val="1" handleBtnClick={ this.handleBtnClick.bind(this) }/>
          <Button val="2" handleBtnClick={ this.handleBtnClick.bind(this) }/>
          <Button val="3" handleBtnClick={ this.handleBtnClick.bind(this) }/>
          <Button val="" handleBtnClick={ this.handleBtnClick.bind(this) }/>
          <Button val="" handleBtnClick={ this.handleBtnClick.bind(this) }/>
          <Button val="0" handleBtnClick={ this.handleBtnClick.bind(this) }/>
          <Button val="." handleBtnClick={ this.handleBtnClick.bind(this) }/>
          <Button val="=" handleBtnClick={ this.handleBtnClick.bind(this) }/>
        </div>
      </div>
    );
  }
}

export default App;