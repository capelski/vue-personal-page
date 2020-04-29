<template>
    <div>
        <p>
            La meva mare sempre ha estat una lectora fervent de diaris i, amb els anys, ha cultivat l'afició de completar els jocs que els diaris inclouen a les últimes pàgines. Entre aquests jocs sempre se n'hi troba un anomenat
            <a
                href="https://en.wikipedia.org/wiki/Sudoku"
                target="_blank"
            >sudoku</a>. Dos de fet; un de dificultat raonable i un de completament malvat. Va ser mentre ella estava enfeinada resolent el primer sudoku que la vaig interrompre. No recordo que volia en aquell moment, però si que recordo que vam parlar del sudoku i que em vaig fixar en la diferència de dificultat entre els dos nivells.
        </p>
        <div v-if="!isRenderedFromList">
            <div class="screen-splitter">
                <div>
                    <Sudoku
                        :size="9"
                        :values="[[' ', ' ', ' ', 1, 7, ' ', ' ', 5, 3], [3, 5, ' ', ' ', 8, 4, ' ', 7, 9], [8, 9, ' ', 3, ' ', 2],[5, 3, ' ', 4],[7, ' ', ' ', 5, ' ', 6, ' ', ' ', 4], [' ', 1, ' ', ' ', 2, ' ', 5, ' ', 8], [' ', 4, 5, ' ', ' ', 3, ' ', ' ', 7], [ ' ', ' ', ' ', 8, ' ', ' ', ' ', 2, 5], [' ', 2, ' ', 7, 9, ' ', ' ', 4]]"
                    />
                    <p class="text-center">Sudoku fàcil</p>
                </div>
                <div>
                    <Sudoku
                        :size="9"
                        :values="[[' ', ' ', ' ', ' ', 7, ' ', 8, ' ', 4], [4, ' ', 7], [' ', ' ', ' ', 4, 1, ' ', ' ', ' ', 2], [' ', ' ', ' ', ' ', 2, ' ', ' ', 4], [' ', 8, 1, ' ', 3, ' ', 5], [9, 6], [' ', 9, 8], [5, 1, ' ', 8, ' ', ' ', ' ', ' ', 7], [' ', ' ', ' ', ' ', ' ', 6, ' ', ' ', 1]]"
                    />
                    <p class="text-center">Sudoku difícil</p>
                </div>
            </div>

            <p>
                En el diari que la mama llegia aquell dia en concret, el sudoku fàcil tenia 28 caselles omplertes de les 81 caselles totals mentre que el sudoku difícil en tenia 29.
                <b>Com podia ser que el sudoku més complicat tingués més caselles omplertes!?</b> En altres paraules, no depen del número de caselles omplertes la dificultat del sudoku? Almenys, aquesta és la sensació que jo tenia. La veritat és que mai m'havia parat a pensar com es generen els sudokus. N'havia solucionat alguns es clar, però mai havia provat de generar-ne un.
            </p>

            <p>
                De fet, resulta que no és gens fàcil de generar-los. Una propiertat important d'un sudoku ben generat és que només té una solució possible. Pot sonar obvi però, depenent de com i quantes caselles tingui omplertes, un sudoku pot tenir múltiples solucions vàlides. L'exemple més famós és el sudoku que la cadena de televisió britànica Sky TV va dibuixar en un turó oferint 5000£ de premi per la solució; va resultar que tenia
                <a
                    href="https://www.sudokuwiki.org/Sudoku_Creation_and_Grading.pdf"
                    target="_blank"
                >1905 solucions possibles</a>. Aquesta anècdota va aconseguir despertar la meva curiositat.
            </p>
            <p class="text-center">
                <img
                    :src="`${images.skyTvHillside}?$modena=vue-personal-page`"
                    alt="Sky TV hillside sudoku"
                />
            </p>

            <p>
                <b>Normalment hi hauria rumiat una estona</b>, m'hauria adonat que és una tasca matemàticament complexa, hauria conclòs que la quantitat de temps lliure que requereix trobar una solució al problema excedeix la curiositat que em genera el tema
                <b>i finalment ho hauria deixat córrer</b>. Tanmateix resulta que acabava de començar un any sabàtic a la feina i que, degut a les measures preventives contra el COVID-19, es va cancelar el vol sense retorn que havia d'agafar el 31 de maig per anar a viure a Australia. Així doncs,
                <b>com que estava sense feina, tancat a casa i amb la major quantitat de temps lliure de la que mai hagués disposat</b> (a Espanya el confinament pel coronavirus va començar el 15 de maig i havia de durar almenys un més), vaig decidir que descobriria com generar sudokus 💪
            </p>

            <p>
                El que va venir a continuació va ser un camí més llarg del que m'havia esperat. Vaig estar apunt de donar el projecte per perdut vàries vegades però, per sort, vaig mirar
                <a
                    href="https://www.imdb.com/title/tt4276820/"
                    target="_blank"
                >The Founder</a> entremig, la pel·lícula que explica com Ray Kroc va transformar McDonald's en la cadena de restaurants més gran del món gràcies a la seva persistència a prova de bales. La veritat sigui dita, aquesta odissea va tenir quatre fases:
            </p>

            <p>
                <b>1. Resultats, resultats, resultats</b>: No vaig poder resistir l'impuls de voler veure part de la feina acabada sense haver de pensar massa. Vaig assumir que el procés de generar un sudoku de 9x9 seria el mateix que el de generar-ne un de 4x4 i vaig tirar per un algorisme de consola ràpid.
            </p>
            <p class="text-center">
                <img
                    class="limited-size-image"
                    :src="`${images.commandLine}?$modena=vue-personal-page`"
                    alt="Command line generated sudoku"
                />
            </p>

            <p>
                <b>2. Punyeta! Necessito una eina gràfica</b>: En teoria, només havia d'adaptar l'algorisme per generar sudokus de 9x9 i aqui acabaria la història. A la pràctica, resulta que els sudokus de 9x9 tenen poc a veure amb els de 4x4. No aconseguia entendre que estava fent malament només amb la informació que l'algorisme escrivia a la consola, així que no vaig tenir més remei que construir una eina gràfica.
            </p>
            <p class="text-center">
                <img
                    class="limited-size-image"
                    :src="`${images.commandLineError}?$modena=vue-personal-page`"
                    alt="Command line generation error"
                />
            </p>

            <p>
                <b>3. Cordons... això és complicat</b>: No em va portar gaire estona crear una aplicació web per representar sudokus de 9x9. Amb la representació visual del sudoku i la capacitat de fer i desfer omplint les caselles, vaig començar a entendre què m'havia passat per alt. Hi ha una lògica addicional que prohibeix posar un número en una casella més enllà de tenir el mateix número a la fila, columna o regió de la casella.
            </p>
            <p class="text-center">
                <img
                    class="limited-size-image"
                    :src="`${images.webAppFirstApproach}?$modena=vue-personal-page`"
                    alt="Web application first approach"
                />
            </p>

            <p>
                <b>4. La llum al final del túnel</b>: Després de seure i donar-hi unes quantes voltes, com hauria d'haver fet desde el principi, vaig descobrir un conjunt de regles lògiques que permeten descartar números de caselles. Havent trobat aquestes petites malxinades, només era qüestió de reescriure l'algorisme per considerar-les. Em va portar la seva estona, però finalment vaig aconseguir un generador vàlid.
            </p>
            <p class="text-center">
                <img
                    class="limited-size-image"
                    :src="`${images.webAppFinalApproach}?$modena=vue-personal-page`"
                    alt="Web application final approach"
                />
            </p>

            <p>
                Mira mama, ho he fet! En el meu cas no vaig construir un enorme imperi de les hamburgueses però si aquest humil
                <a
                    href="/sudoku-generator"
                    target="_blank"
                >generador de sudokus</a>. He d'admetre que a vegades arriba a carrerons sense sortida durant la generació, havent de descartar la feina i començar desde zero, però sempre acaba generant sudokus vàlids amb una única solució. En cas que t'ho estiguis preguntant, aquestes són les regles que utilitza l'algorisme per generar sudokus. De fet, és probable que siguin també les regles que fas servir tu a l'hora de resoldre'ls.
            </p>

            <ul>
                <li>
                    Si a una casella X només hi pot anar un número, aquest número ha d'anar a la casella X i no és vàlid en cap altra casella dels grups de la casella X (fila, columna i regió):
                    <p class="text-center">
                        <img
                            class="limited-size-image"
                            :src="`${images.boxOnlyLeftCandidate}?$modena=vue-personal-page`"
                            alt="Web application final approach"
                        />
                    </p>
                </li>
                <li>
                    Si, per un grup determinat, un número només pot anar a la casella X, aquest número ha d'anar a la casella X i no és vàlid en cap altra casella dels grups de la casella X:
                    <p class="text-center">
                        <img
                            class="limited-size-image"
                            :src="`${images.groupSingleCandidate}?$modena=vue-personal-page`"
                            alt="Web application final approach"
                        />
                    </p>
                </li>
                <li>
                    Si 2-3 caselles d'un grup només poden tenir els mateixos 2-3 números, aquests números no són vàlids en cap altra casella del mateix grup:
                    <p class="text-center">
                        <img
                            class="limited-size-image"
                            :src="`${images.ownedCandidates}?$modena=vue-personal-page`"
                            alt="Web application final approach"
                        />
                    </p>
                </li>
                <li>
                    Si, per una regió determinada, les úniques caselles on pot anar un número estan a la mateixa fila o columna, aquest número no és vàlid a cap altra casella de la mateixa fila o columna:
                    <p class="text-center">
                        <img
                            class="limited-size-image"
                            :src="`${images.regionSubset}?$modena=vue-personal-page`"
                            alt="Web application final approach"
                        />
                    </p>
                </li>
            </ul>

            <p>I això vindria a ser tot. Vaig haver de dedicar-hi al voltant de 75 hores per aconseguir el que en diriem un generador acceptable. El resultat és menys complet del que m'havia imaginat en un principi, però les coses no són mai com esperes que siguin. Ets lliure de fer servir el generador si vols, però hi ha dues coses que has de saber: no esta adaptat per mòbils i no vaig treballar en regular la dificultat, cosa que genera sudokus refotudament complicats. Bona sort i fins al proper post!</p>
        </div>
    </div>
</template>

<script>
import Sudoku from './sudoku';

export default {
    components: {
        Sudoku
    },
    props: ['isRenderedFromList', 'images']
};
</script>