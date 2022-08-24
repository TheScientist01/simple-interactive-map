function initMap() {

    const jsonData = [
        { lat: 40.38204, lng: 49.848501, title: "Cloud", pri: 2, },
        { lat: 40.37976489650526, lng: 49.846615360733445, title: "28 May Metro", pri: 3, },
        { lat: 40.377018754615094, lng: 49.84172301154735, title: "AF Mall", pri: 1, },
        { lat: 40.3858125523699, lng: 49.85429720726247, title: "Yasil Bazar", pri: 3, },
        { lat: 40.3766264394935, lng: 49.85618548230717, title: "MediClub Polika", pri: 1 },
        {lat:40.37745224108964, lng:49.84451254221466, title: "Baku Music Academy", pri: 2},
        {lat: 40.38090939712145, lng: 49.83444889401141, title: "Araz Supermarket", pri: 2}

    ];

    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.38204, lng: 49.848501 },
        zoom: 15,
        mapId: 'f2ba8901af9af754',
        gestureHandling: 'none',
        zoomControl: false
    });

    jsonData.forEach(element => {
        let svg;
        switch (element.pri) {
            case 1:
                svg = {
                    url: "Pikachu.svg",
                    scaledSize: new google.maps.Size(100, 100)
                }
                break;
            case 2:
                svg = {
                    url: "bulbasaur.svg",
                    scaledSize: new google.maps.Size(35, 35)
                }
                break;
            case 3:
                svg = {
                    url: "charmander.svg",
                    scaledSize: new google.maps.Size(40, 40)
                }
                break;
            default:
                break;
        }
        console.log(svg);
        let marker = new google.maps.Marker({
            position: { lat: element.lat, lng: element.lng },
            map,
            title: element.title,
            icon: svg,
        })

        marker.addListener("click", () => {
            document.getElementById("details").innerHTML = `<tr><th>Title</th><th>Priority</th><th>Latitude</th><th>Long</th></tr><tr><td>${element.title}</td><td>${element.pri}</td><td>${element.lat}</td><td>${element.lng}</td></tr>`;
        })
        
        var infowindow=new google.maps.InfoWindow({content: element.title});
        marker.addListener('mouseover', function () {
            infowindow.open(map, this);
        });

        marker.addListener('mouseout', function () {
            infowindow.close();
            
        });
        

    });

}

