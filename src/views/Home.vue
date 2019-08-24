<template>
  <div class="home">
	<div class="container">
		<ImageSlot v-for="imageObj in listOfImages" class="item" :id="imageObj.id" :src="imageObj.url" :height="Math.floor(Math.random() * 5) + 1 + '00px'"/>
	</div>
  </div>
</template>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-flow: column wrap;
		align-content: space-around;
		height: 300vh; //Should be taller than your tallest column
		border: 50px solid #ccc;
		padding: 0;
		overflow: scroll;
	}

	.item {
		max-width: 300px;
		min-width: 30vh;
		cursor: pointer;
	}

	/* Re-order items into 3 rows */
	.item:nth-child(3n+1) { order: 1; }
	.item:nth-child(3n+2) { order: 2; }
	.item:nth-child(3n)   { order: 3; }

	/* Force new columns */
	.container::before,
	.container::after {
		content: "";
		flex-basis: 100%;
		width: 0;
		order: 2;
	}
</style>

<script>
import Vue from "vue"
import VueResource from "vue-resource"
import ImageSlot from '@/components/ImageSlot.vue'

Vue.use(VueResource);

export default {
	components: {
		ImageSlot
	},
	name: 'home',
	link: 'https://farm66.staticflickr.com/65535/46748151375_f0efa27a10.jpg',
	data(){
		return {
			listOfImages: []
		}
	},
	methods:{
        getImages: function(){
            // Vue.$http.get(link).then(function(response){
			// 	console.log("response: ", response);
            //     this.listOfImages = response.data;
			// 	console.log("this.listOfImages: ", this.listOfImages);
            // }, function(error){
			// 	console.log(error.statusText);
			// });
			this.$http.get(this.link)
				.then(response => {
					// get body data
					this.listOfImages = [
						{
							url: "https://farm66.staticflickr.com/65535/46748151375_f0efa27a10.jpg",
							id: 1
						},
						{
							url: "https://farm66.staticflickr.com/65535/46748151375_f0efa27a10.jpg",
							id: 2
						},
						{
							url: "https://farm66.staticflickr.com/65535/46748151375_f0efa27a10.jpg",
							id: 3
						},
						{
							url: "https://farm66.staticflickr.com/65535/46748151375_f0efa27a10.jpg",
							id: 4
						},
						{
							url: "https://farm66.staticflickr.com/65535/46748151375_f0efa27a10.jpg",
							id: 5
						},
						{
							url: "https://farm66.staticflickr.com/65535/46748151375_f0efa27a10.jpg",
							id: 6
						},
						{
							url: "https://farm66.staticflickr.com/65535/46748151375_f0efa27a10.jpg",
							id: 7
						},
						{
							url: "https://farm66.staticflickr.com/65535/46748151375_f0efa27a10.jpg",
							id: 8
						},
						{
							url: "https://farm66.staticflickr.com/65535/46748151375_f0efa27a10.jpg",
							id: 9
						},
						{
							url: "https://farm66.staticflickr.com/65535/46748151375_f0efa27a10.jpg",
							id: 10
						}
					]
					console.log("Success: ", this.listOfImages);

				}, response => {
					console.error("Error: ", response);
				});
		}
    },
    mounted: function () {
		this.getImages();
    }
}
</script>
