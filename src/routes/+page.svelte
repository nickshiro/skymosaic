<script>
	import { LeftBar } from '@widgets/leftbar';
	import { Paper } from '@widgets/paper';
	import { RightBar } from '@widgets/rightbar';
</script>

<div class="relative h-screen justify-between overflow-scroll bg-primary">
	<LeftBar />
	<main class="flex h-screen items-center justify-center">
		<div class="h-[90%]">
			<Paper />
		</div>
	</main>
	<RightBar />
</div>
