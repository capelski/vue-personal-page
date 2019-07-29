<template>
    <div class="container navbar-spacer trips">
        <h1>Trips</h1>
        <div class="map-wrapper">
            <div id="map" style="width:100%; height: 500px;"></div>
        </div>
        <div class="cities-list">
            <div class="row text-center" v-for="marker of markers" :key="marker.label.city">
                <div class="col-sm-4 order-1 order-sm-2"><b>{{marker.label.city}}</b></div>
                <div class="col-sm-4 order-2 order-sm-1">{{marker.label.date}}</div>
                <div class="col-sm-4 order-3">{{marker.label.duration}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import loadGoogleMapsApi from 'load-google-maps-api';

    const getGoogleMaps = () => {
        return window.googleMaps ?
            Promise.resolve(window.googleMaps) :
            loadGoogleMapsApi({ key: process.env.MAPS_API_KEY })
                .then(_googleMaps => {
                    window.googleMaps = _googleMaps;
                    return googleMaps;
                });
    }

    export default {
        name: 'Trips',
        metaInfo: {
            title: 'Trips',
            meta: [{
                name: 'description', content: 'The list of places I have proudly travelled to along with an iteractive map. In constant expansion :D'
            }]
        },
        data() {
            return {
                markers: [
                    {
                        label: {
                            city: 'Brussels',
                            date: 'July 2019',
                            duration: '1 day'
                        },
                        lat: 50.8505,
                        lng: 4.34878
                    },
                    {
                        label: {
                            city: 'Antwerp',
                            date: 'July 2019',
                            duration: '1 day'
                        },
                        lat: 51.22111,
                        lng: 4.399708
                    },
                    {
                        label: {
                            city: 'Boom',
                            date: 'July 2019',
                            duration: '1 day'
                        },
                        lat: 51.088712,
                        lng: 4.377515
                    },
                    {
                        label: {
                            city: 'Ghent',
                            date: 'July 2019',
                            duration: '1 day'
                        },
                        lat: 51.053829,
                        lng: 3.725012
                    },
                    {
                        label: {
                            city: 'Bruges',
                            date: 'July 2019',
                            duration: '1 day'
                        },
                        lat: 51.208553,
                        lng: 3.226772
                    },
                    {
                        label: {
                            city: 'London',
                            date: 'May 2019',
                            duration: '4 days'
                        },
                        lat: 51.5073219,
                        lng: -0.1276474
                    },
                    {
                        label: {
                            city: 'Bucharest',
                            date: 'April 2019',
                            duration: '3 days'
                        },
                        lat: 44.4361414,
                        lng: 26.1027202
                    },
                    {
                        label: {
                            city: 'Tunis',
                            date: 'March 2019',
                            duration: '3 days'
                        },
                        lat: 36.800108,
                        lng: 10.184794
                    },
                    {
                        label: {
                            city: 'Tozeur',
                            date: 'March 2019',
                            duration: '2 days'
                        },
                        lat: 33.920364,
                        lng: 8.13384
                    },
                    {
                        label: {
                            city: 'New York',
                            date: 'October 2018',
                            duration: '7 days'
                        },
                        lat: 40.741895,
                        lng: -73.989308
                    },
                    {
                        label: {
                            city: 'Washington',
                            date: 'October 2018',
                            duration: '1 day'
                        },
                        lat: 38.9071923,
                        lng: -77.0368707
                    },
                    {
                        label: {
                            city: 'Philadelphia',
                            date: 'October 2018',
                            duration: '1 day'
                        },
                        lat: 39.9525839,
                        lng: -75.1652215
                    },
                    {
                        label: {
                            city: 'Funchal',
                            date: 'August 2018',
                            duration: '9 days'
                        },
                        lat: 32.6669328,
                        lng: -16.9240554
                    },
                    {
                        label: {
                            city: 'Zurich',
                            date: 'December 2017',
                            duration: '3 days'
                        },
                        lat: 47.3768866,
                        lng: 8.541694
                    },
                    {
                        label: {
                            city: 'Malta',
                            date: 'September 2017',
                            duration: '6 days'
                        },
                        lat: 35.937496,
                        lng: 14.375416
                    },
                    {
                        label: {
                            city: 'Hvar',
                            date: 'July 2017',
                            duration: '4 days'
                        },
                        lat: 43.1541875,
                        lng: 16.6527099
                    },
                    {
                        label: {
                            city: 'Beijing',
                            date: 'May 2017',
                            duration: '4 days'
                        },
                        lat: 39.9042,
                        lng: 116.4073963
                    },
                    {
                        label: {
                            city: 'Shanghai',
                            date: 'May 2017',
                            duration: '3 days'
                        },
                        lat: 31.2303904,
                        lng: 121.47370209999997
                    },
                    {
                        label: {
                            city: 'Shenzhen',
                            date: 'May 2017',
                            duration: '2 days'
                        },
                        lat: 22.5329876,
                        lng: 114.0142231
                    },
                    {
                        label: {
                            city: 'Hong Kong',
                            date: 'May 2017',
                            duration: '5 days'
                        },
                        lat: 22.396428,
                        lng: 114.10949700000003
                    },
                    {
                        label: {
                            city: 'Guilin/Yangshuo',
                            date: 'May 2017',
                            duration: '2 days'
                        },
                        lat: 25.2945755,
                        lng: 110.2088946
                    },
                    {
                        label: {
                            city: 'Montpellier',
                            date: 'March 2017',
                            duration: '3 days'
                        },
                        lat: 43.610769,
                        lng: 3.87671599
                    },
                    {
                        label: {
                            city: 'Lisbon',
                            date: 'September 2016',
                            duration: '4 days'
                        },
                        lat: 38.7222524,
                        lng: -9.139336599999979
                    },
                    {
                        label: {
                            city: 'Bengaluru',
                            date: 'July 2016',
                            duration: '2 days'
                        },
                        lat: 12.9715987,
                        lng: 77.59456269999998
                    },
                    {
                        label: {
                            city: 'Mahabalipuram',
                            date: 'July 2016',
                            duration: '2 weeks'
                        },
                        lat: 12.626927,
                        lng: 80.19271090000007
                    },
                    {
                        label: {
                            city: 'Agra (Taj Mahal)',
                            date: 'July 2016',
                            duration: '1 day'
                        },
                        lat: 27.1766701,
                        lng: 78.00807450000002
                    },
                    {
                        label: {
                            city: 'Istanbul',
                            date: 'August 2015',
                            duration: '4 days'
                        },
                        lat: 41.0082376,
                        lng: 28.97835889999999
                    },
                    {
                        label: {
                            city: 'Izmir (Ephesus)',
                            date: 'August 2015',
                            duration: '3 days'
                        },
                        lat: 38.423734,
                        lng: 27.142826000000014
                    },
                    {
                        label: {
                            city: 'Antalya',
                            date: 'August 2015',
                            duration: '3 days'
                        },
                        lat: 36.8968908,
                        lng: 30.713323299999956
                    },
                    {
                        label: {
                            city: 'Cappadocia',
                            date: 'August 2015',
                            duration: '3 days'
                        },
                        lat: 38.641842,
                        lng: 34.83140300000002
                    },
                    {
                        label: {
                            city: 'Helsinki',
                            date: 'April 2015',
                            duration: '3 days'
                        },
                        lat: 60.16985569999999,
                        lng: 24.93837910000002
                    },
                    {
                        label: {
                            city: 'Budapest',
                            date: 'Feburary 2015',
                            duration: '2 days'
                        },
                        lat: 47.497912,
                        lng: 19.04023499999994
                    },
                    {
                        label: {
                            city: 'Zagreb',
                            date: 'Feburary 2015',
                            duration: '2 days'
                        },
                        lat: 45.8150108,
                        lng: 15.981918899999982
                    },
                    {
                        label: {
                            city: 'Viena',
                            date: 'Feburary 2015',
                            duration: '2 days'
                        },
                        lat: 48.2081743,
                        lng: 16.37381890000006
                    },
                    {
                        label: {
                            city: 'Zakopane',
                            date: 'January 2015',
                            duration: '3 days'
                        },
                        lat: 49.299181,
                        lng: 19.949562000000014
                    },
                    {
                        label: {
                            city: 'Berlin',
                            date: 'December 2014',
                            duration: '3 days'
                        },
                        lat: 52.52000659999999,
                        lng: 13.404953999999975
                    },
                    {
                        label: {
                            city: 'Gdánsk',
                            date: 'December 2014',
                            duration: '4 days'
                        },
                        lat: 54.35202520000001,
                        lng: 18.64663840000003
                    },
                    {
                        label: {
                            city: 'Wroclaw',
                            date: 'November 2014',
                            duration: '2 days'
                        },
                        lat: 51.1078852,
                        lng: 17.03853760000004
                    },
                    {
                        label: {
                            city: 'Krakow',
                            date: 'October 2014',
                            duration: '3 days'
                        },
                        lat: 50.06465009999999,
                        lng: 19.94497990000002
                    },
                    {
                        label: {
                            city: 'Warsaw',
                            date: 'September 2014 - February 2015',
                            duration: '5 months'
                        },
                        lat: 52.2296756,
                        lng: 21.012228700000037
                    },
                    {
                        label: {
                            city: 'Maó',
                            date: 'August 2014',
                            duration: '3 days'
                        },
                        lat: 39.885845563187374,
                        lng: 4.261535748437495
                    },
                    {
                        label: {
                            city: 'Prague',
                            date: 'Feburary 2014',
                            duration: '3 days'
                        },
                        lat: 50.0755381,
                        lng: 14.43780049999998
                    },
                    {
                        label: {
                            city: 'Eindhoven',
                            date: 'November 2013',
                            duration: '3 days'
                        },
                        lat: 51.44164199999999,
                        lng: 5.469722499999989
                    },
                    {
                        label: {
                            city: 'Rovato',
                            date: 'July 2012',
                            duration: '2 weeks'
                        },
                        lat: 45.5306402,
                        lng: 10.017148499999962
                    },
                    {
                        label: {
                            city: 'Bournemouth',
                            date: 'July 2010',
                            duration: '2 weeks'
                        },
                        lat: 50.719164,
                        lng: -1.8807689999999866
                    },
                    {
                        label: {
                            city: 'Magaluf',
                            date: 'June 2010',
                            duration: '5 days'
                        },
                        lat: 39.5059889,
                        lng: 2.530710099999964
                    }
                ]
            };
        },
        mounted() {
            getGoogleMaps()
                .then(googleMaps => {
                    const map = new googleMaps.Map(document.getElementById('map'), {
                        zoom: 2,
                        center: new googleMaps.LatLng(41.3850639, 2.1734035)
                    });

                    const infowindow = new googleMaps.InfoWindow();
                    for (let i = 0; i < this.markers.length; i++) {
                        const markerData = this.markers[i];
                        const marker = new googleMaps.Marker({
                            position: new googleMaps.LatLng(markerData.lat, markerData.lng),
                            map: map
                        });

                        googleMaps.event.addListener(
                            marker,
                            'click',
                            () => {
                                infowindow.setContent(`${markerData.label.city}, ${markerData.label.date}, ${markerData.label.duration}`);
                                infowindow.open(map, marker);
                            }
                        );
                    }
                });
        }
    };
</script>

<style scoped>
    .trips {
        color: black;
    }
    .trips .map-wrapper {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .trips .cities-list {
        margin-bottom: 20px;
    }
    .trips .cities-list .row {
        margin-bottom: 20px;
    }
</style>