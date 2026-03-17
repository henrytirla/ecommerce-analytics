<script>
	import { EvidenceDefaultLayout } from '@evidence-dev/core-components';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { dev } from '$app/environment';

	// Inject Vercel Analytics
	injectAnalytics({ mode: dev ? 'development' : 'production' });

	export let data;
</script>

<EvidenceDefaultLayout {data}>
	<slot slot="content" />
</EvidenceDefaultLayout>
