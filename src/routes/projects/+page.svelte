<script context="module">
	import ProjectCard from '$lib/components/projectCard/projectCard.svelte';
	import { client } from '$lib/graphql-client';
	import { projectsQuery } from '$lib/graphql-queries';

	export const load = async () => {
		const { projects } = await client.request(projectsQuery);

		return {
			props: {
				projects
			}
		};
	};
</script>

<script>
	export let projects;
</script>

<svelte:head>
	<title>My Portfolio projects</title>
</svelte:head>

<h1 class="font-bold mb-20 text-center text-5xl">My Projects</h1>

<div class="grid gap-10 md:grid-cols-4 md:px-10 max-w-screen-xl2">
	{#each projects as { name, slug, description, image }, index}
		<ProjectCard {name} {description} url={image[0].url} {index} {slug} />
	{/each}
</div>
