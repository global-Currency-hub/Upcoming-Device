// अपकमिंग डिवाइस के लिए सैंपल डेटा
const devices = [
    {
        name: "iPhone 15",
        brand: "Apple",
        launchDate: "September 2023",
        specifications: "A16 Bionic chip, 6.1-inch OLED display, 12MP dual camera",
        details: "The next generation iPhone with improved performance and camera capabilities."
    },
    {
        name: "Galaxy S23",
        brand: "Samsung",
        launchDate: "February 2023",
        specifications: "Snapdragon 8 Gen 2, 6.2-inch AMOLED display, 50MP triple camera",
        details: "Samsung's flagship with advanced features and a powerful processor."
    },
    {
        name: "MacBook Pro 14",
        brand: "Apple",
        launchDate: "October 2023",
        specifications: "M2 Max chip, 14-inch Liquid Retina XDR display, 16GB RAM",
        details: "A high-performance laptop for professionals with a stunning display."
    },
    {
        name: "OLED TV 55",
        brand: "LG",
        launchDate: "March 2023",
        specifications: "55-inch 4K OLED display, Dolby Vision IQ, webOS 6.0",
        details: "An immersive viewing experience with perfect blacks and vibrant colors."
    }
];

// टेबल में डिवाइस को प्रदर्शित करने की फंक्शन
function displayDevices() {
    const tableBody = document.getElementById('deviceTableBody');
    tableBody.innerHTML = '';
    devices.forEach(device => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${device.name}</td>
            <td>${device.brand}</td>
            <td>${device.launchDate}</td>
            <td>${device.specifications}</td>
            <td>${device.details}</td>
        `;
        tableBody.appendChild(row);
    });
}

// फंक्शन को कॉल करें ताकि डिवाइस प्रदर्शित हों
displayDevices();
