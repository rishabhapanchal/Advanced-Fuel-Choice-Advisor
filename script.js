const cars = {
  petrol: [
    { name: "Toyota Urban Cruiser Hyryder Hybrid (petrol/hybrid)", fuel: "hybrid", image: "assets/car-images/hyryder.jpg", specs: "1.5L Hybrid, 25 kmpl, 103 hp" },
    { name: "Mahindra XUV700 Petrol 2023", fuel: "petrol", image: "assets/car-images/xuv700.jpg", specs: "2.0L Turbo, 13 kmpl, 200 hp" },
    { name: "Hyundai Creta 2023 Petrol", fuel: "petrol", image: "assets/car-images/creta.jpg", specs: "1.5L NA, 17 kmpl, 115 hp" }
  ],
  hybrid: [
    { name: "Toyota Urban Cruiser Hyryder Hybrid 2023", fuel: "hybrid", image: "assets/car-images/hyryder.jpg", specs: "1.5L Hybrid, 27 kmpl, 115 hp" },
    { name: "Toyota Innova Hycross Hybrid 2024", fuel: "hybrid", image: "assets/car-images/hycross.jpg", specs: "2.0L Hybrid, 23 kmpl, 186 hp" },
    { name: "Mahindra Hybrid SUV (expected)", fuel: "hybrid", image: "assets/car-images/mahindra-hybrid.jpg", specs: "2.0L Hybrid, 20 kmpl, 150 hp" }
  ],
  ev: [
    { name: "Tata Nexon EV 2024", fuel: "ev", image: "assets/car-images/nexon-ev.jpg", specs: "40.5 kWh, 325 km range, 129 hp" },
    { name: "Tata Punch EV 2024", fuel: "ev", image: "assets/car-images/punch-ev.jpg", specs: "25 kWh, 250 km range, 80 hp" },
    { name: "Tata Curvv EV 2025", fuel: "ev", image: "assets/car-images/curvv-ev.jpg", specs: "55 kWh, 400 km range, 150 hp" },
    { name: "Mahindra XUV400 EV 2024", fuel: "ev", image: "assets/car-images/xuv400-ev.jpg", specs: "39.4 kWh, 375 km range, 150 hp" },
    { name: "Mahindra BE.06 EV 2025", fuel: "ev", image: "assets/car-images/be6-ev.jpg", specs: "60 kWh, 450 km range, 170 hp" },
    { name: "MG ZS EV 2024", fuel: "ev", image: "assets/car-images/zs-ev.jpg", specs: "50.3 kWh, 419 km range, 176 hp" },
    { name: "MG Windsor EV 2025", fuel: "ev", image: "assets/car-images/windsor-ev.jpg", specs: "38 kWh, 331 km range, 134 hp" },
    { name: "Tesla Model 3 2024", fuel: "ev", image: "assets/car-images/tesla-model3.jpg", specs: "60 kWh, 500 km range, 283 hp" },
    { name: "Tesla Model S 2025", fuel: "ev", image: "assets/car-images/tesla-models.jpg", specs: "100 kWh, 650 km range, 670 hp" },
    { name: "Hyundai Kona Electric 2024", fuel: "ev", image: "assets/car-images/kona-ev.jpg", specs: "39.2 kWh, 305 km range, 136 hp" },
    { name: "Hyundai Creta Electric 2025", fuel: "ev", image: "assets/car-images/creta-ev.jpg", specs: "50 kWh, 400 km range, 140 hp" }
  ]
};

function getRecommendation() {
  const budget = parseInt(document.getElementById("budget").value);
  const output = document.getElementById("recommendation");
  output.innerHTML = "";

  if (isNaN(budget) || budget <= 0) {
    output.innerHTML = "<p>Please enter a valid budget.</p>";
    return;
  }

  let fuelType = "";
  if (budget < 2000000) fuelType = "petrol";
  else if (budget >= 2000000 && budget <= 3500000) fuelType = "hybrid";
  else fuelType = "ev";

  output.innerHTML += `<h2>Recommended Fuel Type: ${fuelType.toUpperCase()}</h2>`;

  cars[fuelType].forEach(car => {
    output.innerHTML += `
      <div class="car-card">
        <img src="${car.image}" alt="${car.name}" onclick="toggleSpecs(this)" />
        <h3>${car.name}</h3>
        <div class="car-specs">${car.specs}</div>
      </div>`;
  });
}

function toggleSpecs(imgElement) {
  const specsDiv = imgElement.nextElementSibling.nextElementSibling;
  specsDiv.classList.toggle("show");
}