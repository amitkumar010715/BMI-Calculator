const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#h').value)
    const weight = parseInt(document.querySelector('#w').value)

    const res = document.querySelector('#result')
    if (height === '' || height < 0 || isNaN(height)) {
        res.innerHTML = "Enter valid height"
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        res.innerHTML = "Enter valid weight"
    } else {
        const ans = (weight / ((height * height) / 10000)).toFixed(2)
        res.innerHTML = `${ans}`
    }
    
});
