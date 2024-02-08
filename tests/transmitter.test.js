import { expect } from "chai";
import { transmitInCelcius, transmissionFailureCount } from "../transmitter.js";

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

function testTransmitInCelcius() {
  // Temperature above 100 celcius
  transmitInCelcius(400.5, networkTransmitStub);
  expect(transmissionFailureCount).to.equal(
    1,
    "Transmission failure count did not increment"
  );

  // Temperature above 100 celcius
  transmitInCelcius(303.6, networkTransmitStub);
  expect(transmissionFailureCount).to.equal(
    2,
    "Transmission failure count did not increment"
  );

  // Temperature exactly 100 celcius
  transmitInCelcius(212, networkTransmitStub);
  expect(transmissionFailureCount).to.equal(
    2,
    "Transmission failure count should not increment"
  );
}

testTransmitInCelcius();

console.log(`Transmission failed ${transmissionFailureCount} times.`);
console.log("All is well (maybe!)");
