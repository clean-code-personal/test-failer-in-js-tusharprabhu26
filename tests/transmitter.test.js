import { expect } from "chai";
import { transmitInCelcius, transmissionFailureCount } from "../transmitter.js";

function testTransmitInCelcius() {
  // Temperature above 100 celcius
  transmitInCelcius(400.5);
  expect(transmissionFailureCount).to.equal(
    1,
    "Transmission failure count did not increment"
  );

  // Temperature above 100 celcius 
  transmitInCelcius(303.6);
  expect(transmissionFailureCount).to.equal(
    2,
    "Transmission failure count did not increment"
  );

  // Temperature exactly 100 celcius
  transmitInCelcius(212);
  expect(transmissionFailureCount).to.equal(
    2,
    "Transmission failure count should not increment"
  );
}

testTransmitInCelcius();

console.log(`Transmission failed ${transmissionFailureCount} times.`);
console.log("All is well (maybe!)");
