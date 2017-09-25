var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.';
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length) {
    return 'Currently serving ' + katzDeliLine.shift() + '.';
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeliLine) {
  var text = [];
  if (katzDeliLine.length) {
    for ( var i = 1; i < katzDeliLine.length; i++) {
    text.push(i + '. ' + katzDeliLine[i-1]);
    }
  return 'The line is currently: ' + text;
} else {
  return 'The line is currently empty.';
  }
}
