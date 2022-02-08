const packages = [
    {name: "Someone", heavy: true, fragile: false, lost: false},
    {name: "Someone Else", heavy: false, fragile: true, lost: false},
    {name: "This Guy", heavy: false, fragile: false, lost: false},
]

let current = []

function draw() {
    let template = ""
    for (let i = 0; i < current.length; i++) {
        const package = current[i];
        template += `
        <div class="col-12 col-md-4 d-flex justify-content-center">
            <button class="bg-light rounded card-shadow" onclick="guess(${package.lost})">
                <img class="img-fluid rounded pt-1" src="">
                <div class="p-2 text-center">
                    <h3>Client: ${package.name}</h3>
                    <h4>${package.heavy}</h4>
                    <h4>Fragile: ${package.fragile}</h4>
                    <h5>${package.lost}</h5>
                </div>
            </button>
        </div>
        `        
    }
    document.getElementById('client-cards').innerHTML = template   
}

function home() {
    packages.forEach(package => package.lost = false)

    const randIndex = Math.floor(Math.random() * packages.length)
    packages[randIndex].lost = true
    current = packages
    draw()
}

function filter(filteredPackage){
    let lostPackage = packages.find(package => package.lost)

    current = current.filter(package => package[filteredPackage] === lostPackage[filteredPackage])
    draw()
}

function guess(fLost) {
    let lostPackage = packages.find(package => package.lost)

    if (lostPackage.lost == fLost) {
        console.log('Got It');
    }
}

