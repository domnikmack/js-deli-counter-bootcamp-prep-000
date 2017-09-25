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

function currentLine(line) {
  while (katzDeliLine.length) {
    statement

  }
}
