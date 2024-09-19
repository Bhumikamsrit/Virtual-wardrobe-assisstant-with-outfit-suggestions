document.getElementById('inventoryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Gather the data from the form
    const itemName = document.getElementById('item-name').value;
    const itemType = document.getElementById('item-type').value;
    const itemColor = document.getElementById('item-color').value;
    const itemPrice = document.getElementById('item-price').value;
    const itemSeason = document.getElementById('item-season').value;

    const itemData = {
        name: itemName,
        type: itemType,
        color: itemColor,
        price: itemPrice,
        season: itemSeason
    };

    // Send the data to the back-end (Python Flask)
    fetch('/upload-item', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Item uploaded successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    // Clear form
    document.getElementById('inventoryForm').reset();
});
