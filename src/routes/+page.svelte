<script context="module">
	import ProjectCard from '$lib/components/projectCard/projectCard.svelte';
	import Demographics from '$lib/components/demographics/demographics.svelte';
	import { client } from '$lib/graphql-client';
	import { authorsQuery, projectsQuery } from '$lib/graphql-queries';
	// import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';

	export const load = async () => {
		const [authorReq, projectsReq] = await Promise.all([
			client.request(authorsQuery),
			client.request(projectsQuery)
		]);
		const { authors } = authorReq;
		const { projects } = projectsReq;

		return {
			props: {
				projects,
				authors
			}
		};
	};

	export let projects = [];
	export let authors = [];
</script>

<svelte:head>
	<title>CW Munch</title>
</svelte:head>

{#each authors as { name, intro, picture: { url } }}
	<div class="flex flex-col justify-center gap-10 lg:flex-row items-center h-screen relative">
		<div class="mx-4 max-w-prose">
			<h2 class="text-2xl mb-5 text-skin-Base">{name}</h2>
			<h3 class="text-4xl mb-3 text-skin-Inverted">{intro}</h3>
			<p class="text-m mb-4 text-skin-Base">
				Hi my name is Christian. I'm a newly graduated UX and Digital product designer from
				Copenhagen School of Design and Technology looking for my next project! I am passioned about
				UX research, design sprints and workshops.
			</p>
			<div class="flex gap-10 my-3">
				<a href="https://www.linkedin.com/in/christianmunch1/" target="_blank" rel="noreferrer">
					<button
						id="Linkedin"
						class="bg-nutural sticky duration-500 border border-gray-600 hover:border-transparent fixed  w-12 transform h-12 text-2xl rounded-lg hover:bg-skin-btnHover hover:text-skin-Muted text-gray-400"
					>
						<i class="fab fa-linkedin" />
					</button>
				</a>

				<a href="https://github.com/cwmunch" target="_blank" rel="noreferrer">
					<button
						id="GitHub"
						class="bg-nutural sticky duration-500 border border-gray-600 hover:border-transparent fixed  w-12 transform h-12 text-2xl rounded-lg hover:bg-skin-btnHover hover:text-skin-Muted text-gray-400"
					>
						<i class="fab fa-github" />
					</button>
				</a>

				<a href="https://twitter.com/CwmMunch" target="_blank" rel="noreferrer">
					<button
						id="Twitter"
						class="bg-nutural sticky duration-500 border border-gray-600 hover:border-transparent fixed  w-12 transform h-12 text-2xl rounded-lg hover:bg-skin-btnHover hover:text-skin-Muted text-gray-400"
					>
						<i class="fab fa-twitter" />
					</button>
				</a>
			</div>
		</div>
		<img class="mask mask-circle w-3/4 lg:w-1/3" src={url} alt={name} />
		<div
			class="absolute h-16 w-32 bottom-10 flex justify-center items-center"
			use:scrollTo={{ ref: 'demographics', duration: 1500 }}
		>
			<svg
				class="animate-bounce w-8 h-8"
				id="Lag_2"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 12 12"
				><defs
					><style>
						.cls-1 {
							fill: #25e6a3;
						}
					</style></defs
				><g id="Lag_1-2"
					><g
						><path
							class="cls-1"
							d="m6,.25c3.17,0,5.75,2.58,5.75,5.75s-2.58,5.75-5.75,5.75S.25,9.17.25,6,2.83.25,6,.25m0-.25C2.69,0,0,2.69,0,6s2.69,6,6,6,6-2.69,6-6S9.31,0,6,0h0Z"
						/><polygon
							class="cls-1"
							points="8.32 4.48 6 6.81 3.68 4.48 3.32 4.84 5.65 7.16 6 7.52 6.35 7.16 8.68 4.84 8.32 4.48"
						/></g
					></g
				></svg
			>
		</div>
	</div>
{/each}

<div>
	<h2
		class="text-5xl mb-4 pt-5
 tracking-wider"
	>
		About me
	</h2>
	<Demographics />
</div>
<!-- 
<div use:scrollRef={'demographics'}>
	<h2
		class="text-5xl mb-4 pt-5
 tracking-wider"
	>
		About me
	</h2>
	<Demographics />
</div> -->

<div class="grid gap-10 md:grid-cols-4 max-w-screen-xl2">
	{#each projects as { name, slug, description, image }}
		<ProjectCard {name} {description} url={image[0].url} {slug} />
	{/each}
</div>
