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
    export default {
        name: "Places",
        mounted() {
            var locations = [
                ["London, May 2019, 4 days", 51.5073219, -0.1276474],
                ["Bucharest, April 2019, 3 days", 44.4361414, 26.1027202],
                ["Tunis, March 2019, 3 days", 36.800108, 10.184794],
                ["Tozeur, March 2019, 2 days", 33.920364, 8.13384],
                ["New York, October 2018, 7 days", 40.741895, -73.989308],
                ["Washington, October 2018, 1 day", 38.9071923, -77.0368707],
                ["Philadelphia, October 2018, 1 day", 39.9525839, -75.1652215],
                ["Funchal, August 2018, 9 days", 32.6669328, -16.9240554],
                ["Zurich, December 2017, 3 days", 47.3768866, 8.541694],
                ["Malta, September 2017, 6 days, ", 35.937496, 14.375416],
                ["Hvar, July 2017, 4 days", 43.1541875, 16.6527099],
                ["Beijing, May 2017, 4 days", 39.9042, 116.4073963],
                ["Shanghai, May 2017, 3 days", 31.2303904, 121.47370209999997],
                ["Shenzhen, May 2017, 2 days", 22.5329876, 114.0142231],
                ["Hong Kong, May 2017, 5 days", 22.396428, 114.10949700000003],
                ["Guilin/Yangshuo, May 2017, 2 days", 25.2945755, 110.2088946],
                ["Montpellier, March 2017, 3 days", 43.610769, 3.87671599],
                ["Lisbon, September 2016, 4 days", 38.7222524, -9.139336599999979],
                ["Bengaluru, July 2016, 2 days", 12.9715987, 77.59456269999998],
                ["Mahabalipuram, July 2016, 2 weeks", 12.626927, 80.19271090000007],
                ["Agra (Taj Mahal), July 2016, 1 day", 27.1766701, 78.00807450000002],
                ["Istanbul, August 2015, 4 days", 41.0082376, 28.97835889999999],
                ["Izmir (Ephesus), August 2015, 3 days", 38.423734, 27.142826000000014],
                ["Antalya, August 2015, 3 days", 36.8968908, 30.713323299999956],
                ["Cappadocia, August 2015, 3 days", 38.641842, 34.83140300000002],
                ["Helsinki, April 2015, 3 days", 60.16985569999999, 24.93837910000002],
                ["Budapest, Feburary 2015, 2 days", 47.497912, 19.04023499999994],
                ["Zagreb, Feburary 2015, 2 days", 45.8150108, 15.981918899999982],
                ["Viena, Feburary 2015, 2 days", 48.2081743, 16.37381890000006],
                ["Zakopane, January 2015, 3 days", 49.299181, 19.949562000000014],
                ["Berlin, December 2014, 3 days", 52.52000659999999, 13.404953999999975],
                ["Gdánsk, December 2014, 4 days", 54.35202520000001, 18.64663840000003],
                ["Wroclaw, November 2014, 2 days", 51.1078852, 17.03853760000004],
                ["Krakow, October 2014, 3 days", 50.06465009999999, 19.94497990000002],
                [
                    "Warsaw, September 2014 - February 2015, 5 months",
                    52.2296756,
                    21.012228700000037
                ],
                ["Maó, August 2014, 3 days", 39.885845563187374, 4.261535748437495],
                ["Prague, Feburary 2014, 3 days", 50.0755381, 14.43780049999998],
                [
                    "Eindhoven, November 2013, 3 days",
                    51.44164199999999,
                    5.469722499999989
                ],
                ["Rovato, July 2012, 2 weeks", 45.5306402, 10.017148499999962],
                ["Bournemouth, July 2010, 2 weeks", 50.719164, -1.8807689999999866],
                ["Magaluf, June 2010, 5 days", 39.5059889, 2.5307100999999648]
            ];

            if (typeof google !== "undefined") {
                var map = new google.maps.Map(document.getElementById("map"), {
                    zoom: 2,
                    center: new google.maps.LatLng(41.3850639, 2.1734035),
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });

                var infowindow = new google.maps.InfoWindow();
                var marker, i;

                for (i = 0; i < locations.length; i++) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        map: map
                    });

                    google.maps.event.addListener(
                        marker,
                        "click",
                        (function(marker, i) {
                            return function() {
                                infowindow.setContent(locations[i][0]);
                                infowindow.open(map, marker);
                            };
                        })(marker, i)
                    );
                }
            }
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
        background-image: url("/static/img/cross.png?$modena=vue-personal-page");
    }
    header.masthead #map {
        color: black;
    }
</style>