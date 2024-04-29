<template>
	<!-- <nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link> |
		<router-link to="/man">Man</router-link>
	</nav> -->
	<router-view />
</template>

<style>
body {
	margin: 0;
	line-height: normal;
}

:root {
	/* fonts */
	--font-inter: Inter;

	/* font sizes */
	--font-size-xl: 20px;
	--font-size-809xl: 828px;
	--font-size-9xl: 28px;
	--font-size-3xl: 22px;
	--font-size-lg: 18px;

	/* Colors */
	--color-white: #fff;
	--color-black: #000;
	--color-gray: rgba(0, 0, 0, 0.1);
	--color-purple-100: #a63394;
	--color-purple-200: #720060;
	--color-darkslategray: #3f3f3f;
	--color-midnightblue: #002772;
	--color-darkslateblue: #3359a6;
	--color-darkslategray: #3f3f3f;

	/* Border radiuses */
	--br-3xs: 10px;
	--br-9xs: 4px;
}

</style>
