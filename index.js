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
    this.endingLocation = {horizontal: endingLocation.horizontal, vertical: endingLocation.vertical};;
  }

  blockTravelled() {
    let streets = (this.endingLocation.vertical - this.startingLocation.vertical);
    let avenues = (this.endingLocation.horizontal - this.startingLocation.horizontal);
  }
}
