<template>
	<div>
		<div v-if="loading" class="loader-container">
			<div class="loader"></div>
		</div>
		<ManView
			v-if="!loading && isMan && !isWoman"
			:data="data"
			@next-product="nextProduct($event)" />
		<WomanView
			v-if="!loading && !isMan && isWoman"
			:data="data"
			@next-product="nextProduct($event)" />
		<LostView v-if="!loading && !isMan && !isWoman" @next-product="nextProduct($event)" />
	</div>
</template>

<script>
import LostView from '@/components/LostView.vue';
import ManView from '@/components/ManView.vue';
import WomanView from '@/components/WomanView.vue';

export default {
	name: 'PageDisplay',
	components: {
		ManView,
		WomanView,
		LostView,
	},
	data() {
		return {
			isMan: false,
			isWoman: false,
			data: null,
			loading: true,
			productNumber: 1,
		};
	},
	mounted() {
		this.fetchData();
	},
	methods: {
		async fetchData() {
			try {
				this.loading = true;
				const response = await fetch(
					`https://fakestoreapi.com/products/${this.productNumber}`
				);
				const data = await response.json();
				this.data = data;
				if (data.category === "men's clothing") {
					this.isMan = true;
					this.isWoman = false;
				} else if (data.category === "women's clothing") {
					this.isWoman = true;
					this.isMan = false;
				}
                else{
                    this.isMan = false;
                    this.isWoman = false;
                }
				this.loading = false;
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		},
		nextProduct(additionalProductNumber) {
			if (this.productNumber >= 20) {
				this.productNumber = 0;
			}
			this.productNumber += additionalProductNumber;
			this.fetchData();
		},
	},
};
</script>

<style>
.loader-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

.loader {
	border: 16px solid #f3f3f3;
	border-top: 16px solid #3498db;
	border-radius: 50%;
	width: 120px;
	height: 120px;
	animation: spin 2s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
