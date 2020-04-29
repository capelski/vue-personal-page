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
                De fet, resulta que no és gens fàcil de generar-los. Una propiertat important d'un sudoku ben generat és que només té una solució possible. Pot sonar obvi però, depenent de com i quantes caselles tingui omplertes, un sudoku pot tenir múltiples solucions vàlides. L'exemple més famós és el sudoku que la cadena de televisió britànica Sky TV va dibuixar en un turó oferint un premi de 5000£ per la solució; va resultar que tenia
                <a
                    href="https://www.sudokuwiki.org/Sudoku_Creation_and_Grading.pdf"
                    target="_blank"
                >1905 solucions possibles</a>. Aquesta anècdota va aconseguir despertar la meva curiositat!
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
                What followed next was a much longer journey that I had expected in the beginning. I was about to quit the project many times but, luckily, I watched
                <a
                    href="https://www.imdb.com/title/tt4276820/"
                    target="_blank"
                >The Founder</a> in the meanwhile, the movie that explains how Ray Kroc turned McDonald's into the biggest restaurant business in the world thanks to his bulletproof persistence. If you must know, this odyssey had four stages:
            </p>

            <p>
                <b>1. Results, results, results</b>: I couldn't fight the urge of seeing something done whithout thinking much. I assumed that the process of generating a 9x9 sudoku would be the same as generating a 4x4 one and I went for a quick command line algorithm.
            </p>
            <p class="text-center">
                <img
                    class="limited-size-image"
                    :src="`${images.commandLine}?$modena=vue-personal-page`"
                    alt="Command line generated sudoku"
                />
            </p>

            <p>
                <b>2. Damn! I need a graphical tool</b>: Almost there! The command line algorithm was generating valid single solution 4x4 sudokus 🎉 I just needed to adapt it to generate 9x9 sudoku and that would be the end of story. However, turns out that 9x9 sudokus have nothing to do with 4x4 sudokus. I couldn't figure out what was failing just by reading the command line output, so I had to go for a web application.
            </p>
            <p class="text-center">
                <img
                    class="limited-size-image"
                    :src="`${images.commandLineError}?$modena=vue-personal-page`"
                    alt="Command line generation error"
                />
            </p>

            <p>
                <b>3. Frog... this is complicated</b>: It didn't take me much time to create a web application that could display 9x9 sudoku grids. With the visual representation of the sudoku and the ability to place numbers back and forth I began to understand what I was missing out. There are additional rules that forbid placing a number in a box apart from having that number in the same column, region or row.
            </p>
            <p class="text-center">
                <img
                    class="limited-size-image"
                    :src="`${images.webAppFirstApproach}?$modena=vue-personal-page`"
                    alt="Web application first approach"
                />
            </p>

            <p>
                <b>4. There is light at the end of the tunnel</b>: After sitting down and thinking about it, as I should have done from the beginning, I figured out a set of additional rules that help discarding possible numbers from boxes. Having found out about those little bastards, it was just a matter of rewritting the algorithm to consider them. It took me a number of hours, but I could finally get a working generator.
            </p>
            <p class="text-center">
                <img
                    class="limited-size-image"
                    :src="`${images.webAppFinalApproach}?$modena=vue-personal-page`"
                    alt="Web application final approach"
                />
            </p>

            <p>
                Hey look ma, I made it! In my case I didn't build a hamburger empire but this
                <a
                    href="/sudoku-generator"
                    target="_blank"
                >sudoku generator</a>. I must admite that the generation fails sometimes, having to drop the faulty puzzle and starting again, but it always ends up generating valid single solution puzzles. If you are wondering, these are the rules my algorithm uses to generate sudoku. In fact, these are probably the rules you use when you are solving those puzzles too.
            </p>

            <ul>
                <li>
                    Si a una casella X només hi pot anar un número, aquest número ha d'anar a la casella X i no és vàlid en cap altra casella dels grups (fila, columna i regió) de la casella X:
                    <p class="text-center">
                        <img
                            class="limited-size-image"
                            :src="`${images.boxOnlyLeftCandidate}?$modena=vue-personal-page`"
                            alt="Web application final approach"
                        />
                    </p>
                </li>
                <li>
                    Si per un grup determinat un número només pot anar a la casella X, aquest número ha d'anar a la casella X i no és vàlid en cap altra casella dels grups de la casella X:
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
                    Si, per un grup determinat, les úniques caselles on pot anar un número estan a la mateixa fila o columna, aquest número no és vàlid a cap altra casella de la mateixa fila o columna:
                    <p class="text-center">
                        <img
                            class="limited-size-image"
                            :src="`${images.regionSubset}?$modena=vue-personal-page`"
                            alt="Web application final approach"
                        />
                    </p>
                </li>
            </ul>

            <p>I això vindria a ser tot. Vaig haver de dedicar-hi al voltant de 75 hores per aconseguir el que en diriem un generador acceptable. El resultat és menys complet del que m'havia imaginat en un principi, però les coses no són mai com esperes que siguin. Fes servir el generador si vols, però deixa'm avisar-te: no esta adaptat per mòbils i no vaig treballar en regular la dificultat, cosa que genera sudokus refotudament complicats. Bona sort i fins al proper post!</p>
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