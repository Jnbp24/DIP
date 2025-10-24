//Opgave 6.1

// This solution is *NOT* future proof, as it requires the developer to hardcode each input
    const talInput = document.getElementById('tal');
    const tidInput = document.getElementById('tid');

    const numberLabel = document.createElement('label');
    numberLabel.textContent = 'Number: ';
    talInput.parentNode.insertBefore(numberLabel, talInput);

    const timeLabel = document.createElement('label');
    timeLabel.textContent = 'Time: ';
    tidInput.parentNode.insertBefore(timeLabel, tidInput);

    const randomNumber = () => {
        talInput.value = Math.trunc(Math.random() * 1000); // Random number generator
    };
    numberLabel.addEventListener('click', randomNumber);
    talInput.addEventListener('click', randomNumber);

    const getTime = () => {
        tidInput.value = new Date().toLocaleTimeString(); // Get current time on PC
    };
    timeLabel.addEventListener('click', getTime);
    tidInput.addEventListener('click', getTime);

    // Clear button
    const clearButton = document.querySelector('button');
    clearButton.addEventListener('click', () => { // On click, set values to empty. This clears the values.
        talInput.value = '';
        tidInput.value = '';
    });