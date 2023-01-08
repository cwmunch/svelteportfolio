<script>
	import './navbar.css';
	import Logo from './logo.svelte';
	import { fade } from 'svelte/transition';
	let y;
	let isActive = false;

	function toggleMenu() {
		isActive = !isActive;
	}
</script>

<svelte:window bind:scrollY={y} />

<div
	class="navbar shadow-lg bg-neutral text-neutral-content top-0 absolute z-10"
	class:bindNav={y >= 1}
>
	<div class="flex-1 px-2 mx-2">
		<a class="flex content-center h-16 w-16 text-skin-Inverted" href="/"><Logo /></a>
	</div>

	<div class="flex-none hidden px-2 mx-2 lg:flex">
		<div class="flex items-stretch">
			<a class="nav-link text-skin-Base text-base tracking-wider" href="/projects">Portfolio </a>
			<a class="nav-link text-skin-Base text-base tracking-wider" href="/posts">Blog</a>
			<a class="nav-link text-skin-Base text-base tracking-wider" href="/about">About</a>
		</div>
	</div>
</div>

<!-- <div class="dropdown dropdown-end lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" on:click={toggleMenu}>
  <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
</button>

      <ul tabindex="-1" class="bg-neutral rounded-box shadow text-neutral-content p-2 w-52 menu dropdown-content ">
        <a class="btn" href="/projects">Portfolio</a>
        <a class="btn" href="/posts">Blog</a>
        <a class="btn" href="/about">About</a>
      </ul>
    </div> -->

<nav class="menu transition duration-500 ease-in-out transform" class:is-active={isActive}>
	<ul
		tabindex="-1"
		class="bg-neutral rounded-box shadow text-neutral-content p-2 w-52 menu dropdown-content "
	>
		<a class="btn" href="/projects">Portfolio</a>
		<a class="btn" href="/posts">Blog</a>
		<a class="btn" href="/about">About</a>
	</ul>
</nav>

<style>
	.bindNav {
		position: sticky;
	}
</style>
