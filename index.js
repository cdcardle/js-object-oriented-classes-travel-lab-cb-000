class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(date) {
    return date - this.startDate.getFullYear();
  }
}

class Route {
  constructor(startingLocation, endingLocation) {
    this.startingLocation = {horizontal: startingLocation.horizontal, vertical: startingLocation.vertical};
    this.endingLocation = endingLocation;
  }
}
