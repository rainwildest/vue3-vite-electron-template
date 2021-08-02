import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  setup() {
    console.log(process.env.NODE_ENV);
    const times = ref(0);
    // use computed
    const doubleTimes = computed(() => {
      return times.value * 2;
    });

    const print = () => {
      window.print();
    };

    return () => (
      <div>
        <h2> +1S </h2>
        <button
          onClick={() => {
            times.value++;
          }}
        >
          Times+1
        </button>
        <div>{times.value}</div>
        <div>{doubleTimes.value}</div>
        <button onClick={print}>打印 33</button>
      </div>
    );
  }
});
