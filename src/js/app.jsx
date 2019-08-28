import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: '0',
      amountReceived: '0',
      twenties: '0',
      tens: '0',
      fives: '0',
      ones: '0',
      quarters: '0',
      dimes: '0',
      nickels: '0',
      pennies: '0',
      changeDue: 'No change due at this time.',
    };

    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleChange(event){
    this.setState({ [event.target.name]: event.target.value});
  }

  calculate() {
    var change = this.state.amountReceived - this.state.amountDue;
    var change = change.toFixed(2);
    this.setState({ changeDue: `The total change due is  $${change}` });

    const twenties = Math.floor(change / 20);
    this.setState({ twenties: twenties });
    var remainder = change % 20;

    const tens = Math.floor(remainder / 10);
    this.setState({ tens: tens });
    var remainder = remainder % 10;

    const fives = Math.floor(remainder / 5);
    this.setState({ fives: fives });
    var remainder = remainder % 5;

    const ones = Math.floor(remainder / 1);
    this.setState({ ones: ones });
    var remainder = remainder % 1;

    const quarters = Math.floor(remainder / .25);
    this.setState({ quarters: quarters });
    var remainder = remainder % .25;

    const dimes = Math.floor(remainder.toFixed(2) / .10);
    this.setState({ dimes: dimes });
    var remainder = remainder % .10;

    const nickels = Math.floor(remainder.toFixed(2) / .05);
    this.setState({ nickels: nickels });
    var remainder = remainder % .05;

    const pennies = Math.floor(remainder.toFixed(2) / .01);
    this.setState({ pennies: pennies });
    var remainder = remainder % .01;
  }

  render() {
    return (
      <div>
        <div className='container-fluid' style={{width: '90%'}}>
          <h1 style={{ color: 'white', paddingTop: '1.25em', marginBottom: '0.5em' }}>Change Calculator</h1>
          <hr style={{ backgroundColor: 'white', height: '0.0625em' }}/>

          <div className='container' style={{padding: '0em'}}>
            <div className='row'>
              <div className='col-sm-4' style={{ marginBottom: '1em'}}>
                <div className='card'>
                  <h6 className='card-header'>
                    Enter Information
                  </h6>
                  <div className='card-body'>
                    <div className='form-group'>
                      <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>
                        How much is due?
                      </div>
                      <input className='form-control' name='amountDue' type='number' placeholder='0' step='0.01' style={{ width: '100%', margin: 'auto'}} value={this.state.amountDue} onChange={this.handleChange} pattern="^-?[0-9]\d*\.?\d*$"/>
                    </div>
                    <div className='form-group'>
                      <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>
                        How much was received?
                      </div>
                      <input className='form-control' name='amountReceived' type='number' placeholder='0' step='0.01' style={{ width: '100%', margin: 'auto'}} value={this.state.amountReceived} onChange={this.handleChange} pattern="^-?[0-9]\d*\.?\d*$"/>
                      </div>
                  </div>
                  <div className='card-footer'>
                    <button className='btn btn-primary' name='calculate' style={{ backgroundColor: '#337AB7', color: 'white', width: '100%', margin: 'auto'}} onClick={this.calculate}>Calculate</button>
                  </div>
                </div>
              </div>
          
              <div className='col-sm-8'>
                <div className='card' style={{margin: 'auto'}}>
                  <div className='card-body'>
                    
                    <div className='row' style={{margin: 'auto auto 1em'}}>
                      <div className='card' style={{ backgroundColor: '#DFF0D8', color: '#69A080', height: '20%', width: '100%', margin: 'auto', borderRadius: '.25rem', display: 'block'}}>
                        <div className='card-body'>
                          <div style={{display: 'flex', justifyContent: 'center'}} value={this.state.changeDue}>{this.state.changeDue}</div>
                        </div>
                      </div>
                    </div>

                    <div className='row'>
                        <div className='col-md'>
                          <div className='card'>
                            <div className='card-body' style={{ backgroundColor: '#F5F5F5', width: '100%'}}>
                              <div style={{textAlign: 'center', fontWeight: 'bold'}}>
                                Twenties
                              </div>
                              <div style={{textAlign: 'center'}} value={this.state.twenties}>{this.state.twenties}</div>
                            </div>
                          </div>
                        </div>

                        <div className='col-md'>
                          <div className='card'>
                            <div className='card-body' style={{ backgroundColor: '#F5F5F5'}}>
                              <div style={{textAlign: 'center', fontWeight: 'bold'}}>
                                Tens
                              </div>
                              <div style={{textAlign: 'center'}} value={this.state.tens}>{this.state.tens}</div>
                            </div>
                          </div>
                        </div>

                        <div className='col-md'>
                          <div className='card'>
                            <div className='card-body' style={{ backgroundColor: '#F5F5F5'}}>
                              <div style={{textAlign: 'center', fontWeight: 'bold'}}>
                                Fives
                              </div>
                              <div style={{textAlign: 'center'}} value={this.state.fives}>{this.state.fives}</div>
                            </div>
                          </div>
                        </div>

                        <div className='col-md'>
                          <div className='card'>
                            <div className='card-body' style={{ backgroundColor: '#F5F5F5'}}>
                              <div style={{textAlign: 'center', fontWeight: 'bold'}}>
                                Ones
                              </div>
                              <div style={{textAlign: 'center'}} value={this.state.ones}>{this.state.ones}</div>
                            </div>
                          </div>
                        </div>
                    </div>

                    <div className='row' style={{marginTop: '1em'}}>

                      <div className='col-sm'>
                        <div className='card'>
                          <div className='card-body' style={{ backgroundColor: '#F5F5F5', width: '100%'}}>
                            <div style={{textAlign: 'center', fontWeight: 'bold'}}>
                              Quarters
                            </div>
                            <div style={{textAlign: 'center'}} value={this.state.quarters}>{this.state.quarters}</div>
                          </div>
                        </div>
                      </div>

                      <div className='col-sm'>
                        <div className='card'>
                          <div className='card-body' style={{ backgroundColor: '#F5F5F5'}}>
                            <div style={{textAlign: 'center', fontWeight: 'bold'}}>
                              Dimes
                            </div>
                            <div style={{textAlign: 'center'}} value={this.state.dimes}>{this.state.dimes}</div>
                          </div>
                        </div>
                      </div>

                      <div className='col-sm'>
                        <div className='card'>
                          <div className='card-body' style={{ backgroundColor: '#F5F5F5'}}>
                            <div style={{textAlign: 'center', fontWeight: 'bold'}}>
                              Nickels
                            </div>
                            <div style={{textAlign: 'center'}} value={this.state.nickels}>{this.state.nickels}</div>
                          </div>
                        </div>
                      </div>

                      <div className='col-sm'>
                        <div className='card'>
                          <div className='card-body' style={{ backgroundColor: '#F5F5F5'}}>
                            <div style={{textAlign: 'center', fontWeight: 'bold'}}>
                              Pennies
                            </div>
                            <div style={{textAlign: 'center'}} value={this.state.pennies}>{this.state.pennies}</div>
                          </div>
                        </div>
                      </div>
                    
                    </div>

                  </div>
                </div>
              </div>

          </div>
          </div>

      </div>
    </div>
    )
  }

}

render(<App />, document.getElementById('root'));

export default App;