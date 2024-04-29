<template>
	<div class="page-unavailable-product">
		<div class="page-unavailable-product-child"></div>
		<img class="page-unavailable-product-item" alt="" />

		<div class="page-unavailable-product-inner"></div>
		<div class="sad-face">
			<div class="div">:</div>
			<div class="div1">(</div>
			<div class="wrapper-vector-13">
				<img
					class="wrapper-vector-13-child"
					alt=""
					src="../assets/vector-13.svg" />
			</div>
			<img class="sad-face-child" alt="" src="../assets/vector-14.svg" />
		</div>
		<img class="group-icon" alt="" />

		<div class="this-product-is-unavailable-to-parent">
			<div class="this-product-is">This product is unavailable to show</div>
			<div class="rectangle-parent">
				<div class="group-child"></div>
				<div class="next-product">Next product</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ManView',
};
</script>

<style scoped>
.page-unavailable-product-child {
	position: absolute;
	top: 0;
	left: -3px;
	background-color: #d8d7d7;
	width: 100vw;
	height: 548px;
}
.page-unavailable-product-item {
	position: absolute;
	top: 0;
	left: -8px;
	width: 1288px;
	height: 548px;
	display: none;
}
.page-unavailable-product-inner {
	position: absolute;
	top: 126px;
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	background-color: var(--color-white);
	width: 1034px;
	height: 580px;
}
.div,
.div1 {
	position: absolute;
	top: 0;
	left: 1028px;
	transform: rotate(90deg);
	transform-origin: 0 0;
}
.div1 {
	top: 139px;
	left: 1002px;
}
.wrapper-vector-13-child {
	width: 100%;
	height: 100%;
	object-fit: contain;
	position: absolute;
	left: 0;
	top: 0;
	transform: scale(1.856);
}
.wrapper-vector-13 {
	position: absolute;
	top: 14px;
	left: 133px;
	width: 185.5px;
	height: 29.2px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.sad-face-child {
	position: absolute;
	top: 14px;
	left: 553px;
	width: 186px;
	height: 29px;
	object-fit: contain;
}
.group-icon,
.sad-face {
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 233px;
	left: 20vw;
	width: 1028px;
	height: 439px;
}
.group-icon {
	top: 0;
	left: -3px;
	width: 178px;
	height: 118px;
	display: none;
}
.group-child,
.this-product-is {
	position: absolute;
	top: 0;
	left: 67px;
}
.group-child {
	left: 0;
	border-radius: 4px;
	background-color: var(--color-white);
	border: 3px solid var(--color-black);
	box-sizing: border-box;
	width: 465px;
	height: 42px;
}
.next-product {
	position: absolute;
	top: 9px;
	left: 169px;
	font-weight: 600;
}
.rectangle-parent {
	position: absolute;
	top: 37px;
	left: 0;
	width: 465px;
	height: 42px;
	color: #3f3f3f;
}
.this-product-is-unavailable-to-parent {
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 372px;
	width: 465px;
	height: 79px;
	font-size: var(--font-size-xl);
	color: var(--color-black);
}
.page-unavailable-product {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	position: relative;
	background-color: var(--color-white);
	height: 832px;
	overflow: hidden;
	text-align: left;
	font-size: var(--font-size-809xl);
	color: var(--color-gray);
	font-family: var(--font-inter);
}
</style>
