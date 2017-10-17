var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.construtor = makeBlinkyDancer;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step;
// makeBlinkyDancer.prototype.oldStep = function() {
//   // the basic dancer doesn't do anything interesting at all on each step,
//   // it just schedules the next step
//   console.log('step');
// };
// makeBlinkyDancer.prototype.oldStep = function() {
//   return this.step;
// };

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
console.log(this.oldStep);
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};