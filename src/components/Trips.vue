<template>
    <div class="navbar-spacer">
        <header class="masthead">
            <div class="container">
                <div id="map" style="width:100%; height: 500px;"></div>
            </div>
        </header>
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
        mounted() {
            const markers = [
                {
                        label: 'London, May 2019, 4 days',
                        lat: 51.5073219,
                        lng: -0.1276474
                    },
                    {
                        label: 'Bucharest, April 2019, 3 days',
                        lat: 44.4361414,
                        lng: 26.1027202
                    },
                    {
                        label: 'Tunis, March 2019, 3 days',
                        lat: 36.800108,
                        lng: 10.184794
                    },
                    {
                        label: 'Tozeur, March 2019, 2 days',
                        lat: 33.920364,
                        lng: 8.13384
                    },
                    {
                        label: 'New York, October 2018, 7 days',
                        lat: 40.741895,
                        lng: -73.989308
                    },
                    {
                        label: 'Washington, October 2018, 1 day',
                        lat: 38.9071923,
                        lng: -77.0368707
                    },
                    {
                        label: 'Philadelphia, October 2018, 1 day',
                        lat: 39.9525839,
                        lng: -75.1652215
                    },
                    {
                        label: 'Funchal, August 2018, 9 days',
                        lat: 32.6669328,
                        lng: -16.9240554
                    },
                    {
                        label: 'Zurich, December 2017, 3 days',
                        lat: 47.3768866,
                        lng: 8.541694
                    },
                    {
                        label: 'Malta, September 2017, 6 days, ',
                        lat: 35.937496,
                        lng: 14.375416
                    },
                    {
                        label: 'Hvar, July 2017, 4 days',
                        lat: 43.1541875,
                        lng: 16.6527099
                    },
                    {
                        label: 'Beijing, May 2017, 4 days',
                        lat: 39.9042,
                        lng: 116.4073963
                    },
                    {
                        label: 'Shanghai, May 2017, 3 days',
                        lat: 31.2303904,
                        lng: 121.47370209999997
                    },
                    {
                        label: 'Shenzhen, May 2017, 2 days',
                        lat: 22.5329876,
                        lng: 114.0142231
                    },
                    {
                        label: 'Hong Kong, May 2017, 5 days',
                        lat: 22.396428,
                        lng: 114.10949700000003
                    },
                    {
                        label: 'Guilin/Yangshuo, May 2017, 2 days',
                        lat: 25.2945755,
                        lng: 110.2088946
                    },
                    {
                        label: 'Montpellier, March 2017, 3 days',
                        lat: 43.610769,
                        lng: 3.87671599
                    },
                    {
                        label: 'Lisbon, September 2016, 4 days',
                        lat: 38.7222524,
                        lng: -9.139336599999979
                    },
                    {
                        label: 'Bengaluru, July 2016, 2 days',
                        lat: 12.9715987,
                        lng: 77.59456269999998
                    },
                    {
                        label: 'Mahabalipuram, July 2016, 2 weeks',
                        lat: 12.626927,
                        lng: 80.19271090000007
                    },
                    {
                        label: 'Agra (Taj Mahal), July 2016, 1 day',
                        lat: 27.1766701,
                        lng: 78.00807450000002
                    },
                    {
                        label: 'Istanbul, August 2015, 4 days',
                        lat: 41.0082376,
                        lng: 28.97835889999999
                    },
                    {
                        label: 'Izmir (Ephesus), August 2015, 3 days',
                        lat: 38.423734,
                        lng: 27.142826000000014
                    },
                    {
                        label: 'Antalya, August 2015, 3 days',
                        lat: 36.8968908,
                        lng: 30.713323299999956
                    },
                    {
                        label: 'Cappadocia, August 2015, 3 days',
                        lat: 38.641842,
                        lng: 34.83140300000002
                    },
                    {
                        label: 'Helsinki, April 2015, 3 days',
                        lat: 60.16985569999999,
                        lng: 24.93837910000002
                    },
                    {
                        label: 'Budapest, Feburary 2015, 2 days',
                        lat: 47.497912,
                        lng: 19.04023499999994
                    },
                    {
                        label: 'Zagreb, Feburary 2015, 2 days',
                        lat: 45.8150108,
                        lng: 15.981918899999982
                    },
                    {
                        label: 'Viena, Feburary 2015, 2 days',
                        lat: 48.2081743,
                        lng: 16.37381890000006
                    },
                    {
                        label: 'Zakopane, January 2015, 3 days',
                        lat: 49.299181,
                        lng: 19.949562000000014
                    },
                    {
                        label: 'Berlin, December 2014, 3 days',
                        lat: 52.52000659999999,
                        lng: 13.404953999999975
                    },
                    {
                        label: 'Gdánsk, December 2014, 4 days',
                        lat: 54.35202520000001,
                        lng: 18.64663840000003
                    },
                    {
                        label: 'Wroclaw, November 2014, 2 days',
                        lat: 51.1078852,
                        lng: 17.03853760000004
                    },
                    {
                        label: 'Krakow, October 2014, 3 days',
                        lat: 50.06465009999999,
                        lng: 19.94497990000002
                    },
                    {
                        label: 'Warsaw, September 2014 - February 2015, 5 months',
                        lat: 52.2296756,
                        lng: 21.012228700000037
                    },
                    {
                        label: 'Maó, August 2014, 3 days',
                        lat: 39.885845563187374,
                        lng: 4.261535748437495
                    },
                    {
                        label: 'Prague, Feburary 2014, 3 days',
                        lat: 50.0755381,
                        lng: 14.43780049999998
                    },
                    {
                        label: 'Eindhoven, November 2013, 3 days',
                        lat: 51.44164199999999,
                        lng: 5.469722499999989
                    },
                    {
                        label: 'Rovato, July 2012, 2 weeks',
                        lat: 45.5306402,
                        lng: 10.017148499999962
                    },
                    {
                        label: 'Bournemouth, July 2010, 2 weeks',
                        lat: 50.719164,
                        lng: -1.8807689999999866
                    },
                    {
                        label: 'Magaluf, June 2010, 5 days',
                        lat: 39.5059889,
                        lng: 2.530710099999964
                    }
            ];

            getGoogleMaps()
                .then(googleMaps => {
                    const map = new googleMaps.Map(document.getElementById('map'), {
                        zoom: 2,
                        center: new googleMaps.LatLng(41.3850639, 2.1734035)
                    });

                    const infowindow = new googleMaps.InfoWindow();
                    for (let i = 0; i < markers.length; i++) {
                        const markerData = markers[i];
                        const marker = new googleMaps.Marker({
                            position: new googleMaps.LatLng(markerData.lat, markerData.lng),
                            map: map
                        });

                        googleMaps.event.addListener(
                            marker,
                            'click',
                            () => {
                                infowindow.setContent(markerData.label);
                                infowindow.open(map, marker);
                            }
                        );
                    }
                });
        }
    };
</script>

<style scoped>
    header.masthead {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: white;
        background-image: url('/img/cross.png?$modena=vue-personal-page');
    }
    header.masthead #map {
        color: black;
    }
</style>