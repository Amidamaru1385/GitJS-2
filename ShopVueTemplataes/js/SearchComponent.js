Vue.component("search", {
  props:["userSearch"],
  template: `
        <form action="#" class="search-form" @submit.prevent="$emit('filter',)">
                <custom-input v-model='userSearch'></custom-input>
                <button type="submit" class="btn-search">
                    <i class="fas fa-search"></i>
                </button>
            </form>
        `
})

Vue.component("custom-input", {
  data(){
    return{
      userSearch : ""
    }
  },
  template:`
  <input type="text" class="search-field" v-bind:value='userSearch' v-on:input="$emit('custom', $event.target.userSearch)">
  `
})

