let transmissionFailureCount = 0;

function networkTransmitStub(celcius) {
  console.log(`Temperature to transmit: ${celcius} celcius`);

  // The intention here is to transmit the temperature over a network.
  // However, this is a stub, so we just print the message above
  // and give back a return code.

  // Return 200 for ok
  // Return 500 for not-ok

  //  failure when the temperature is above 100 celcius
  if (celcius > 100) {
    return 500;
  } else {
    return 200;
  }
}

function transmitInCelcius(farenheit) {
  const celcius = (farenheit - 32) * 5 / 9;
  const returnCode = networkTransmitStub(celcius);
  if (returnCode != 200) {
    // non-ok response indicates failure while transmitting over the network
    // let us keep a count of failures to report
    // However, this code doesn't increment failures - that's a bug!
    // Add a test below to catch this bug. Alter the stub above, if needed.
    transmissionFailureCount += 0;
  }
}

export { transmitInCelcius, transmissionFailureCount };
