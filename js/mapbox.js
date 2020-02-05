mapboxgl.accessToken = 'pk.eyJ1IjoicmV5bWFuMjAyIiwiYSI6ImNrNDI0bnIwNjA3cDQzaHJ3djBnNjgycjAifQ.OWrg7bBLW-b9a6ieTG5qLQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.5299519,-16.4012618], // starting position
    zoom: 18 // starting zoom
});
map.on('load', function () {
    map.loadImage(
        './img/map-point.png',
        function (error, image) {
            if (error) throw error;
            map.addImage('cat', image);
            map.addLayer({
                'id': 'points',
                'type': 'symbol',
                'source': {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [
                            {
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-71.529818, -16.401256],
                                }
                            }
                        ]
                    }
                },
                'layout': {
                    'icon-image': 'cat',
                    'icon-size': 0.10
                }
            });
        }
    );
});
map.addControl(new mapboxgl.NavigationControl());