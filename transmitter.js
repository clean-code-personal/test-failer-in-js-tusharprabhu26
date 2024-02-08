let transmissionFailureCount = 0;

function transmitInCelcius(farenheit, networkTransmitStub) {
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
