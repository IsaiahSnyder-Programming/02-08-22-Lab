

const packages = [
    {name: "Someone", company: "FedEx", fragile: false, large: true, lost: false, image: 'https://media.istockphoto.com/vectors/brown-paper-box-cartoon-vector-id459899163?b=1&k=20&m=459899163&s=170667a&w=0&h=1kLd3SpMtqKusjc_CE1e814bX3Xf6xDqKJ9SvfIphRY='},
    {name: "Someone Else", company: "UsPs", fragile: true, large: false,  lost: false, image: 'https://cdn.pixabay.com/photo/2013/07/13/10/22/box-157074_960_720.png'},
    {name: "This Guy", company: "UPS", fragile: false, large: false, lost: false, image: 'https://s.alicdn.com/@sc04/kf/Ha5dc837c59504e47a6f7a54f82d2f068B.jpg_300x300.jpg'},
]

let current = []

function draw() {
    let template = ""
    for (let i = 0; i < current.length; i++) {
        const package = current[i];
        template += `
        <div class="col-12 col-md-4 d-flex justify-content-center">
            <button class="bg-light rounded card-shadow" onclick="guess(${package.lost})">
                <img class="img-fluid rounded pt-1" src="${package.image}">
                <div class="p-2 text-center">
                    <h3>Client: ${package.name}</h3>
                    <h4>Company: ${package.company}</h4>
                    <h4>Fragile: ${package.fragile}</h4>
                    <h4>Large: ${package.large}</h5>
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

