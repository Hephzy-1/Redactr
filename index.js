function redactContent() {
  const content = document.getElementById('context').value.trim();
  const wordsToRedact = document.getElementById('words').value.trim();
  const replacementChar = document.getElementById('symbol').value.trim();

  const scannedWords = document.getElementById('wordsScanned');
  const redactCount = document.getElementById('redactWords');
  const characterCount = document.getElementById('redactChar');
  const timeValue = document.getElementById('time');

  const startTime = performance.now();

  if (content.length === 0 || wordsToRedact.length === 0 || replacementChar.length === 0) {
    alert('Please enter all required fields!');
    return;
  }

  let redactText = content;
  let redactedWordsCount = 0;
  let charCount = 0;

  // Replace words
  wordsToRedact.split(' ').forEach((word) => {
    const regex = new RegExp(word, 'gi');
    const redactedWord = replacementChar.repeat(word.length);
    redactText = redactText.replace(regex, redactedWord);
    redactedWordsCount += (content.match(regex) || []).length;
    charCount += redactedWord.length * (content.match(regex) || []).length;
  });

  // Calculate time taken
  const endTime = performance.now();
  const timeTaken = (endTime - startTime);

  // Display redacted content
  document.getElementById('redactText').textContent = redactText;

  // Display statistics
  scannedWords.innerText = wordsToRedact.split(' ').length;
  redactCount.innerText = redactedWordsCount;
  characterCount.innerText = charCount;
  timeValue.innerText = timeTaken.toFixed(2); // Limit decimals to 2 places
}


function resetBtn() {
  document.getElementById('redactText').textContent = '';
  document.getElementById('wordsScanned').innerText = '0';
  document.getElementById('redactWords').innerText = '0';
  document.getElementById('redactChar').innerText = '0';
  document.getElementById('time').innerText = '0';
}
