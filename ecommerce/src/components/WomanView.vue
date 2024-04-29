<template>
	<div class="page-men-section">
		<div class="rectangle-parent">
			<div class="frame-child"></div>
			<img class="intersect-icon" alt="" src="../assets/intersect@2x.png" />

			<div class="frame-parent">
				<div class="mens-casual-slim-fit-parent">
					<h3 class="mens-casual-slim">{{ data.title }}</h3>
					<div class="mens-clothing-parent">
						<div class="mens-clothing">{{ data.category }}</div>
						<div class="parent">
							<div class="div">{{ data.rating.rate }}</div>
							<div v-for="index in 5" :key="index" class="frame-wrapper">
								<div class="ellipse-parent">
									<div
										v-if="data.rating.rate > index"
										class="frame-item"></div>
									<div v-else class="frame-child1"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="great-outerwear-jackets">
					{{ data.description }}
				</div>
			</div>
			<div class="div1">${{ data.price }}</div>
			<div class="frame-group">
				<button class="rectangle-group">
					<div class="rectangle-div"></div>
					<div class="buy-now">Buy now</div>
				</button>
				<button class="rectangle-container" @click="nextProduct">
					<div class="frame-child3"></div>
					<div class="next-product">Next product</div>
				</button>
			</div>
		</div>
		<div class="frame-div">
			<div class="frame-child-woman"></div>
			<img class="bg-pattern-icon" alt="" src="../assets/bgpattern.svg" />

			<img class="image-2-icon" loading="lazy" alt="" :src="data.image" />

			<img
				class="vector-icon"
				loading="lazy"
				alt=""
				src="../assets/vector-11.svg" />

			<img
				class="frame-child5"
				loading="lazy"
				alt=""
				src="../assets/vector-12.svg" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'WomanView',
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
	methods: {
		nextProduct() {
			this.$emit('next-product', 1); // 1 adalah informasi tambahan yang menyatakan penambahan 1 pada productNumber
		},
	},
};
</script>

<style scoped>
.frame-child,
.intersect-icon {
	position: relative;
	border-radius: var(--br-3xs);
	display: none;
}
.frame-child {
	width: 1034px;
	height: 580px;
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
	background-color: var(--color-white);
	max-width: 100%;
}
.intersect-icon {
	width: 0;
	height: 0;
	object-fit: cover;
}
.mens-casual-slim {
	margin: 0;
	align-self: stretch;
	position: relative;
	font-size: inherit;
	font-weight: 600;
	font-family: inherit;
	z-index: 1;
}
.div,
.mens-clothing {
	position: relative;
	display: inline-block;
	min-width: 124px;
	z-index: 1;
}
.div {
	min-width: 45px;
}
.ellipse-div,
.frame-child1,
.frame-child2,
.frame-inner,
.frame-item {
	height: 18px;
	width: 18px;
	position: relative;
	border-radius: 50%;
	background-color: var(--color-purple-200);
	z-index: 1;
}
.frame-child1,
.frame-child2 {
	background-color: var(--color-white);
	border: 1px solid var(--color-purple-200);
	box-sizing: border-box;
}
.ellipse-parent {
	align-self: stretch;
	flex-direction: row;
	gap: 2px;
}
.ellipse-parent,
.frame-wrapper,
.mens-clothing-parent,
.parent {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
}
.frame-wrapper {
	flex: 1;
	flex-direction: column;
	padding: 2px 0 0;
}
.mens-clothing-parent,
.parent {
	width: 148px;
	flex-direction: row;
	gap: 5px;
}
.mens-clothing-parent {
	width: 537px;
	justify-content: space-between;
	gap: 20px;
	max-width: 100%;
	font-size: var(--font-size-lg);
	color: var(--color-darkslategray);
}
.mens-casual-slim-fit-parent {
	align-self: stretch;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 17px;
	max-width: 100%;
}
.great-outerwear-jackets {
	width: 517px;
	position: relative;
	font-size: var(--font-size-xl);
	color: #1e1e1e;
	display: inline-block;
	max-width: 100%;
	z-index: 1;
}
.frame-parent {
	align-self: stretch;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 0 0 129px;
	box-sizing: border-box;
	gap: 32px;
	max-width: 100%;
}
.div1 {
	position: relative;
	font-weight: 600;
	display: inline-block;
	min-width: 97px;
	white-space: nowrap;
	z-index: 1;
}
.rectangle-div {
	height: 42px;
	width: 259px;
	position: relative;
	border-radius: var(--br-9xs);
	background-color: var(--color-purple-200);
	display: none;
}
.buy-now {
	position: relative;
	font-size: var(--font-size-xl);
	font-weight: 600;
	font-family: var(--font-inter);
	color: var(--color-white);
	text-align: left;
	display: inline-block;
	min-width: 83px;
	z-index: 1;
}
.frame-child3,
.rectangle-group {
	border-radius: var(--br-9xs);
	box-sizing: border-box;
}
.rectangle-group {
	cursor: pointer;
	border: 0;
	padding: 9px 20px;
	background-color: var(--color-purple-200);
	flex: 1;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: center;
	min-width: 168px;
	white-space: nowrap;
	z-index: 1;
}
.rectangle-group:hover {
	background-color: var(--color-purple-100);
}
.frame-child3 {
	height: 42px;
	width: 259px;
	position: relative;
	background-color: var(--color-white);
	border: 3px solid var(--color-purple-200);
	display: none;
}
.next-product {
	position: relative;
	font-size: var(--font-size-xl);
	font-weight: 600;
	font-family: var(--font-inter);
	color: var(--color-purple-200);
	text-align: left;
	display: inline-block;
	min-width: 127px;
	z-index: 1;
}
.frame-group,
.rectangle-container,
.rectangle-parent {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
}
.rectangle-container {
	cursor: pointer;
	border: 3px solid var(--color-purple-200);
	padding: 5px 66px;
	background-color: var(--color-white);
	border-radius: var(--br-9xs);
	flex-direction: row;
	white-space: nowrap;
	z-index: 1;
}
.rectangle-container:hover {
	background-color: #e6e6e6;
	border: 3px solid var(--color-purple-100);
	box-sizing: border-box;
}
.frame-group,
.rectangle-parent {
	max-width: 100%;
}
.frame-group {
	width: 537px;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 19px;
}
.rectangle-parent {
	position: absolute;
	top: 126px;
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: var(--br-3xs);
	background-color: var(--color-white);
	width: 1034px;
	flex-direction: column;
	padding: 50px 56px 46px 430px;
	box-sizing: border-box;
	gap: 15px;
	z-index: 2;
}
.frame-child4 {
	position: absolute;
	top: 0;
	left: -3px;
	background-color: #d6e6ff;
	width: 100vw;
	height: 548px;
}
.frame-child-woman {
	position: absolute;
	top: 0;
	left: -3px;
	background-color: #fde2ff;
	width: 100vw;
	height: 548px;
}
.bg-pattern-icon,
.image-2-icon {
	position: absolute;
	top: -9px;
	left: -18px;
	width: 1435.2px;
	height: 656.8px;
	z-index: 1;
}
.image-2-icon {
	top: 231px;
	left: 19vw;
	width: 301px;
	height: 383px;
	object-fit: cover;
	z-index: 3;
}
.frame-child5,
.vector-icon {
	position: absolute;
	top: 549.5px;
	left: 43.5vw;
	width: 542.5px;
	height: 1px;
	z-index: 3;
}
.frame-child5 {
	top: 257px;
	left: 555px;
}
.frame-div {
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 647.8px;
}
.page-men-section {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 1200px;
	position: relative;
	background-color: var(--color-white);
	overflow: hidden;
	line-height: normal;
	letter-spacing: normal;
	text-align: left;
	font-size: var(--font-size-9xl);
	color: var(--color-purple-200);
	font-family: var(--font-inter);
}
@media screen and (max-width: 750px) {
	.mens-clothing-parent {
		flex-wrap: wrap;
	}
	.page-men-section {
		height: auto;
		min-height: 832;
	}
}
@media screen and (max-width: 675px) {
	.ellipse-div,
	.frame-child1,
	.frame-child2,
	.frame-inner,
	.frame-item {
		width: 100%;
	}
	.ellipse-parent {
		flex-wrap: wrap;
	}
}
@media screen and (max-width: 450px) {
	.mens-casual-slim {
		font-size: var(--font-size-3xl);
	}
	.great-outerwear-jackets {
		font-size: 16px;
	}
	.div1 {
		font-size: var(--font-size-3xl);
	}
}
</style>
