app.component("view-list", {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  tempalte:
    /*html*/
    `<div class="review-container">
  <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }} gave this {{ review.rating }} stars
        <br/>
        "{{ review.review }}"
        <br/>
      </li>
    </ul>
  </div>`,
  data() {
    return {
      name: "",
      review: "",
      rating: null,
    };
  },
  methods: {},
});
