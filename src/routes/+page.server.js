import { client } from '$lib/graphql-client';
import { authorsQuery, projectsQuery } from '$lib/graphql-queries';

// export const load = async () => {
//     const [authorReq, projectsReq] = await Promise.all([
//         client.request(authorsQuery),
//         client.request(projectsQuery)
//     ]);
//     const { authors } = authorReq;
//     const { projects } = projectsReq;

//     return {
//         props: {
//             projects,
//             authors
//         }
//     };
// };

export const loadAuthors = async () => {
	const authorReq = await Promise(client.request(authorsQuery));
	const { authors } = authorReq;

	return {
		props: {
			authors
		}
	};
};

export const loadProjects = async () => {
	const projectsReq = await Promise(client.request(projectsQuery));
	const { projects } = projectsReq;

	return {
		props: {
			projects
		}
	};
};
