function changeLocationShipOne(currentLocation) {
  if (currentLocation === "Aurora") return "Ember";
  if (currentLocation === "Ember") return "Nebula";
  if (currentLocation === "Nebula") return "Rift";
  if (currentLocation === "Rift") return "Aurora";
}

function changeLocationShipTwo(currentLocation) {
  if (currentLocation === "Ember") return "Nebula";
  if (currentLocation === "Nebula") return "Rift";
  if (currentLocation === "Rift") return "Obsidian";
  if (currentLocation === "Obsidian") return "Eclipse";
  if (currentLocation === "Eclipse") return "Ember";
}

function meet(shipOneCurrentLocation, shipTwoCurrentLocation) {
  return shipOneCurrentLocation === shipTwoCurrentLocation
    ? 0
    : 1 +
        meet(
          changeLocationShipOne(shipOneCurrentLocation),
          changeLocationShipTwo(shipTwoCurrentLocation),
        );
}
console.log(meet("Ember", "Eclipse"));
