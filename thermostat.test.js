const Thermostat = require('./thermostat')

describe(Thermostat, () => {
  it('has an initial temperature of 20 degrees', () => {
    myThermostat = new Thermostat

    expect(myThermostat).toBeInstanceOf(Thermostat);
    expect(myThermostat.currentTemp).toEqual(20)
  });
  it('increases the temperature by 1 degree', () => {
    myThermostat = new Thermostat
    myThermostat.up()
    myThermostat.up()

    expect(myThermostat.currentTemp).toEqual(22)
  });
  it('decreases the temperature by 1 degree', () => {
    myThermostat = new Thermostat;
    myThermostat.down();
    myThermostat.down();

    expect(myThermostat.currentTemp).toEqual(18);
  });
  it('never decreases the temperature below 10 degrees', () => {
    myThermostat = new Thermostat;
    myThermostat.down(18);

    expect(myThermostat.currentTemp).toEqual(10);
  });
  it('has a power saving mode which is switched on by default', () => {
    myThermostat = new Thermostat;

    expect(myThermostat.powerMode).toEqual(true);
  });
  it('is possible to turn the power mode off', () => {
    myThermostat = new Thermostat;
    myThermostat.powerModeOff();

    expect(myThermostat.powerMode).toEqual(false);
  });
  it('power mode can be switched on again after it has been switched off', () => {
    myThermostat = new Thermostat;
    myThermostat.powerModeOff();
    myThermostat.powerModeOn();

    expect(myThermostat.powerMode).toEqual(true);
  });
  it('has a maximum temperature of 25 degrees if power saving mode is on', () => {
    myThermostat = new Thermostat;
    myThermostat.up(20);

    expect(myThermostat.currentTemp).toEqual(25);
  });
  it('has a maximum temperature of 32 degrees if the power saving mode is off', () => {
    myThermostat = new Thermostat;
    myThermostat.powerModeOff();
    myThermostat.up(40);

    expect(myThermostat.currentTemp).toEqual(32);
  });
  it('has a maximum temperature of 25 degrees if the power saving mode has been turned off and turned back on again', () => {
    myThermostat = new Thermostat;
    myThermostat.powerModeOff();
    myThermostat.up(40);
    myThermostat.powerModeOn();
    myThermostat.up();

    expect(myThermostat.currentTemp).toEqual(25);
  });

  it('resets the temperature to 20 degrees', () => {
    myThermostat = new Thermostat;
    myThermostat.up();
    myThermostat.up();
    myThermostat.reset();

    expect(myThermostat.currentTemp).toEqual(20);
  });
  it('tells me the energy usage is low if the temperature is less than 18', () => {
    myThermostat = new Thermostat;
    myThermostat.down(5);

    expect(myThermostat.currentUsage()).toEqual("current energy usage is LOW")
  });
  it('tells me the energy usage is medium if the temperature is > 17 and < 26', () => {
    myThermostat1 = new Thermostat;
    myThermostat1.down(2);
    myThermostat2 = new Thermostat;
    myThermostat2.up(5);

    expect(myThermostat1.currentUsage()).toEqual("current energy usage is MEDIUM");
    expect(myThermostat2.currentUsage()).toEqual("current energy usage is MEDIUM");
  });
  it('tells me the energy usage is high if the temperature is greater than 25', () => {
    myThermostat = new Thermostat;
    myThermostat.powerModeOff();
    myThermostat.up(8);

    expect(myThermostat.currentUsage()).toEqual("current energy usage is HIGH")
  });
}); 
  