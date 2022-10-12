
  <template>
    <div class="flex ">
      <div class="container mx-auto  xl:pr-28">
        <ul class="flex justify-start text-xs xl:text-base  text-tertiary ">
          <li>
            <button
                @click="activeTabOne"
                class="block px-4 py-2  focus:border-tertiary focus:border-opacity-20  focus:border transition-all focus:transition-all z-50"
            >
             Details
            </button>
          </li>
          <li>
            <button
                @click="activeTabTwo"
                class="block px-4 py-2  focus:border-tertiary focus:border-opacity-20  focus:border transition-all focus:transition-all z-50"
            >
             Mehr Informationen
            </button>
          </li>
          <li>
            <button
                @click="activeTabThree"
                class="block px-4 py-2  focus:border-tertiary focus:border-opacity-20  focus:border transition-all focus:transition-all z-50"
            >
              Bewertungen
            </button>
          </li>
        </ul>
        <div class="p-5 h-5/6 text-tertiary text-sm bg-white border border-tertiary border-opacity-20 ">
          <div v-show="tab === 1">
            <p class="text-primary text-base font-semibold">Beschreibung:</p>
            <h4 class="font-semibold py-4">Vielfältig und Vitaminreich</h4>

            <p class="pb-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

            </p>

            <h4 class="font-semibold py-4">Ein kleines Wunderwerk der Natur</h4>

            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p><br><br>

            <p>.......</p>

          </div>
          <div v-show="tab === 2">
            <p class="text-primary text-base font-semibold">Beschreibung:</p>
            <h4 class="font-semibold py-4">Informationen</h4>

            <p class="pb-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

            </p>

            <h4 class="font-semibold py-4">Informationen 2</h4>

            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p><br><br>

            <p>.......</p>

          </div>
          <div v-show="tab === 3">
            <p class="text-primary text-base font-semibold">Beschreibung:</p>
            <h4 class="font-semibold py-4">Bewertungen</h4>

            <p class="pb-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

            </p>

            <h4 class="font-semibold py-4">Bewertungen 2</h4>

            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p><br><br>

            <p>.......</p>

          </div>
        </div>
      </div>
    </div>
  </template>


<script >
export default {
  data() {
    return {
      tab: 1,
    };
  },
  methods: {
    activeTabOne() {
      this.tab = 1;
    },
    activeTabTwo() {
      this.tab = 2;
    },
    activeTabThree() {
      this.tab = 3;
    },
  },
};
</script>


