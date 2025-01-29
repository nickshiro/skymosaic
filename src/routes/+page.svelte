<script>
	import { LeftBar } from '@widgets/leftbar';
	import { Paper } from '@widgets/paper';
	import { RightBar } from '@widgets/rightbar';
	import { Map } from '@widgets/map';
	import { Popup } from '@shared/ui/popup';
</script>

<div class="bg-primary lg:relative lg:h-screen">
	<div class="z-20 lg:fixed lg:bottom-0 lg:left-0 lg:top-0 lg:w-60">
		<LeftBar />
	</div>
	<main
		class="relative z-10 flex h-[80vh] items-center justify-center self-start lg:flex lg:h-[90vh]"
	>
		<div class="h-[90%]">
			<Paper />
		</div>
	</main>
	<div class="z-20 lg:fixed lg:bottom-0 lg:right-0 lg:top-0 lg:w-60">
		<RightBar />
	</div>
	<Popup>
		<Map />
	</Popup>
</div>
