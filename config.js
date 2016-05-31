const DAYS = {
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
  SUNDAY: 7,
};

module.exports = {
  opening: {
    days: [DAYS.MONDAY, DAYS.WEDNESDAY, DAYS.FRIDAY],
    from: { hours: 08, minutes: 0},
    to: { hours: 16, minutes: 0},
  }
}
