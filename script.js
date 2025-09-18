// Sample bike data with reliable image URLs
const bikes = [
    {
        id: 1,
        name: "Yamaha R15 V4",
        price: "₹1,82,000",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "sports",
        specs: {
            engine: "155cc",
            mileage: "40 kmpl",
            power: "18.6 PS",
            weight: "142 kg",
            topSpeed: "136 kmph",
            fuelCapacity: "11L",
            transmission: "6-speed",
            abs: "Dual Channel"
        }
    },
    {
        id: 2,
        name: "Honda CB 350",
        price: "₹2,10,000",
        image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "commuter",
        specs: {
            engine: "348.36cc",
            mileage: "35 kmpl",
            power: "20.8 PS",
            weight: "181 kg",
            topSpeed: "114 kmph",
            fuelCapacity: "15L",
            transmission: "5-speed",
            abs: "Single Channel"
        }
    },
    {
        id: 3,
        name: "Royal Enfield Himalayan",
        price: "₹2,15,000",
        image: "https://images.unsplash.com/photo-1564396797662-2d5f8a4d6d3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "adventure",
        specs: {
            engine: "411cc",
            mileage: "30 kmpl",
            power: "24.3 PS",
            weight: "194 kg",
            topSpeed: "120 kmph",
            fuelCapacity: "15L",
            transmission: "5-speed",
            abs: "Dual Channel"
        }
    },
    {
        id: 4,
        name: "Honda Activa 6G",
        price: "₹78,000",
        image: "https://images.unsplash.com/photo-1571068316345-8bb10cedadf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "scooter",
        specs: {
            engine: "109.51cc",
            mileage: "45 kmpl",
            power: "7.68 PS",
            weight: "107 kg",
            topSpeed: "83 kmph",
            fuelCapacity: "5.3L",
            transmission: "CVT",
            abs: "No"
        }
    },
    {
        id: 5,
        name: "KTM Duke 200",
        price: "₹2,15,000",
        image: "https://images.unsplash.com/photo-1623778027845-49cdd4c2e76d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "sports",
        specs: {
            engine: "199.5cc",
            mileage: "35 kmpl",
            power: "25 PS",
            weight: "139 kg",
            topSpeed: "140 kmph",
            fuelCapacity: "13.4L",
            transmission: "6-speed",
            abs: "Dual Channel"
        }
    },
    {
        id: 6,
        name: "Bajaj Pulsar 150",
        price: "₹1,20,000",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "commuter",
        specs: {
            engine: "149.5cc",
            mileage: "45 kmpl",
            power: "14 PS",
            weight: "144 kg",
            topSpeed: "110 kmph",
            fuelCapacity: "15L",
            transmission: "5-speed",
            abs: "Single Channel"
        }
    },
    {
        id: 7,
        name: "TVS Apache RTR 160",
        price: "₹1,25,000",
        image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "sports",
        specs: {
            engine: "159.7cc",
            mileage: "45 kmpl",
            power: "15.8 PS",
            weight: "137 kg",
            topSpeed: "114 kmph",
            fuelCapacity: "12L",
            transmission: "5-speed",
            abs: "Single Channel"
        }
    },
    {
        id: 8,
        name: "Hero Splendor Plus",
        price: "₹75,000",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "commuter",
        specs: {
            engine: "97.2cc",
            mileage: "80 kmpl",
            power: "8.02 PS",
            weight: "112 kg",
            topSpeed: "87 kmph",
            fuelCapacity: "9.8L",
            transmission: "4-speed",
            abs: "No"
        }
    }
];

// DOM Elements
const bikeContainer = document.querySelector('.bike-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const bikeSelect1 = document.getElementById('bike1');
const bikeSelect2 = document.getElementById('bike2');
const bikeSelect3 = document.getElementById('bike3');
const compareBtn = document.getElementById('compareBtn');
const comparisonResult = document.getElementById('comparisonResult');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const homeSection = document.getElementById('home');
const loginSection = document.getElementById('login');
const comparisonSection = document.getElementById('comparison');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayBikes(bikes);
    setupFilters();
    setupMobileMenu();
    populateBikeDropdowns();
    setupNavigation();
    
    // Load comparison from localStorage if available
    const comparisonList = JSON.parse(localStorage.getItem('comparisonList')) || [];
    if (comparisonList.length > 0) {
        comparisonList.forEach((bikeId, index) => {
            const selectElement = [bikeSelect1, bikeSelect2, bikeSelect3][index];
            if (selectElement) {
                selectElement.value = bikeId;
            }
        });
    }
});

// Setup navigation
function setupNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href').substring(1);
            
            // Hide all sections
            homeSection.style.display = 'none';
            loginSection.style.display = 'none';
            comparisonSection.style.display = 'none';
            
            // Show target section
            if (target === 'home') {
                homeSection.style.display = 'block';
            } else if (target === 'login') {
                loginSection.style.display = 'flex';
            } else if (target === 'comparison') {
                comparisonSection.style.display = 'block';
            }
            
            // Close mobile menu if open
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Display bikes in the container
function displayBikes(bikesToShow) {
    bikeContainer.innerHTML = '';
    
    if (bikesToShow.length === 0) {
        bikeContainer.innerHTML = '<p class="no-bikes">No bikes found in this category.</p>';
        return;
    }
    
    bikesToShow.forEach(bike => {
        const bikeCard = document.createElement('div');
        bikeCard.classList.add('bike-card');
        bikeCard.innerHTML = `
            <img src="${bike.image}" alt="${bike.name}" class="bike-image" onerror="this.src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22300%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20300%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15e6df743a6%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A15pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15e6df743a6%22%3E%3Crect%20width%3D%22300%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22110%22%20y%3D%22107%22%3E${encodeURIComponent(bike.name)}%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'">
            <div class="bike-details">
                <h3 class="bike-title">${bike.name}</h3>
                <span class="bike-price">${bike.price}</span>
                <div class="bike-specs">
                    <div class="spec">
                        <div class="spec-value">${bike.specs.engine}</div>
                        <div class="spec-label">Engine</div>
                    </div>
                    <div class="spec">
                        <div class="spec-value">${bike.specs.mileage}</div>
                        <div class="spec-label">Mileage</div>
                    </div>
                    <div class="spec">
                        <div class="spec-value">${bike.specs.power}</div>
                        <div class="spec-label">Power</div>
                    </div>
                </div>
                <div class="bike-actions">
                    <button class="action-btn view-details">View Details</button>
                    <button class="action-btn compare-btn" data-id="${bike.id}">Compare</button>
                </div>
            </div>
        `;
        bikeContainer.appendChild(bikeCard);
    });
    
    // Add event listeners to compare buttons
    document.querySelectorAll('.compare-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const bikeId = parseInt(e.target.getAttribute('data-id'));
            addToComparison(bikeId);
        });
    });
}

// Setup filter functionality
function setupFilters() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter bikes
            const filter = button.getAttribute('data-filter');
            let filteredBikes;
            
            if (filter === 'all') {
                filteredBikes = bikes;
            } else {
                filteredBikes = bikes.filter(bike => bike.category === filter);
            }
            
            // Display filtered bikes
            displayBikes(filteredBikes);
        });
    });
}

// Setup mobile menu toggle
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Add bike to comparison (stored in localStorage)
function addToComparison(bikeId) {
    let comparisonList = JSON.parse(localStorage.getItem('comparisonList')) || [];
    
    if (!comparisonList.includes(bikeId)) {
        if (comparisonList.length >= 3) {
            alert('You can compare up to 3 bikes at a time.');
            return;
        }
        
        comparisonList.push(bikeId);
        localStorage.setItem('comparisonList', JSON.stringify(comparisonList));
        
        // Show confirmation message
        const bike = bikes.find(b => b.id === bikeId);
        alert(`Added ${bike.name} to comparison!`);
    } else {
        alert('This bike is already in your comparison list.');
    }
}

// Populate dropdowns with bike options
function populateBikeDropdowns() {
    const selects = [bikeSelect1, bikeSelect2, bikeSelect3];
    
    selects.forEach(select => {
        // Clear existing options except the first one
        while (select.options.length > 1) {
            select.remove(1);
        }
        
        // Add bike options
        bikes.forEach(bike => {
            const option = document.createElement('option');
            option.value = bike.id;
            option.textContent = bike.name;
            select.appendChild(option);
        });
    });
}

// Compare bikes button handler
compareBtn.addEventListener('click', compareBikes);

function compareBikes() {
    const selectedBikeIds = [
        parseInt(bikeSelect1.value),
        parseInt(bikeSelect2.value),
        parseInt(bikeSelect3.value)
    ].filter(id => !isNaN(id));
    
    if (selectedBikeIds.length < 2) {
        alert('Please select at least 2 bikes to compare.');
        return;
    }
    
    const selectedBikes = selectedBikeIds.map(id => 
        bikes.find(bike => bike.id === id)
    );
    
    displayComparison(selectedBikes);
    
    // Save to localStorage
    localStorage.setItem('comparisonList', JSON.stringify(selectedBikeIds));
}

// Display comparison results
function displayComparison(bikesToCompare) {
    // Get all unique specification keys
    const allSpecs = new Set();
    bikesToCompare.forEach(bike => {
        Object.keys(bike.specs).forEach(spec => allSpecs.add(spec));
    });
    
    const specArray = Array.from(allSpecs);
    
    // Create comparison table
    let tableHTML = `
        <table class="comparison-table">
            <thead>
                <tr>
                    <th>Specification</th>
    `;
    
    // Add bike headers
    bikesToCompare.forEach(bike => {
        tableHTML += `
            <th>
                <div class="bike-header">
                    <img src="${bike.image}" alt="${bike.name}" class="bike-image" onerror="this.src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22120%22%20height%3D%2290%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20120%2090%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15e6df743a6%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15e6df743a6%22%3E%3Crect%20width%3D%22120%22%20height%3D%2290%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2240%22%20y%3D%2252%22%3E${encodeURIComponent(bike.name)}%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'">
                    <div class="bike-title">${bike.name}</div>
                    <div class="bike-price">${bike.price}</div>
                </div>
            </th>
        `;
    });
    
    tableHTML += `</tr></thead><tbody>`;
    
    // Add specification rows
    specArray.forEach(spec => {
        // Format spec name for display
        const specName = spec.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        
        tableHTML += `
            <tr>
                <td class="spec-name">${specName}</td>
        `;
        
        // Get all values for this spec
        const values = bikesToCompare.map(bike => bike.specs[spec] || 'N/A');
        
        // For numeric values, find the winner
        const numericValues = values.map(val => {
            const num = parseFloat(val);
            return isNaN(num) ? null : num;
        });
        
        // If all values are numeric, highlight the best one
        const allNumeric = numericValues.every(val => val !== null);
        
        if (allNumeric) {
            // Determine if higher or lower is better for this spec
            const higherIsBetter = !['weight', 'mileage'].includes(spec);
            const bestValue = higherIsBetter ? 
                Math.max(...numericValues) : Math.min(...numericValues);
            
            values.forEach((value, index) => {
                const isBest = parseFloat(value) === bestValue;
                tableHTML += `
                    <td class="${isBest ? 'winner' : ''}">${value} ${isBest ? '⭐' : ''}</td>
                `;
            });
        } else {
            // For non-numeric values, just display them
            values.forEach(value => {
                tableHTML += `<td>${value}</td>`;
            });
        }
        
        tableHTML += `</tr>`;
    });
    
    tableHTML += `</tbody></table>`;
    
    comparisonResult.innerHTML = tableHTML;
}

// Login form handling
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (!email || !password) {
        showLoginError('Please fill in all fields');
        return;
    }
    
    if (!isValidEmail(email)) {
        showLoginError('Please enter a valid email address');
        return;
    }
    
    // Simulate API login
    simulateLoginAPI(email, password);
});

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showLoginError(message) {
    loginError.textContent = message;
    loginError.style.display = 'block';
    
    // Hide error after 5 seconds
    setTimeout(() => {
        loginError.style.display = 'none';
    }, 5000);
}

// Simulate API login (replace with real API call)
function simulateLoginAPI(email, password) {
    showLoginError('Logging in...');
    
    // Simulate API call delay
    setTimeout(() => {
        // This is a mock response
        if (email === 'demo@example.com' && password === 'password') {
            showLoginError('Login successful! Redirecting...');
            
            // Store user data
            localStorage.setItem('user', JSON.stringify({
                email: email,
                name: 'Demo User',
                loggedIn: true
            }));
            
            // Redirect to home page after successful login
            setTimeout(() => {
                homeSection.style.display = 'block';
                loginSection.style.display = 'none';
                showLoginError('');
            }, 1500);
        } else {
            showLoginError('Invalid email or password. Try demo@example.com / password');
        }
    }, 1500);
}

// Image error handling fallback
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15e6df743a6%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15e6df743a6%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285%22%20y%3D%22217%22%3EBikeHub%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
    }
}, true);
